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
    setFontSize((prevSize) => Math.max(12, prevSize - 2))
    document.documentElement.style.fontSize = `${Math.max(12, fontSize - 2)}px`
  }

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      if (!searchTerm.trim()) {
        // Remove all existing highlights when input is cleared
        document.querySelectorAll('mark').forEach((mark) => {
          mark.replaceWith(document.createTextNode(mark.textContent))
        })
        return
      }

      const highlightTextNodes = (node) => {
        if (node.nodeType === 3) {
          const text = node.nodeValue
          const search = searchTerm.trim() // Remove extra spaces
          const regex = new RegExp(search, 'gi') // Case insensitive search

          if (regex.test(text)) {
            const span = document.createElement('span')
            span.innerHTML = text.replace(
              regex,
              (match) => `<mark style="background: yellow;">${match}</mark>`
            )
            node.replaceWith(span)
          }
        } else {
          node.childNodes.forEach((child) => highlightTextNodes(child))
        }
      }

      // Clear previous highlights before applying new ones
      document.querySelectorAll('mark').forEach((mark) => {
        mark.replaceWith(document.createTextNode(mark.textContent))
      })

      // Apply new highlights
      document.body.childNodes.forEach((node) => highlightTextNodes(node))
    }, 800) // Delay for 300ms to wait for typing to settle

    return () => clearTimeout(delayDebounce) // Cleanup timeout
  }, [searchTerm])

  return (
    <div className="hidden md:flex items-center ml-auto space-x-4 text-sm text-gray-600">
      <div className="flex justify-end items-center w-full text-sm text-gray-600 mb-2 md:mb-0">
        <span>
          MPSOS सहायता केंद्र नंबर: <b>0755 - 2552106 , 2671066</b>
        </span>
      </div>
      <div className="bg-black flex items-center ml-auto space-x-3 pl-10 rounded-bl-full pr-5">
        <div className="relative flex items-center w-72">
          <label htmlFor="search" className="text-white hover:text-gray-300">
            खोजें :
          </label>
          <div className="border rounded-sm relative">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button className="absolute right-2 text-white bg-gray-600 rounded ">
              🔍
            </button>
          </div>
        </div>

        <span className="text-white">|</span>
        <NavLink to="/newsletter" className="text-white hover:text-gray-300">
          संवादपत्र
        </NavLink>
        <span className="text-white">|</span>
        <NavLink to="/gallery" className="text-white hover:text-gray-300">
          गैलरी
        </NavLink>
        <span className="text-white">|</span>
        <NavLink to="/faq" className="text-white hover:text-gray-300 text-xs">
          FAQ अक्सर पूछे जाने वाले प्रश्न
        </NavLink>
        <span className="text-white">|</span>
        <div className="flex items-center space-x-2">
          <button
            onClick={decreaseFontSize}
            className="text-xs px-2  text-white rounded bg-gray-700 hover:bg-gray-500"
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
