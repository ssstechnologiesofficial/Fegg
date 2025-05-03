
import React, { useState, useEffect, useRef } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import './navbar.css'
import LogoSection from './LogoSection'
import HeaderTop from './HeaderTop'
import NavLinks from './Navlinks'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const navRef = useRef(null)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsMenuOpen(false)
      }
    }

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isMenuOpen])

  return (
    <header ref={navRef} className="header bg-white shadow-md sticky top-0 w-full z-50">
      <HeaderTop />
      <div className="flex items-center justify-between px-4 py-3 sm:px-8">
        <LogoSection />
        <button
          onClick={toggleMenu}
          className="text-gray-700 text-2xl md:hidden"
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
      <nav
        className={`${
          isMenuOpen ? 'block' : 'hidden'
        } md:block w-full shadow-md md:shadow-none`}
      >
        <NavLinks />
      </nav>
    </header>
  )
}

export default Navbar
