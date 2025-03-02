import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FiSun, FiMoon } from 'react-icons/fi'

const Navbar = () => {
  const [isDark, setIsDark] = useState(() => {
    const savedTheme = localStorage.getItem('theme')
    return savedTheme ? savedTheme === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches
  })
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [isDark])

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && !event.target.closest('.mobile-menu') && !event.target.closest('.menu-button')) {
        setIsOpen(false)
      }
    }

    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [isOpen])

  useEffect(() => {
    setIsOpen(false)
  }, [location])

  const handleLinkClick = () => {
    setIsOpen(false)
  }

  const handleThemeToggle = () => {
    setIsDark(!isDark)
    setIsOpen(false)
  }

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ease-in-out
      ${scrolled 
        ? 'bg-white/80 dark:bg-dark-900/80 backdrop-blur-lg shadow-lg' 
        : 'bg-white/50 backdrop-blur-sm dark:bg-dark-900/50 shadow-sm'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-primary-purple to-primary-pink dark:from-primary-orange dark:to-primary-pink text-transparent bg-clip-text hover:scale-110 transform transition-all duration-300 cursor-pointer animate-gradient">
              kz
            </h1>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <a href='#home' onClick={handleLinkClick} className="nav-link relative text-gray-700 dark:text-[#D6DCE4] px-3 py-2 rounded-md text-sm font-medium hover:text-primary-purple dark:hover:text-primary-orange transition-all duration-300 group">
                <span>Home</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-purple to-primary-pink dark:from-primary-orange dark:to-primary-pink group-hover:w-full transition-all duration-300"></span>
              </a>
              <a href='#about' onClick={handleLinkClick} className="nav-link relative text-gray-700 dark:text-[#D6DCE4] px-3 py-2 rounded-md text-sm font-medium hover:text-primary-purple dark:hover:text-primary-orange transition-all duration-300 group">
                <span>About</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-purple to-primary-pink dark:from-primary-orange dark:to-primary-pink group-hover:w-full transition-all duration-300"></span>
              </a>
              <a href='#project' onClick={handleLinkClick} className="nav-link relative text-gray-700 dark:text-[#D6DCE4] px-3 py-2 rounded-md text-sm font-medium hover:text-primary-purple dark:hover:text-primary-orange transition-all duration-300 group">
                <span>Projects</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-purple to-primary-pink dark:from-primary-orange dark:to-primary-pink group-hover:w-full transition-all duration-300"></span>
              </a>
              <a href='#service' onClick={handleLinkClick} className="nav-link relative text-gray-700 dark:text-[#D6DCE4] px-3 py-2 rounded-md text-sm font-medium hover:text-primary-purple dark:hover:text-primary-orange transition-all duration-300 group">
                <span>Services</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-purple to-primary-pink dark:from-primary-orange dark:to-primary-pink group-hover:w-full transition-all duration-300"></span>
              </a>
              <a href='#contact' onClick={handleLinkClick} className="nav-link relative text-gray-700 dark:text-[#D6DCE4] px-3 py-2 rounded-md text-sm font-medium hover:text-primary-purple dark:hover:text-primary-orange transition-all duration-300 group">
                <span>Contact</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-purple to-primary-pink dark:from-primary-orange dark:to-primary-pink group-hover:w-full transition-all duration-300"></span>
              </a>
              <button
                onClick={handleThemeToggle}
                className="p-2 rounded-full bg-gradient-to-r from-primary-purple to-primary-pink dark:from-primary-orange dark:to-primary-pink hover:shadow-lg hover:scale-110 transform transition-all duration-300 ease-in-out animate-gradient"
                aria-label="Toggle theme"
              >
                {isDark ? 
                  <FiSun className="w-5 h-5 text-dark-900 dark:text-white animate-[spin_3s_linear_infinite]" /> : 
                  <FiMoon className="w-5 h-5 text-dark-900 dark:text-white animate-[bounce_2s_ease-in-out_infinite]" />
                }
              </button>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={(e) => {
                e.stopPropagation()
                setIsOpen(!isOpen)
              }}
              className="menu-button inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-[#D6DCE4] hover:text-primary-purple dark:hover:text-primary-orange focus:outline-none transition-all duration-300"
              aria-label="Open menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`${isOpen ? 'hidden' : 'block'} h-6 w-6 transition-transform duration-300 hover:scale-110`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg
                className={`${isOpen ? 'block' : 'hidden'} h-6 w-6 transition-transform duration-300 hover:scale-110`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div 
        className={`mobile-menu ${isOpen ? 'translate-y-0 opacity-100 pointer-events-auto' : '-translate-y-full opacity-0 pointer-events-none'} 
        md:hidden fixed top-16 left-0 w-full bg-white/90 dark:bg-dark-900/90 backdrop-blur-lg transition-all duration-300 ease-in-out transform z-50`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a href='#home' onClick={handleLinkClick} className="relative text-gray-700 dark:text-[#D6DCE4] block px-3 py-2 rounded-md text-base font-medium hover:bg-gradient-to-r hover:from-primary-purple/10 hover:to-primary-pink/10 dark:hover:from-primary-orange/10 dark:hover:to-primary-pink/10 transition-all duration-300 group">
            <span>Home</span>
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-purple to-primary-pink dark:from-primary-orange dark:to-primary-pink group-hover:w-full transition-all duration-300"></span>
          </a>
          <a href='#about' onClick={handleLinkClick} className="relative text-gray-700 dark:text-[#D6DCE4] block px-3 py-2 rounded-md text-base font-medium hover:bg-gradient-to-r hover:from-primary-purple/10 hover:to-primary-pink/10 dark:hover:from-primary-orange/10 dark:hover:to-primary-pink/10 transition-all duration-300 group">
            <span>About</span>
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-purple to-primary-pink dark:from-primary-orange dark:to-primary-pink group-hover:w-full transition-all duration-300"></span>
          </a>
          <a href='#project' onClick={handleLinkClick} className="relative text-gray-700 dark:text-[#D6DCE4] block px-3 py-2 rounded-md text-base font-medium hover:bg-gradient-to-r hover:from-primary-purple/10 hover:to-primary-pink/10 dark:hover:from-primary-orange/10 dark:hover:to-primary-pink/10 transition-all duration-300 group">
            <span>Projects</span>
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-purple to-primary-pink dark:from-primary-orange dark:to-primary-pink group-hover:w-full transition-all duration-300"></span>
          </a>
          <a href='#service' onClick={handleLinkClick} className="relative text-gray-700 dark:text-[#D6DCE4] block px-3 py-2 rounded-md text-base font-medium hover:bg-gradient-to-r hover:from-primary-purple/10 hover:to-primary-pink/10 dark:hover:from-primary-orange/10 dark:hover:to-primary-pink/10 transition-all duration-300 group">
            <span>Services</span>
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-purple to-primary-pink dark:from-primary-orange dark:to-primary-pink group-hover:w-full transition-all duration-300"></span>
          </a>
          <a href='#Contact' onClick={handleLinkClick} className="relative text-gray-700 dark:text-[#D6DCE4] block px-3 py-2 rounded-md text-base font-medium hover:bg-gradient-to-r hover:from-primary-purple/10 hover:to-primary-pink/10 dark:hover:from-primary-orange/10 dark:hover:to-primary-pink/10 transition-all duration-300 group">
            <span>Contact</span>
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-purple to-primary-pink dark:from-primary-orange dark:to-primary-pink group-hover:w-full transition-all duration-300"></span>
          </a>
          <button
            onClick={handleThemeToggle}
            className="w-full text-left px-3 py-2 text-gray-700 dark:text-[#D6DCE4] hover:bg-gradient-to-r hover:from-primary-purple/20 hover:to-primary-pink/20 dark:hover:from-primary-orange/20 dark:hover:to-primary-pink/20 rounded-md text-base font-medium transition-all duration-300"
          >
            <span className="flex items-center gap-2">
              {isDark ? (
                <>Light Mode <FiSun className="animate-[spin_3s_linear_infinite]" /></>
              ) : (
                <>Dark Mode <FiMoon className="animate-[bounce_2s_ease-in-out_infinite]" /></>
              )}
            </span>
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
