import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FaHome } from 'react-icons/fa'

const NavLinks = () => {
  const [isAboutOpen, setIsAboutOpen] = useState(false)
  const [isProgrammesOpen, setIsProgrammesOpen] = useState(false)
  const [isAdmissionOpen, setIsAdmissionOpen] = useState(false)
  const [isEventsOpen, setIsEventsOpen] = useState(false)
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false)
  const [isContactusOpen, setIsContactusOpen] = useState(false)
  const [isStudentCornerOpen, setIsStudentCornerOpen] = useState(false)

  const dropdownMenu = (menuItems) => (
    <ul className="absolute left-0 z-10 top-full bg-white shadow-md w-40">
      {menuItems.map((item, index) => (
        <li
          key={index}
          className={`border-l-4 ${
            index % 2 === 0 ? 'border-red-500' : 'border-red-300'
          }`}
        >
          <NavLink to={item.link} className="dropdown-item border-t py-2 px-4">
            {item.label}
          </NavLink>
        </li>
      ))}
    </ul>
  )

  return (
    <ul className="flex flex-col md:flex-row md:items-center md:justify-between px-12  space-y-4 md:space-y-0 md:space-x-6">
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
        <NavLink to="/" className="nav-link py-2" activeClassName="active-link">
          About Us
        </NavLink>
        {isAboutOpen &&
          dropdownMenu([
            { link: '/about', label: 'About us' },
            { link: '/about', label: 'Vision & Mission' },
            { link: '/EGteam', label: 'EG Senior Management Team' },
            { link: '/objectives', label: 'MPSOS Management Team' },
            // { link: "/committee", label: "Committee" },
            // { link: "/rti", label: "RTI" },
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
            { link: '/Pragati', label: 'Pragati' },
            // { link: "/12th-class", label: "12th Class" },
            // { link: "/vocational-course", label: "Vocational Course" },
          ])}
      </li>
      {/* <li
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
      </li> */}
      <li
        className="relative group"
        onMouseEnter={() => setIsStudentCornerOpen(true)}
        onMouseLeave={() => setIsStudentCornerOpen(false)}
      >
        <NavLink
          to="/student-corner"
          className="nav-link py-2"
          activeClassName="active-link"
        >
          Learners Corner
        </NavLink>
        {isStudentCornerOpen &&
          dropdownMenu([
            // djfj
            { link: '/e-content', label: 'Online Books' },
            { link: '/12th-class', label: 'Syllabus' },
            { link: '/onlinevideo', label: 'Recorded Videos' },
            { link: '/vocational-course', label: 'Blue Print' },
            {
              link: '/PreviousPaperOption',
              label: 'Previous Year Question Paper',
            },
            { link: '/vocational-course', label: 'Practice Set' },
            { link: '/vocational-course', label: 'Model Answer Sheet' },
          ])}
      </li>
      <li
        className="relative group"
        onMouseEnter={() => setIsEventsOpen(true)}
        onMouseLeave={() => setIsEventsOpen(false)}
      >
        <NavLink
          to="/events"
          className="nav-link py-2"
          activeClassName="active-link"
        >
          MPSOS
        </NavLink>
        {isEventsOpen &&
          dropdownMenu([
            { link: '/MPSOSInfo', label: 'About MPSOS' },
            { link: '/12th-class', label: 'Prospectus' },
            { link: '/CourseDetails', label: 'Registration procedure' },
            { link: '/AISECTInfo', label: 'About Aisect' },
            { link: '/FeesDetails', label: 'Aisect EG Login' },
          ])}
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
      {/* <li
        className="relative group"
        onMouseEnter={() => setIsNotificationsOpen(true)}
        onMouseLeave={() => setIsNotificationsOpen(false)}
      >
        <NavLink
          to="/notifications"
          className="nav-link py-2"
          activeClassName="active-link"
        >
          Notifications
        </NavLink>
        {isNotificationsOpen &&
          dropdownMenu([
            { link: "/10th-class", label: "Publication" },
            { link: "/12th-class", label: "Press Release" },
            { link: "/vocational-course", label: "Circular" },
            { link: "/vocational-course", label: "Results" },
            { link: "/vocational-course", label: "Fake Website" },
          ])}
      </li>
      <li
       className="relative group"
       onMouseEnter={() => setIsContactusOpen(true)}
       onMouseLeave={() => setIsContactusOpen(false)}>
        <NavLink
          to="/contactus"
          className="nav-link py-2"
          activeClassName="active-link"
        >
          Contact Us
        </NavLink>
        {isContactusOpen &&
          dropdownMenu([
            { link: "/10th-class", label: "Headquarter" },
            { link: "/12th-class", label: "Regional center list" },
            { link: "/vocational-course", label: "Nodal center list" },
          ])}
      </li>
      <li className="relative group">
        <button className="flex items-center nav-link py-2">Login</button>
        
      </li>
      */}
      <li>
        <NavLink to="/register" className=" py-2 ">
          STUDENT REGISTRATION
        </NavLink>
      </li>
      <li>
        <NavLink to="/register" className=" py-2 ">
          DEPARTMENTAL ACCESS
        </NavLink>
      </li>
    </ul>
  )
}

export default NavLinks
