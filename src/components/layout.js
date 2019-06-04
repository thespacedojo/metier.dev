/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React, { Fragment } from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import { css } from '@emotion/core'

import Header from "./header"
import "./layout.css"

const footer = css`
  display:flex;
  flex-shrink: 0;
  height: 4rem;
  color: white;
  background-color: #687F92;
  align-items: center;
  justify-content: center;

  a, a:visited {
    color: cornflowerblue
  }
`

const main = css`
  margin: 0 auto;
  color: white;
  padding: 0px 1.0875rem 1.45rem;
  padding-top: 0;
  flex: 1 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const flexer = css`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
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
      <div css={flexer}>
        <Header siteTitle={"Metier"}/>
        <main css={main} >{children}</main>
        <footer css={footer}>
          © {new Date().getFullYear()} Fourbeansoup LLC. Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
