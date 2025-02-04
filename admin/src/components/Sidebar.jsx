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
import { FiChevronDown, FiChevronUp } from 'react-icons/fi'
import { FaList, FaQuestionCircle, FaEnvelopeOpenText } from 'react-icons/fa'
const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [isMockDropdownOpen, setIsMockDropdownOpen] = useState(false)
  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed)
  }

  return (
    <div className="flex h-screen bg-gray-100 ">
      {/* Sidebar */}
      <aside
        className={`${
          isCollapsed ? 'w-16' : 'w-60'
        } bg-white text-black fixed border-[#fe0000] border-r-2  h-full shadow-lg transition-all duration-300`}
      >
        <div className="p-4 flex items-center justify-between">
          {!isCollapsed && (
            <div className="flex flex-col items-center ">
              <div className="flex items-center justify-center rounded-full  p-5 shadow-md">
                {/* <FaUserShield size={36} className="text-white" /> */}
                <img src={fagglogo} className="w-20 object-fill mx-auto py-2" />
              </div>
              <h1 className="text-xl font-semibold mt-2 bg-gradient-to-r  from-[#fe0000] z-20 w-[200px] right-4 text-white  relative ">
                Admin Panel
              </h1>
            </div>
          )}
          <button
            onClick={toggleSidebar}
            className="text-[#fe0000] focus:outline-none hover:text-teal-400 transition duration-200"
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
            className="flex items-center px-4 py-3  hover:text-white rounded-lg transition-colors duration-300 hover:bg-gradient-to-r  hover:from-[#fe0000]"
          >
            <FaChalkboardTeacher className="mr-2" size={20} />
            {!isCollapsed && <span>E-Content Upload</span>}
          </Link>

          <Link
            to="OlineVideoUpload"
            className="flex items-center px-4 py-3  hover:text-white rounded-lg transition-colors duration-300 hover:bg-gradient-to-r  hover:from-[#fe0000]"
          >
            <FaChalkboardTeacher className="mr-2" size={20} />
            {!isCollapsed && <span>Oline Video Upload</span>}
          </Link>
          <Link
            to="hero-img"
            className="flex items-center px-4 py-3   hover:text-white rounded-lg transition-colors duration-300 hover:bg-gradient-to-r  hover:from-[#fe0000]"
          >
            <FaChalkboardTeacher className="mr-2" size={20} />
            {!isCollapsed && <span>Slider Image</span>}
          </Link>
          <Link
            to="announcement"
            className="flex items-center px-4 py-3   hover:text-white rounded-lg transition-colors duration-300 hover:bg-gradient-to-r  hover:from-[#fe0000]"
          >
            <FaChalkboardTeacher className="mr-2" size={20} />
            {!isCollapsed && <span>Announcement</span>}
          </Link>
          {/* Mock  Dropdown */}
          <div>
            <div
              onClick={() => setIsMockDropdownOpen(!isMockDropdownOpen)}
              className="flex justify-between items-center px-4 py-2  rounded-lg cursor-pointer  hover:text-white  transition-colors duration-300 hover:bg-gradient-to-r  hover:from-[#fe0000]"
            >
              <span className="flex items-center space-x-2">
                <FaEnvelopeOpenText />
                <span>Mock Test Management</span>
              </span>
              {isMockDropdownOpen ? <FiChevronUp /> : <FiChevronDown />}
            </div>
            {isMockDropdownOpen && (
              <div className="ml-4 mt-2 space-y-2">
                <Link
                  to="create-subject"
                  className="flex items-center space-x-2 px-4 py-2 hover:text-white rounded-lg transition-colors duration-300 hover:bg-gradient-to-r  hover:from-[#fe0000]"
                >
                  <FaQuestionCircle />
                  <span>Add Subject</span>
                </Link>

                <Link
                  to="create-questions"
                  className="flex items-center space-x-2 px-4 py-2 rounded-lg hover:bg-red-400 transition-all hover:shadow-md "
                >
                  <FaList />
                  <span>Create Questions</span>
                </Link>
                <Link
                  to="questions-manage"
                  className="flex items-center space-x-2 px-4 py-2 hover:text-white rounded-lg transition-colors duration-300 hover:bg-gradient-to-r  hover:from-[#fe0000]"
                >
                  <FaList />
                  <span>Questions Management</span>
                </Link>
                <Link
                  to="create-test"
                  className="flex items-center space-x-2 px-4 py-2 hover:text-white rounded-lg transition-colors duration-300 hover:bg-gradient-to-r  hover:from-[#fe0000]"
                >
                  <FaList />
                  <span>Create Test</span>
                </Link>
                <Link
                  to="MockSidebarResult"
                  className="flex items-center space-x-2 px-4 py-2 hover:text-white rounded-lg transition-colors duration-300 hover:bg-gradient-to-r  hover:from-[#fe0000]"
                >
                  <FaList />
                  <span>Mock Result</span>
                </Link>
              </div>
            )}
          </div>
          <Link
            to="EContentModel"
            className="flex items-center px-4 py-3   hover:text-white rounded-lg transition-colors duration-300 hover:bg-gradient-to-r  hover:from-[#fe0000]"
          >
            <FaCalendarAlt className="mr-2" size={20} />
            {!isCollapsed && <span>E-content Modal data</span>}
          </Link>
          <Link
            to="EContentModel"
            className="flex items-center px-4 py-3   hover:text-white rounded-lg transition-colors duration-300 hover:bg-gradient-to-r  hover:from-[#fe0000]"
          >
            <FaClipboardList className="mr-2" size={20} />
            {!isCollapsed && <span>E-Content Downloads data</span>}
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
