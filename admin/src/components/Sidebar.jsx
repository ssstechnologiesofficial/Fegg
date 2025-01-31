// import React, { useState } from 'react'
// import { Outlet, Link } from 'react-router-dom'
// import { TbLayoutDashboardFilled } from 'react-icons/tb'
// import {
//   FaChalkboardTeacher,
//   FaCalendarAlt,
//   FaClipboardList,
//   FaSignOutAlt,
// } from 'react-icons/fa'
// import { FaBars } from 'react-icons/fa6'
// import { FaUserShield } from 'react-icons/fa'

// const Sidebar = () => {
//   const [isCollapsed, setIsCollapsed] = useState(false)

//   const toggleSidebar = () => {
//     setIsCollapsed(!isCollapsed)
//   }

//   return (
//     <div className="flex h-screen bg-gray-100">
//       {/* Sidebar */}
//       <aside
//         className={`${
//           isCollapsed ? 'w-16' : 'w-60'
//         } bg-gradient-to-br from-[#bb2d3b] via-black to-[#fe0000] text-white fixed h-full shadow-lg transition-all duration-300`}
//       >
//         <div className="p-4 flex items-center justify-between">
//           {!isCollapsed && (
//             <div className="flex flex-col items-center ">
//               <div className="flex items-center justify-center rounded-full bg-gradient-to-r from-[#fe0000] p-5 shadow-md">
//                 <FaUserShield size={36} className="text-white" />
//               </div>
//               <h1 className="text-xl font-semibold mt-2 bg-gradient-to-r  z-20 w-[200px] right-3  relative from-[#fe0000]">
//                 Admin Panel
//               </h1>
//             </div>
//           )}
//           <button
//             onClick={toggleSidebar}
//             className="text-white focus:outline-none hover:text-teal-400 transition duration-200"
//           >
//             <FaBars size={20} />
//           </button>
//         </div>

//         <nav className="mt-8">
//           <Link
//             to="dashboardCards"
//             className="flex items-center px-4 py-3 hover:bg-teal-500 hover:text-white rounded-lg transition-colors duration-300"
//           >
//             <TbLayoutDashboardFilled className="mr-2" size={20} />
//             {!isCollapsed && <span>Dashboard</span>}
//           </Link>

//           <Link
//             to="courses"
//             className="flex items-center px-4 py-3 hover:bg-teal-500 hover:text-white rounded-lg transition-colors duration-300"
//           >
//             <FaChalkboardTeacher className="mr-2" size={20} />
//             {!isCollapsed && <span>Courses</span>}
//           </Link>

//           <Link
//             to="event"
//             className="flex items-center px-4 py-3 hover:bg-teal-500 hover:text-white rounded-lg transition-colors duration-300"
//           >
//             <FaCalendarAlt className="mr-2" size={20} />
//             {!isCollapsed && <span>Events</span>}
//           </Link>

//           <Link
//             to="member-table"
//             className="flex items-center px-4 py-3 hover:bg-teal-500 hover:text-white rounded-lg transition-colors duration-300"
//           >
//             <FaClipboardList className="mr-2" size={20} />
//             {!isCollapsed && <span>Member Table</span>}
//           </Link>

//           <Link
//             to="/"
//             className="flex items-center px-4 py-3 hover:bg-teal-500 hover:text-white rounded-lg transition-colors duration-300"
//           >
//             <FaSignOutAlt className="mr-2" size={20} />
//             {!isCollapsed && <span>Logout</span>}
//           </Link>
//         </nav>
//       </aside>

//       {/* Main Content */}
//       <div
//         className={`flex-grow ${
//           isCollapsed ? 'ml-16' : 'ml-60'
//         } h-[100vh]  transition-all duration-300`}
//       >
//         <main className="p-3">
//           <Outlet />
//         </main>
//       </div>
//     </div>
//   )
// }

// export default Sidebar

import React, { useState } from 'react'
import { Outlet, Link } from 'react-router-dom'
import { TbLayoutDashboardFilled } from 'react-icons/tb'
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
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside
        className={`${
          isCollapsed ? 'w-16' : 'w-60'
        } fixed h-full bg-gray-200 text-gray-800 shadow-inner transition-all duration-300 flex flex-col border-r-2 border-black`}
        style={{
          boxShadow: 'inset 8px 8px 15px #b8b8b8, inset -8px -8px 15px #ffffff',
        }}
      >
        <div className="p-4 flex items-center justify-between">
          {!isCollapsed && (
            <div className="flex flex-col items-center ">
              <div
                className="flex items-center justify-center rounded-full shadow-md p-5"
                style={{
                  boxShadow: '8px 8px 15px #b8b8b8, -8px -8px 15px #ffffff',
                  background: 'linear-gradient(145deg, #e6e6e6, #ffffff)',
                }}
              >
                <FaUserShield size={36} className="text-gray-800" />
              </div>
              <h1 className="text-xl font-semibold mt-2 text-center">
                Admin Panel
              </h1>
            </div>
          )}
          <button
            onClick={toggleSidebar}
            className="text-gray-800 focus:outline-none hover:text-teal-500 transition duration-200"
          >
            <FaBars size={20} />
          </button>
        </div>

        <nav className="mt-8">
          <Link
            to="dashboardCards"
            className="flex items-center px-2 py-3 my-2 rounded-lg"
            style={{
              background: 'linear-gradient(145deg, #e6e6e6, #ffffff)',
              boxShadow: '0px 8px 15px #b8b8b8, -8px -8px 15px #ffffff',
              transition: 'all 0.3s',
            }}
          >
            <TbLayoutDashboardFilled className="mr-2" size={20} />
            {!isCollapsed && <span>Dashboard</span>}
          </Link>

          <Link
            to="courses"
            className="flex items-center px-4 py-3 my-2 rounded-lg"
            style={{
              background: 'linear-gradient(145deg, #e6e6e6, #ffffff)',
              boxShadow: '0px 8px 15px #b8b8b8, -8px -8px 15px #ffffff',
              transition: 'all 0.3s',
            }}
          >
            <FaChalkboardTeacher className="mr-2" size={20} />
            {!isCollapsed && <span>Enrolled Students</span>}
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
            className="flex items-center px-4 py-3 my-2 rounded-lg"
            style={{
              background: 'linear-gradient(145deg, #e6e6e6, #ffffff)',
              boxShadow: '0px 8px 15px #b8b8b8, -8px -8px 15px #ffffff',
              transition: 'all 0.3s',
            }}
          >
            <FaCalendarAlt className="mr-2" size={20} />
            {!isCollapsed && <span>Events</span>}
          </Link>

          <Link
            to="member-table"
            className="flex items-center px-4 py-3 my-2 rounded-lg"
            style={{
              background: 'linear-gradient(145deg, #e6e6e6, #ffffff)',
              boxShadow: '0px 8px 15px #b8b8b8, -8px -8px 15px #ffffff',
              transition: 'all 0.3s',
            }}
          >
            <FaClipboardList className="mr-2" size={20} />
            {!isCollapsed && <span>subject Table</span>}
          </Link>

          <Link
            to="/"
            className="flex items-center px-4 py-3 my-2 rounded-lg"
            style={{
              background: 'linear-gradient(145deg, #e6e6e6, #ffffff)',
              boxShadow: '0px 8px 15px #b8b8b8, -8px -8px 15px #ffffff',
              transition: 'all 0.3s',
            }}
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
        } h-[100vh] transition-all duration-300`}
      >
        <main className="p-3">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default Sidebar
