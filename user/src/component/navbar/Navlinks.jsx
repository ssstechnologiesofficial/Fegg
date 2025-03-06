import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { NavLink } from 'react-router-dom'
import { FaHome } from 'react-icons/fa'
import SummaryApi from '../../common/SummaryApi'

const baseUrl = import.meta.env.VITE_BACKEND_URL

const NavLinks = () => {
  const [blueprintFile, setBlueprintFile] = useState(null)
  const [isAboutOpen, setIsAboutOpen] = useState(false)
  const [ismpsosOpen, setIsmpsosOpen] = useState(false)
  const [isProgrammesOpen, setIsProgrammesOpen] = useState(false)
  const [isStudentCornerOpen, setIsStudentCornerOpen] = useState(false)
  const [isClass10Open, setIsClass10Open] = useState(false) // State for 10वीं कक्षा submenu
  const [isClass12Open, setIsClass12Open] = useState(false) // State for 12वीं कक्षा submenu

  useEffect(() => {
    const fetchBlueprint = async () => {
      try {
        const response = await axios.get(SummaryApi.Blueprintget.url)
        if (response.data.length > 0) {
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
      const response = await axios.get(blueprintFile, { responseType: 'blob' })
      const fileURL = window.URL.createObjectURL(
        new Blob([response.data], { type: 'application/pdf' })
      )
      const link = document.createElement('a')
      link.href = fileURL
      link.setAttribute('download', 'Blueprint.pdf')
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    } catch (error) {
      console.error('फ़ाइल डाउनलोड करने में त्रुटि:', error)
    }
  }

  const downloadPDFVivernika = () => {
    const pdfUrl = '/public/Vivernika.pdf' // Use an absolute path from the public folder
    const link = document.createElement('a')
    link.href = pdfUrl
    link.setAttribute('download', 'Vivernika.pdf') // Set the correct filename
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const dropdownMenu = (menuItems) => (
    <ul className="absolute left-0 z-10 top-full bg-white shadow-md w-40">
      {menuItems.map((item, index) => (
        <li
          key={index}
          className="border-l-4 border-red-500 relative"
          onMouseEnter={() => {
            if (item.hasSubMenu === 'class10') setIsClass10Open(true)
            if (item.hasSubMenu === 'class12') setIsClass12Open(true)
          }}
          onMouseLeave={() => {
            if (item.hasSubMenu === 'class10') setIsClass10Open(false)
            if (item.hasSubMenu === 'class12') setIsClass12Open(false)
          }}
        >
          {item.isDownload ? (
            <button
              onClick={downloadPDF}
              className="dropdown-item border-t py-2 px-4 w-full text-left"
            >
              {item.label}
            </button>
          ) : item.isExternal ? (
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

          {/* Submenu for "10वीं कक्षा" */}
          {item.hasSubMenu === 'class10' && isClass10Open && (
            <ul className="absolute left-full top-0 bg-white shadow-md w-40">
              <li className="border-l-4 border-red-500">
                <NavLink to="/class10-documents" className="block py-2 px-4">
                  10th दस्तावेज
                </NavLink>
              </li>
              <li className="border-l-4 border-red-500">
                <NavLink to="/schemes" className="block py-2 px-4">
                  संचालित योजनाऐं
                </NavLink>
              </li>
              <li className="border-l-4 border-red-500">
                <NavLink to="/fees" className="block py-2 px-4">
                  शुल्क
                </NavLink>
              </li>
              <li className="border-l-4 border-red-500">
                <NavLink to="/subjects" className="block py-2 px-4">
                  हाईस्कूल विषय
                </NavLink>
              </li>
              <li className="border-l-4 border-red-500">
                <button
                  onClick={downloadPDFVivernika}
                  className="block py-2 px-4 w-full text-left"
                >
                  विवरणिका
                </button>
              </li>
            </ul>
          )}

          {/* Submenu for "12वीं कक्षा" */}
          {item.hasSubMenu === 'class12' && isClass12Open && (
            <ul className="absolute left-full top-0 bg-white shadow-md w-40">
              <li className="border-l-4 border-red-500">
                <NavLink to="/class12-documents" className="block py-2 px-4">
                  12th दस्तावेज
                </NavLink>
              </li>
              <li className="border-l-4 border-red-500">
                <NavLink to="/schemes-12" className="block py-2 px-4">
                  संचालित योजनाऐं
                </NavLink>
              </li>
              <li className="border-l-4 border-red-500">
                <NavLink to="/fees-12" className="block py-2 px-4">
                  शुल्क
                </NavLink>
              </li>
              <li className="border-l-4 border-red-500">
                <NavLink to="/subjects-12" className="block py-2 px-4">
                  इंटरमीडिएट विषय
                </NavLink>
              </li>
              <li className="border-l-4 border-red-500">
                <button
                  onClick={downloadPDFVivernika}
                  className="block py-2 px-4 w-full text-left"
                >
                  विवरणिका
                </button>
              </li>
            </ul>
          )}
        </li>
      ))}
    </ul>
  )

  return (
    <div className="flex items-center justify-between px-12 pb-2">
      <ul className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-8">
        <li>
          <NavLink to="/" className="nav-link flex items-center py-2">
            <FaHome className="mr-2 text-xl" /> मुख्या पृष्ठ
          </NavLink>
        </li>
        <li
          className="relative group"
          onMouseEnter={() => setIsAboutOpen(true)}
          onMouseLeave={() => setIsAboutOpen(false)}
        >
          <NavLink to="/" className="nav-link py-2">
            हमारे बारे में
          </NavLink>
          {isAboutOpen &&
            dropdownMenu([
              { link: '/about', label: 'एजुकेट गर्ल्स के बारे में' },
              { link: '/MissionVision', label: 'लक्ष्य' },
              { link: '/MissionVision', label: 'उद्देश्य' },
              { link: '/MissionVision', label: 'परिकल्पना' },
              { link: '/EGteam', label: 'वरिष्ठ प्रबंधन टीम' },
            ])}
        </li>
        <li
          className="relative group"
          onMouseEnter={() => setIsProgrammesOpen(true)}
          onMouseLeave={() => setIsProgrammesOpen(false)}
        >
          <NavLink to="/" className="nav-link py-2">
            कार्यक्रम
          </NavLink>
          {isProgrammesOpen &&
            dropdownMenu([
              { link: '/Pragati', label: 'प्रगति' },
              { link: '/vidya', label: 'विद्या' },
              {
                link: '/10th-class',
                label: '10वीं कक्षा',
                hasSubMenu: 'class10',
              },
              {
                link: '/12th-class',
                label: '12वीं कक्षा',
                hasSubMenu: 'class12',
              },
            ])}
        </li>
        <li
          className="relative group"
          onMouseEnter={() => setIsStudentCornerOpen(true)}
          onMouseLeave={() => setIsStudentCornerOpen(false)}
        >
          <NavLink to="/student-corner" className="nav-link py-2">
            शिक्षार्थी अनुभाग
          </NavLink>
          {isStudentCornerOpen &&
            dropdownMenu([
              { link: '/e-content', label: 'ऑनलाइन पुस्तकें' },
              { link: '/12th-class', label: 'पाठ्यक्रम' },
              { link: '/onlinevideo', label: 'रिकॉर्डेड वीडियो' },
              { label: 'ब्लूप्रिंट', isDownload: true },
              {
                link: '/PreviousPaperOption',
                label: 'पिछले वर्ष के प्रश्नपत्र',
              },
              { link: '/practice-set', label: 'अभ्यास सेट' },
              { link: '/vocational-course', label: 'मॉडल उत्तर पत्रक' },
            ])}
        </li>
        <li
          className="relative group"
          onMouseEnter={() => setIsmpsosOpen(true)}
          onMouseLeave={() => setIsmpsosOpen(false)}
        >
          <NavLink to="/" className="nav-link py-2">
            MPSOS
          </NavLink>
          {ismpsosOpen &&
            dropdownMenu([
              { link: '/MPSOSInfo', label: 'MPSOS के बारे में' },
              { link: '/AISECTInfo', label: 'AISECT के बारे में' },
              {
                link: 'https://www.aisectonline.com',
                label: 'EG login to AISECT',
                isExternal: true,
              },
            ])}
        </li>
        <li>
          <NavLink to="/contactus" className="py-2">
            हमसे संपर्क करे
          </NavLink>
        </li>
      </ul>
      <ul className="flex space-x-8">
        <li className="rounded-full py-2 px-3 border transition-all hover:border-[#fd645b] hover:text-[#fd645b] text-white hover:bg-white bg-[#fd645b]">
          <NavLink to="/register" className="">
            छात्र पंजीकरण
          </NavLink>
        </li>
        <li className="rounded-full py-2 px-3 border transition-all hover:border-[#fd645b] hover:text-[#fd645b] text-white hover:bg-white bg-[#fd645b]">
          <a href="http://localhost:5174">विभागीय एक्सेस</a>
        </li>
      </ul>
    </div>
  )
}

export default NavLinks
