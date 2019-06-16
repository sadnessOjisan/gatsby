const { createHash } = require(`crypto`)
const uuid = require(`uuid/v1`)
const EventStorage = require(`./event-storage`)
const { sanitizeErrors } = require(`./error-helpers`)
const ci = require(`ci-info`)
const os = require(`os`)
const { basename, join, sep } = require(`path`)
const { execSync } = require(`child_process`)
const isDocker = require(`is-docker`)
const showAnalyticsNotification = require(`./showAnalyticsNotification`)

module.exports = class AnalyticsTracker {
  store = new EventStorage()
  debouncer = {}
  metadataCache = {}
  defaultTags = {}
  osInfo // lazy
  trackingEnabled // lazy
  componentVersion
  sessionId = uuid()
  constructor() {
    try {
      this.componentVersion = require(`../package.json`).version
      this.installedGatsbyVersion = this.getGatsbyVersion()
      this.gatsbyCliVersion = this.getGatsbyCliVersion()
    } catch (e) {
      // ignore
    }
  }

  getGatsbyVersion() {
    const packageInfo = require(join(
      process.cwd(),
      `node_modules`,
      `gatsby`,
      `package.json`
    ))
    try {
      return packageInfo.version
    } catch (e) {
      // ignore
    }
    return undefined
  }

  getGatsbyCliVersion() {
    try {
      const jsonfile = join(
        require
          .resolve(`gatsby-cli`) // Resolve where current gatsby-cli would be loaded from.
          .split(sep)
          .slice(0, -2) // drop lib/index.js
          .join(sep),
        `package.json`
      )
      const { version } = require(jsonfile).version
      return version
    } catch (e) {
      // ignore
    }
    return undefined
  }
  captureEvent(type = ``, tags = {}) {
    if (!this.isTrackingEnabled()) {
      return
    }
    let baseEventType = `CLI_COMMAND`
    if (Array.isArray(type)) {
      type = type.length > 2 ? type[2].toUpperCase() : ``
      baseEventType = `CLI_RAW_COMMAND`
    }

    const decoration = this.metadataCache[type]
    delete this.metadataCache[type]
    const eventType = `${baseEventType}_${type}`
    this.buildAndStoreEvent(eventType, Object.assign(tags, decoration))
  }

  captureError(type, tags = {}) {
    if (!this.isTrackingEnabled()) {
      return
    }
    const decoration = this.metadataCache[type]
    delete this.metadataCache[type]
    const eventType = `CLI_ERROR_${type}`

    if (tags.error) {
      // `error` ought to have been `errors` but is `error` in the database
      tags.error = sanitizeErrors(tags.error)
    }

    this.buildAndStoreEvent(eventType, Object.assign(tags, decoration))
  }

  captureBuildError(type, tags = {}) {
    if (!this.isTrackingEnabled()) {
      return
    }
    const decoration = this.metadataCache[type]
    delete this.metadataCache[type]
    const eventType = `BUILD_ERROR_${type}`

    if (tags.error) {
      // `error` ought to have been `errors` but is `error` in the database
      tags.error = sanitizeErrors(tags.error)
    }

    this.buildAndStoreEvent(eventType, Object.assign(tags, decoration))
  }

  buildAndStoreEvent(eventType, tags) {
    const event = {
      installedGatsbyVersion: this.installedGatsbyVersion,
      gatsbyCliVersion: this.gatsbyCliVersion,
      ...this.defaultTags,
      ...tags, // The schema must include these
      eventType,
      sessionId: this.sessionId,
      time: new Date(),
      machineId: this.getMachineId(),
      repositoryId: this.getRepoId(),
      componentId: `gatsby-cli`,
      osInformation: this.getOsInfo(),
      componentVersion: this.componentVersion,
    }
    this.store.addEvent(event)
  }

  getMachineId() {
    // Cache the result
    if (this.machineId) {
      return this.machineId
    }
    let machineId = this.store.getConfig(`telemetry.machineId`)
    if (!machineId) {
      machineId = uuid()
      this.store.updateConfig(`telemetry.machineId`, machineId)
    }
    this.machineId = machineId
    return machineId
  }

  isTrackingEnabled() {
    // Cache the result
    if (this.trackingEnabled !== undefined) {
      return this.trackingEnabled
    }
    let enabled = this.store.getConfig(`telemetry.enabled`)
    if (enabled === undefined || enabled === null) {
      if (!ci.isCI) {
        showAnalyticsNotification()
      }
      enabled = true
      this.store.updateConfig(`telemetry.enabled`, enabled)
    }
    this.trackingEnabled = enabled
    return enabled
  }

  getRepoId() {
    // we may live multiple levels in git repo
    let prefix = `pwd:`
    let repo = basename(process.cwd())
    try {
      const originBuffer = execSync(
        `git config --local --get remote.origin.url`,
        { timeout: 1000, stdio: `pipe` }
      )
      repo = String(originBuffer).trim()
      prefix = `git:`
    } catch (e) {
      // ignore
    }
    const hash = createHash(`sha256`)
    hash.update(repo)
    return prefix + hash.digest(`hex`)
  }

  getOsInfo() {
    if (this.osInfo) {
      return this.osInfo
    }
    const cpus = os.cpus()
    const osInfo = {
      nodeVersion: process.version,
      platform: os.platform(),
      release: os.release(),
      cpus: (cpus && cpus.length > 0 && cpus[0].model) || undefined,
      arch: os.arch(),
      ci: ci.isCI,
      ciName: (ci.isCI && ci.name) || process.env.CI_NAME || undefined,
      docker: isDocker(),
    }
    this.osInfo = osInfo
    return osInfo
  }

  trackActivity(source) {
    if (!this.isTrackingEnabled()) {
      return
    }
    // debounce by sending only the first event whithin a rolling window
    const now = Date.now()
    const last = this.debouncer[source] || 0
    const debounceTime = 5 * 1000 // 5 sec

    if (now - last > debounceTime) {
      this.captureEvent(source)
    }
    this.debouncer[source] = now
  }

  decorateNextEvent(event, obj) {
    const cached = this.metadataCache[event] || {}
    this.metadataCache[event] = Object.assign(cached, obj)
  }

  decorateAll(tags) {
    this.defaultTags = Object.assign(this.defaultTags, tags)
  }

  setTelemetryEnabled(enabled) {
    this.trackingEnabled = enabled
    this.store.updateConfig(`telemetry.enabled`, enabled)
  }

  async sendEvents() {
    if (!this.isTrackingEnabled()) {
      return Promise.resolve()
    }
    return this.store.sendEvents()
  }
}
