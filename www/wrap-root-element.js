import React from "react"
import { MDXProvider } from "@mdx-js/react"
import GuideList from "./src/components/guide-list.js"
import HubspotForm from "./src/components/hubspot-form"
import Pullquote from "./src/components/shared/pullquote"
import DateChart from "./src/components/chart"

const components = {
  GuideList,
  HubspotForm,
  DateChart,
  Pullquote,
}

export default ({ element }) => (
  <MDXProvider components={components}>{element}</MDXProvider>
)
