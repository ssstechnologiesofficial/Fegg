import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'

const HeaderTop = () => {
  const [fontSize, setFontSize] = useState(16) // Default font size
  const [searchTerm, setSearchTerm] = useState('') // State for search input

  // Increase Font Size
  const increaseFontSize = () => {
    setFontSize((prevSize) => prevSize + 2)
    document.documentElement.style.fontSize = `${fontSize + 2}px`
  }

  // Decrease Font Size
  const decreaseFontSize = () => {
    setFontSize((prevSize) => Math.max(12, prevSize - 2)) // Prevents font size from getting too small
    document.documentElement.style.fontSize = `${Math.max(12, fontSize - 2)}px`
  }

  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value)
  }

  // Function to highlight search term
  useEffect(() => {
    const elements = document.querySelectorAll(
      'p, span, div, h1, h2, h3, h4, h5, h6, a'
    )

    elements.forEach((element) => {
      if (element.children.length === 0) {
        let originalText = element.textContent
        if (searchTerm.trim() === '') {
          element.innerHTML = originalText // Reset text when search is cleared
        } else {
          const regex = new RegExp(`(${searchTerm})`, 'gi')
          element.innerHTML = originalText.replace(
            regex,
            `<mark class="bg-yellow-300">$1</mark>`
          )
        }
      }
    })
  }, [searchTerm]) // Runs whenever `searchTerm` changes

  return (
    <div className="hidden md:flex items-center ml-auto space-x-4 text-sm text-gray-600">
      <div className="flex justify-end items-center w-full text-sm text-gray-600 mb-2 md:mb-0">
        <span>
          MPSOS सहायता केंद्र नंबर <b>0755 - 2552106 , 2671066</b>
        </span>
      </div>
      <div className="bg-black flex items-center ml-auto space-x-4 pl-10 rounded-bl-full pr-5">
        <div className="relative flex items-center w-1/3">
          <label htmlFor="search" className="text-white hover:text-gray-300">
            Search:
          </label>
          <div className="border rounded-sm relative">
            <input
              type="text"
              id="search"
              value={searchTerm}
              onChange={handleSearchChange}
              className="w-full px-14 text-black placeholder-gray-400 bg-transparent focus:outline-none"
              placeholder="Enter word..."
            />
            <button className="absolute right-2 text-white bg-gray-600 rounded ">
              🔍
            </button>
          </div>
        </div>

        <span className="text-white">|</span>
        <NavLink to="/newsletter" className="text-white hover:text-gray-300">
          Newsletter
        </NavLink>
        <span className="text-white">|</span>
        <NavLink to="/gallery" className="text-white hover:text-gray-300">
          Gallery
        </NavLink>
        <span className="text-white">|</span>
        <NavLink to="/faq" className="text-white hover:text-gray-300">
          FAQ
        </NavLink>
        <span className="text-white">|</span>
        <div className="flex items-center space-x-2">
          <button
            onClick={decreaseFontSize}
            className="text-xs px-2 text-white rounded bg-gray-700 hover:bg-gray-500"
          >
            A
          </button>
          <button
            onClick={increaseFontSize}
            className="text-sm font-bold text-white px-2 rounded bg-gray-700 hover:bg-gray-500"
          >
            A+
          </button>
        </div>
        <span className="text-white">|</span>
        <select className="bg-white border border-gray-300 px-2 py-1 text-sm rounded">
          <option value="en">English</option>
          <option value="hi">Hindi</option>
        </select>
      </div>
    </div>
  )
}

export default HeaderTop
