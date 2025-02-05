import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {
  FaUser,
  FaCalendarAlt,
  FaChalkboardTeacher,
  FaCogs,
} from 'react-icons/fa'

const Dashboard = () => {
  const [counts, setCounts] = useState({
    courseCount: 0,
    eventCount: 0,
    enrolledUsers: 0,
    subAdmins: 0,
  })

  const fetchCounts = async () => {
    try {
      const [courses, events] = await Promise.all([
        axios.get('http://localhost:5000/api/getTotalCourses'),
        axios.get('http://localhost:5000/api/events/count'),
      ])

      setCounts((prev) => ({
        ...prev,
        courseCount: courses.data.total,
        eventCount: events.data.total,
      }))
    } catch (error) {
      console.error('Error fetching counts:', error)
    }
  }

  const fetchAdditionalStats = async () => {
    try {
      const userCount = 100
      setCounts((prev) => ({
        ...prev,
        enrolledUsers: userCount,
        subAdmins: 5,
      }))
    } catch (error) {
      console.error('Error fetching additional stats:', error)
    }
  }

  useEffect(() => {
    fetchCounts()
    fetchAdditionalStats()
  }, [])

  const stats = [
    {
      title: 'Enrolled Students',
      count: counts.enrolledUsers,
      border: 'border-red-500',
      icon: <FaUser size={30} className="text-red-500" />,
    },
    {
      title: 'Events',
      count: counts.eventCount,
      border: 'border-red-500',
      icon: <FaCalendarAlt size={30} className="text-red-500" />,
    },
    {
      title: 'Sub Admins',
      count: counts.subAdmins,
      border: 'border-red-500',
      icon: <FaCogs size={30} className="text-red-500" />,
    },
    {
      title: 'Offered Courses',
      count: counts.courseCount,
      border: 'border-red-500',
      icon: <FaChalkboardTeacher size={30} className="text-red-500" />,
    },
  ]

  return (
    <div className="min-h-screen flex flex-col bg-gray-100 p-6">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">Dashboard</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div
            key={index}
            className={`rounded-lg p-6 border-2 ${stat.border} shadow-lg transition-all transform hover:scale-105 bg-white`}
          >
            <div className="flex items-center space-x-4">
              <div className="p-4 rounded-full bg-gray-100">{stat.icon}</div>
              <div>
                <h2 className="text-xl font-semibold text-gray-700">
                  {stat.title}
                </h2>
                <p className="text-4xl font-bold text-gray-900 mt-2">
                  {stat.count}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Dashboard
