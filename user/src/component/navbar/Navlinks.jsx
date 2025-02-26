import React, { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'

import { NavLink } from 'react-router-dom'
import { FaHome } from 'react-icons/fa'
import SummaryApi from '../../common/SummaryApi' // सुनिश्चित करें कि API एंडपॉइंट सही सेट हैं
const baseUrl = import.meta.env.VITE_BACKEND_URL

const NavLinks = () => {
  const [blueprintFile, setBlueprintFile] = useState(null)

  const [isAboutOpen, setIsAboutOpen] = useState(false)
  const [isProgrammesOpen, setIsProgrammesOpen] = useState(false)
  const [isAdmissionOpen, setIsAdmissionOpen] = useState(false)
  const [isEventsOpen, setIsEventsOpen] = useState(false)
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false)
  const [isContactusOpen, setIsContactusOpen] = useState(false)
  const [isStudentCornerOpen, setIsStudentCornerOpen] = useState(false)

  // नवीनतम ब्लूप्रिंट फ़ाइल URL प्राप्त करें
  useEffect(() => {
    const fetchBlueprint = async () => {
      try {
        const response = await axios.get(SummaryApi.Blueprintget.url)
        console.log(response)

        if (response.data.length > 0) {
          // यदि आवश्यक हो तो BASE_URL जोड़ें
          const filePath = response.data[0].filePath
          setBlueprintFile(`${baseUrl}${filePath}`)
        }
      } catch (error) {
        console.error('ब्लूप्रिंट प्राप्त करने में त्रुटि:', error)
      }
    }
    fetchBlueprint()
  }, [])

  const downloadPDF = async () => {
    if (!blueprintFile) {
      alert('डाउनलोड के लिए कोई फ़ाइल उपलब्ध नहीं है।')
      return
    }

    try {
      const response = await axios.get(blueprintFile, {
        responseType: 'blob', // फ़ाइल को बाइनरी (Blob) के रूप में प्राप्त करें
      })

      console.log(response)

      // एक ब्लॉब URL बनाएँ और डाउनलोड प्रारंभ करें
      const fileURL = window.URL.createObjectURL(
        new Blob([response.data], { type: 'application/pdf' })
      )
      const link = document.createElement('a')
      link.href = fileURL
      link.setAttribute('download', 'Blueprint.pdf') // फ़ाइल नाम सेट करें
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    } catch (error) {
      console.error('फ़ाइल डाउनलोड करने में त्रुटि:', error)
    }
  }

  const dropdownMenu = (menuItems) => (
    <ul className="absolute left-0 z-10 top-full bg-white shadow-md w-40">
      {menuItems.map((item, index) => (
        <li key={index} className="border-l-4 border-red-500">
          {item.isDownload ? (
            <button
              onClick={downloadPDF}
              className="dropdown-item border-t py-2 px-4 w-full text-left"
            >
              {item.label}
            </button>
          ) : item.external ? (
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="dropdown-item border-t py-2 px-4 block"
            >
              {item.label}
            </a>
          ) : (
            <NavLink
              to={item.link}
              className="dropdown-item border-t py-2 px-4 block"
            >
              {item.label}
            </NavLink>
          )}
        </li>
      ))}
    </ul>
  )

  return (
    <ul className="flex flex-col md:flex-row md:items-center md:justify-between px-12 space-y-4 md:space-y-0 md:space-x-6">
      <li>
        <NavLink
          to="/"
          className="nav-link flex items-center py-2"
          activeClassName="active-link"
        >
          <FaHome className="mr-2 text-xl" /> होम
        </NavLink>
      </li>
      <li
        className="relative group"
        onMouseEnter={() => setIsAboutOpen(true)}
        onMouseLeave={() => setIsAboutOpen(false)}
      >
        <NavLink to="/" className="nav-link py-2" activeClassName="active-link">
          हमारे बारे में
        </NavLink>
        {isAboutOpen &&
          dropdownMenu([
            { link: '/about', label: 'हम कौन हैं' },
            { link: '/MissionVision', label: 'दृष्टि और मिशन' },
            { link: '/EGteam', label: 'ईजी वरिष्ठ प्रबंधन टीम' },
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
          कार्यक्रम
        </NavLink>
        {isProgrammesOpen &&
          dropdownMenu([
            { link: '/Pragati', label: 'प्रगति' },
            { link: '/vidya', label: 'विद्या' },
            { link: '/10th-class', label: '10वीं कक्षा' },
            { link: '/12th-class', label: '12वीं कक्षा' },
          ])}
      </li>
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
          शिक्षार्थी कार्नर
        </NavLink>
        {isStudentCornerOpen &&
          dropdownMenu([
            { link: '/e-content', label: 'ऑनलाइन पुस्तकें' },
            { link: '/12th-class', label: 'पाठ्यक्रम' },
            { link: '/onlinevideo', label: 'रिकॉर्डेड वीडियो' },
            { label: 'ब्लूप्रिंट', isDownload: true },
            { link: '/PreviousPaperOption', label: 'पिछले वर्ष के प्रश्नपत्र' },
            { link: '/practice-set', label: 'अभ्यास सेट' },
            { link: '/vocational-course', label: 'मॉडल उत्तर पत्रक' },
          ])}
      </li>
      <li>
        <NavLink to="/register" className=" py-2 ">
          छात्र पंजीकरण
        </NavLink>
      </li>
      <li>
        <a href="http://localhost:5174">विभागीय एक्सेस</a>
      </li>
    </ul>
  )
}

export default NavLinks
