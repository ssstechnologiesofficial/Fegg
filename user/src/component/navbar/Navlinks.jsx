import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaHome } from "react-icons/fa";

const NavLinks = () => {
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isProgrammesOpen, setIsProgrammesOpen] = useState(false);
  const [isAdmissionOpen, setIsAdmissionOpen] = useState(false);

  const dropdownMenu = (menuItems) => (
    <ul className="absolute left-0 z-10 top-full bg-white shadow-md w-40">
      {menuItems.map((item, index) => (
        <li
          key={index}
          className={`border-l-4 ${
            index % 2 === 0 ? "border-red-500" : "border-red-300"
          }`}
        >
          <NavLink to={item.link} className="dropdown-item border-t py-2 px-4">
            {item.label}
          </NavLink>
        </li>
      ))}
    </ul>
  );

  return (
    <ul className="flex flex-col md:flex-row md:items-center md:justify-between px-4 md:px-8 space-y-4 md:space-y-0 md:space-x-6">
      <li>
        <NavLink
          to="/"
          className="nav-link flex items-center py-2"
          activeClassName="active-link"
        >
          <FaHome className="mr-2 text-xl" /> Home
        </NavLink>
      </li>
      <li
        className="relative group"
        onMouseEnter={() => setIsAboutOpen(true)}
        onMouseLeave={() => setIsAboutOpen(false)}
      >
        <NavLink
          to="/about"
          className="nav-link py-2"
          activeClassName="active-link"
        >
          About Us
        </NavLink>
        {isAboutOpen &&
          dropdownMenu([
            { link: "/history", label: "History" },
            { link: "/vision", label: "Vision & Mission" },
            { link: "/ordinance", label: "Ordinance/Act" },
            { link: "/objectives", label: "Objectives" },
            { link: "/committee", label: "Committee" },
            { link: "/rti", label: "RTI" },
          ])}
      </li>
      <li
        className="relative group"
        onMouseEnter={() => setIsProgrammesOpen(true)}
        onMouseLeave={() => setIsProgrammesOpen(false)}
      >
        <NavLink
          to="/programmes"
          className="nav-link py-2"
          activeClassName="active-link"
        >
          Programmes
        </NavLink>
        {isProgrammesOpen &&
          dropdownMenu([
            { link: "/10th-class", label: "10th Class" },
            { link: "/12th-class", label: "12th Class" },
            { link: "/vocational-course", label: "Vocational Course" },
          ])}
      </li>
      <li
        className="relative group"
        onMouseEnter={() => setIsAdmissionOpen(true)}
        onMouseLeave={() => setIsAdmissionOpen(false)}
      >
        <NavLink
          to="/admission"
          className="nav-link py-2"
          activeClassName="active-link"
        >
          Admission
        </NavLink>
        {isAdmissionOpen &&
          dropdownMenu([
            { link: "/10th-class", label: "10th Class" },
            { link: "/12th-class", label: "12th Class" },
            { link: "/vocational-course", label: "Vocational Course" },
          ])}
      </li>
      <li>
        <NavLink
          to="/student-corner"
          className="nav-link py-2"
          activeClassName="active-link"
        >
          Student Corner
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/events"
          className="nav-link py-2"
          activeClassName="active-link"
        >
          Events
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/notifications"
          className="nav-link py-2"
          activeClassName="active-link"
        >
          Notifications
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contactus"
          className="nav-link py-2"
          activeClassName="active-link"
        >
          Contact Us
        </NavLink>
      </li>
      <li className="relative group">
        <button className="flex items-center nav-link py-2">Login</button>
        {/* Dropdown for Login can be implemented similarly */}
      </li>
      <li>
        <NavLink
          to="/register"
          className="px-6 py-2 text-primary border border-gray-600 rounded-3xl"
        >
          Signup
        </NavLink>
      </li>
    </ul>
  );
};

export default NavLinks;
