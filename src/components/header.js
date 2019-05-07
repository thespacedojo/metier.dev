import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { css } from '@emotion/core'

const header = css`
  font-family: 'Tangerine', cursive;
`

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `white`,
      marginBottom: `1.45rem`,
      padding: `0.5rem 2rem`
    }}
  >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `#222`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
