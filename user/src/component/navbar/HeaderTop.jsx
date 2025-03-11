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
    if (!searchTerm) {
      // Remove all highlights when input is cleared
      document.querySelectorAll("mark").forEach((mark) => {
        mark.replaceWith(document.createTextNode(mark.textContent));
      });
      return;
    }
  
    const highlightTextNodes = (node) => {
      if (node.nodeType === 3) {
        const text = node.nodeValue;
        const regex = new RegExp(`(${searchTerm})`, "gi");
  
        if (regex.test(text)) {
          // Split the text into parts based on the search term
          const parts = text.split(regex);
          const fragment = document.createDocumentFragment();
  
          parts.forEach((part) => {
            if (part.toLowerCase() === searchTerm.toLowerCase()) {
              const mark = document.createElement("mark");
              mark.style.background = "yellow";
              mark.textContent = part;
              fragment.appendChild(mark);
            } else {
              fragment.appendChild(document.createTextNode(part));
            }
          });
  
          node.replaceWith(fragment);
        }
      } else {
        node.childNodes.forEach((child) => highlightTextNodes(child));
      }
    };
  
    // Clear previous highlights
    document.querySelectorAll("mark").forEach((mark) => {
      mark.replaceWith(document.createTextNode(mark.textContent));
    });
  
    // Apply new highlights
    document.body.childNodes.forEach((node) => highlightTextNodes(node));
  }, [searchTerm]);
  
  

  return (
    <div className="hidden md:flex items-center ml-auto space-x-4 text-sm text-gray-600">
      <div className="flex justify-end items-center w-full text-sm text-gray-600 mb-2 md:mb-0">
        <span>
        MPSOS सहायता केंद्र नंबर: <b>0755 - 2552106 , 2671066</b>
        </span>
      </div>
      <div className="bg-black flex items-center ml-auto space-x-4 pl-10 rounded-bl-full pr-5">
        <div className="relative flex items-center w-1/3">
          <label htmlFor="search" className="text-white hover:text-gray-300">
            Search:
          </label>
          <div className="border rounded-sm relative">
            
            <input type="text"  value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}/>
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
