const { assetPrefix } = require(`../../gatsby-config`)

const assetPrefixExpression = new RegExp(`^${assetPrefix}`)

const assetPrefixMatcher = (chain, attr = `href`) =>
  chain.should(`have.attr`, attr).and(`matches`, assetPrefixExpression)

describe(`assetPrefix`, () => {
  beforeEach(() => {
    cy.visit(`/`).waitForRouteChange()
  })

  describe(`runtime`, () => {
    it(`prefixes preloads`, () => {
      assetPrefixMatcher(cy.get(`head link[rel="preload"]`))
    })

    it(`prefixes styles`, () => {
      assetPrefixMatcher(cy.get(`head style[data-href]`), `data-href`)
    })

    it(`prefixes scripts`, () => {
      assetPrefixMatcher(cy.get(`body script[src]`), `src`)
    })
  })

  describe(`gatsby-plugin-manifest`, () => {
    it(`prefixes manifest`, () => {
      assetPrefixMatcher(cy.get(`head link[rel="manifest"]`))
    })

    it(`prefixes shortcut icon`, () => {
      assetPrefixMatcher(cy.get(`head link[rel="shortcut icon"]`))
    })

    it(`prefixes manifest icons`, () => {
      assetPrefixMatcher(cy.get(`head link[rel="apple-touch-icon"]`))
    })
  })

  describe(`gatsby-plugin-sitemap`, () => {
    it(`prefixes sitemap`, () => {
      assetPrefixMatcher(cy.get(`head link[rel="sitemap"]`))
    })
  })

  describe(`gatsby-plugin-feed`, () => {
    it(`prefixes RSS feed`, () => {
      assetPrefixMatcher(cy.get(`head link[type="application/rss+xml"]`))
    })
  })
})
