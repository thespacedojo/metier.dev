/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import { css } from '@emotion/core'

import Header from "./header"
import "./layout.css"

const footer = css`
  grid-row-start: 4;
  text-align: center;
`

const grid = css`
  margin: 0 auto;
  max-width: 960;
  padding: 0px 1.0875rem 1.45rem;
  padding-top: 0;
  width: 100vw;
`
const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <div>
        <div
          css={grid}
        >
          <main >{children}</main>
          <footer css={footer}>
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </footer>
        </div>
      </div>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
