import React from 'react'

const ThemeToggle = () => {
  React.useEffect(() => {
    // Force dark mode always
    document.documentElement.classList.add('dark')
    localStorage.setItem('theme', 'dark')
  }, [])

  // Return null to not render anything
  return null
}

export default ThemeToggle
