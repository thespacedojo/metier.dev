import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { css } from '@emotion/core'


const Header = ({ siteTitle }) => (
  <header
    style={{
      marginBottom: `1.45rem`,
      padding: `0.5rem 2rem`,
      textAlign: `center`
    }}
  >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `#E9AF46`,
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
