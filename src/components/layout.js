/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"

import Header from "./header"
import "./layout.css"
import "./layout.less"
import Footer from "./footer"
import Animation from './animation'

const Layout = ({ children }) => {
  return (
    <>
      <div class="header-section">
        <Header />
        <div class="main-header-content">
          <div class="canvas-split">
            <Animation />
          </div>
          <div class="header-text">
            <h1>Clay Park</h1>
            <h3>Software Engineer - Full Stack</h3>
          </div>
        </div>


      </div>
        <div>
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
