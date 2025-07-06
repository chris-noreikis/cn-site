import React from 'react'
import { SocialIcon } from 'react-social-icons'
import ThemeToggle from './ThemeToggle'

const Layout = ({ title, children }) => {
  const navigation = (
    <nav className="mb-6">
      <ul className="flex gap-6 text-lg">
        <li>
          <a href="/" className="text-primary dark:text-primary-dark hover:text-primary-dark dark:hover:text-primary no-underline font-medium transition-colors">
            Home
          </a>
        </li>
        <li>
          <a href="/bookshelf" className="text-primary dark:text-primary-dark hover:text-primary-dark dark:hover:text-primary no-underline font-medium transition-colors">
            Bookshelf
          </a>
        </li>
      </ul>
    </nav>
  )

  const header = (
    <div>
      {navigation}
      <h1 className="main-heading">
        <a href="/" className="text-heading dark:text-heading-dark no-underline">
          {title}
        </a>
      </h1>
    </div>
  )

  const footer = (
    <footer className="mt-12 pt-8 border-t border-accent dark:border-accent-dark">
      <div className="flex justify-center">
        <div className="social-group">
          <SocialIcon url="https://www.linkedin.com/in/chris-noreikis-b98a4658/" />
          <SocialIcon url="https://github.com/chris-noreikis" />
          <SocialIcon url="https://www.facebook.com/chris.noreikis" />
          <SocialIcon url="https://twitter.com/CNoreikis" />
        </div>
      </div>
    </footer>
  )

  return (
    <div className="global-wrapper bg-background dark:bg-background-dark text-text dark:text-text-dark min-h-screen">
      <ThemeToggle />
      <header className="global-header">{header}</header>
      <main>{children}</main>
      {footer}
    </div>
  )
}

export default Layout
