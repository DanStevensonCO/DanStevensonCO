import React from "react"
import { Link } from "gatsby"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

    header = (
      <div class="header-block">
        <h1 className="main-heading">
          <Link to="/">{title}</Link>
        </h1>
        <nav class="nav-links">
          <a href="/" class="nav-link">Home</a> 
          {/* <a href="/" class="nav-link">About</a> 
          <a href="/" class="nav-link">Projects</a> 
          <a href="/" class="nav-link">Contact</a> */}
        </nav>
      </div>
    )

  return (
    <div className="header-wrapper">
      <header className="global-header">{header}</header>
      <div className="global-wrapper">
        <main>{children}</main>
          <footer>
          </footer>
      </div>
    </div>
  )
}

export default Layout
