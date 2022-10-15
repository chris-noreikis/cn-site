import * as React from "react"
import { Link } from "gatsby"
import { SocialIcon } from 'react-social-icons';

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <h1 className="main-heading">
        <Link to="/">{title}</Link>
          <div class={'social-group'}>
              <SocialIcon url="https://www.linkedin.com/in/chris-noreikis-b98a4658/" />
              <SocialIcon url="https://github.com/chris-noreikis" />
              <SocialIcon url="https://www.facebook.com/chris.noreikis" />
              <SocialIcon url="https://twitter.com/CNoreikis" />
          </div>
      </h1>
    )
  } else {
    header = (
      <Link className="header-link-home" to="/">
        {title}
      </Link>
    )
  }

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header">{header}</header>
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer>
    </div>
  )
}

export default Layout
