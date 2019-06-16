import React from "react"
import { render } from "react-testing-library"

import Banner from "../banner"

const matchers = [`Watch now`, `Register now`]

const getElement = utils => utils.getByText(text => matchers.includes(text))

test(`it renders an external link`, () => {
  const link = getElement(render(<Banner />))

  expect(link.getAttribute(`href`)).toContain(`https://`)
})
