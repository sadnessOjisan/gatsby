import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"
import { colors, space, fontSizes } from "../../utils/presets"

const FooterList = styled.ul`
  background: ${props => (props.bg ? props.bg : `0`)};
  border-top: 1px solid ${colors.ui.border.subtle};
  font-size: ${fontSizes[1]};
  margin: 0;
  padding: 0;
  padding-top: ${space[9]};
  margin-top: ${space[9]};
  padding-bottom: ${space[9]};
  list-style: none;
  text-align: center;
  width: 100%;

  li {
    display: inline-block;
    margin-right: 1em;

    &:after {
      color: ${colors.grey[30]};
      content: "•";
      padding-left: 1em;
    }

    &:last-of-type:after {
      content: "";
    }

    a {
      color: ${colors.text.secondary};
      border-color: ${colors.grey[30]};

      &:hover {
        color: ${colors.gatsby};
        border-color: ${colors.link.hoverBorder};
      }
    }
  }
`

const FooterLinks = props => (
  <FooterList bottomMargin={props.bottomMargin}>
    <li>
      <Link to="/accessibility-statement">Accessibility Statement</Link>
    </li>
    <li>
      <a href="https://www.gatsbyjs.com">Gatsbyjs.com</a>
    </li>
  </FooterList>
)

export default FooterLinks
