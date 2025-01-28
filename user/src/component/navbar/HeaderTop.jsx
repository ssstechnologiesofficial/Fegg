import React from "react";
import { NavLink } from "react-router-dom";

const HeaderTop = () => (
  <div className="hidden md:flex items-center ml-auto space-x-4 text-sm text-gray-600">
    <div className="flex justify-end items-center w-full text-sm text-gray-600 mb-2 md:mb-0">
      <span>
        Govt. Toll Free No.: <b>1800-180-9393</b>
      </span>
    </div>
    <div className="bg-black flex items-center ml-auto space-x-4 pl-10 rounded-bl-full pr-5">
      <div className="relative flex items-center w-1/3">
        <label htmlFor="" className="text-white hover:text-gray-300">
          Search:
        </label>
        <div className="border rounded-sm relative">
          <button className="absolute right-2 text-white">🔍</button>
          <input
            type="text"
            className="w-full px-14 text-white placeholder-gray-400 bg-transparent focus:outline-none"
          />
        </div>
      </div>
      <span className="text-white">|</span>
      <NavLink to="/newsletter" className="text-white hover:text-gray-300">
        Newsletter
      </NavLink>
      <NavLink to="/testimonials" className="text-white hover:text-gray-300">
        Testimonial
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
        <button className="text-xs px-2 text-white rounded">A</button>
        <button className="text-sm font-bold text-white px-2 rounded">A+</button>
      </div>
      <span className="text-white">|</span>
      <select className="bg-white border border-gray-300 px-2 py-1 text-sm rounded">
        <option value="en">English</option>
        <option value="hi">Hindi</option>
      </select>
    </div>
  </div>
);

export default HeaderTop;
