import React, { useState } from 'react'
import { Outlet, Link } from 'react-router-dom'
import { TbLayoutDashboardFilled } from 'react-icons/tb'
import fagglogo from '../../public/eg-logo.png'

import {
  FaChalkboardTeacher,
  FaCalendarAlt,
  FaClipboardList,
  FaSignOutAlt,
} from 'react-icons/fa'
import { FaBars } from 'react-icons/fa6'
import { FaUserShield } from 'react-icons/fa'

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false)

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed)
  }

  return (
    <div className="flex h-screen bg-gray-100 ">
      {/* Sidebar */}
      <aside
        className={`${
          isCollapsed ? 'w-16' : 'w-60'
        } bg-white text-black fixed border-[#fe0000] border-r-2 p-4 h-full shadow-lg transition-all duration-300`}
      >
        <div className="p-4 flex items-center justify-between">
          {!isCollapsed && (
            <div className="flex flex-col items-center ">
              <div className="flex items-center justify-center rounded-full  p-5 shadow-md">
                {/* <FaUserShield size={36} className="text-white" /> */}
                <img src={fagglogo} className="w-20 object-fill mx-auto py-1" />
              </div>
              <h1 className="text-xl text-center p-1 rounded-lg font-semibold mt-2 bg-gradient-to-r  from-[#fe0000] z-20 w-[200px] right-4 text-white  relative ">
                Admin Panel
              </h1>
            </div>
          )}
          <button
            onClick={toggleSidebar}
            className="text-green-600 focus:outline-none hover:text-teal-400 transition duration-200"
          >
            <FaBars size={20} />
          </button>
        </div>

        <nav className="mt-8">
          <Link
            to="dashboardCards"
            className="flex items-center px-4 py-3   hover:text-white rounded-lg transition-colors duration-300 hover:bg-gradient-to-r  hover:from-[#fe0000]"
          >
            <TbLayoutDashboardFilled className="mr-2" size={20} />
            {!isCollapsed && <span>Dashboard</span>}
          </Link>

          <Link
            to="students"
            className="flex items-center px-4 py-3   hover:text-white rounded-lg transition-colors duration-300 hover:bg-gradient-to-r  hover:from-[#fe0000]"
          >
            <FaChalkboardTeacher className="mr-2" size={20} />
            {!isCollapsed && <span>Students</span>}
          </Link>
          <Link
            to="EBooks"
            className="flex items-center px-4 py-3   hover:text-white rounded-lg transition-colors duration-300 hover:bg-gradient-to-r  hover:from-[#fe0000]"
          >
            <FaChalkboardTeacher className="mr-2" size={20} />
            {!isCollapsed && <span>E-Content Upload</span>}
          </Link>
          <Link
            to="hero-img"
            className="flex items-center px-4 py-3 my-2 rounded-lg"
            style={{
              background: 'linear-gradient(145deg, #e6e6e6, #ffffff)',
              boxShadow: '0px 8px 15px #b8b8b8, -8px -8px 15px #ffffff',
              transition: 'all 0.3s',
            }}
          >
            <FaChalkboardTeacher className="mr-2" size={20} />
            {!isCollapsed && <span>Hero Image</span>}
          </Link>
          <Link
            to="announcement"
            className="flex items-center px-4 py-3 my-2 rounded-lg"
            style={{
              background: 'linear-gradient(145deg, #e6e6e6, #ffffff)',
              boxShadow: '0px 8px 15px #b8b8b8, -8px -8px 15px #ffffff',
              transition: 'all 0.3s',
            }}
          >
            <FaChalkboardTeacher className="mr-2" size={20} />
            {!isCollapsed && <span>Announcement</span>}
          </Link>

          <Link
            to="event"
            className="flex items-center px-4 py-3   hover:text-white rounded-lg transition-colors duration-300 hover:bg-gradient-to-r  hover:from-[#fe0000]"
          >
            <FaCalendarAlt className="mr-2" size={20} />
            {!isCollapsed && <span>Events</span>}
          </Link>

          <Link
            to="member-table"
            className="flex items-center px-4 py-3   hover:text-white rounded-lg transition-colors duration-300 hover:bg-gradient-to-r  hover:from-[#fe0000]"
          >
            <FaClipboardList className="mr-2" size={20} />
            {!isCollapsed && <span>Register Student</span>}
          </Link>

          <Link
            to="/"
            className="flex items-center px-4 py-3   hover:text-white rounded-lg transition-colors duration-300 hover:bg-gradient-to-r  hover:from-[#fe0000]"
          >
            <FaSignOutAlt className="mr-2" size={20} />
            {!isCollapsed && <span>Logout</span>}
          </Link>
        </nav>
      </aside>

      {/* Main Content */}
      <div
        className={`flex-grow ${
          isCollapsed ? 'ml-16' : 'ml-60'
        } h-[100vh]  transition-all duration-300`}
      >
        <main className="p-3">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default Sidebar
