import React, { useEffect, useState } from 'react'
import axios from 'axios'
import SummaryApi from '../../common/SummaryApi'
import fagglogo from '../../../public/eg-logo.png'

const baseUrl = import.meta.env.VITE_BACKEND_URL

const Econtent12th = () => {
  const [data, setData] = useState([])
  const [activeIndex, setActiveIndex] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedFile, setSelectedFile] = useState(null)
  const [selectedSubject, setSelectedSubject] = useState('')
  const [selectedClass, setSelectedClass] = useState('')
  const [userInput, setUserInput] = useState('')
  useEffect(() => {
    axios
      .get(`${SummaryApi.Ebooks.url}?className=12`)
      .then((response) => {
        setData(response.data)
      })
      .catch((error) => {
        console.error('Error fetching eBooks:', error)
      })
  }, [])

  const handleAccordionToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  const handleDownloadClick = (fileUrl, subject, className) => {
    setSelectedFile(fileUrl)
    setSelectedSubject(subject)
    setSelectedClass(className) // Ensure className is set
    setIsModalOpen(true)
  }

  const handleModalSubmit = () => {
    console.log(userInput, selectedClass, selectedSubject)
    if (userInput.trim()) {
      axios
        .post(SummaryApi.StoreUserDownload.url, {
          userInput,
          subject: selectedSubject,
          className: selectedClass,
        })
        .then(() => {
          // Automatically trigger file download after successful submission
          const link = document.createElement('a')
          link.href = `${baseUrl}/${selectedFile}`
          link.setAttribute('download', selectedFile.split('/').pop()) // Extract filename from URL
          document.body.appendChild(link)
          link.click()
          document.body.removeChild(link)

          setIsModalOpen(false)
          setUserInput('')
        })
        .catch((error) => {
          console.error('Error storing user input:', error)
        })
    } else {
      alert('Please enter your Student ID or Contact Number')
    }
  }

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Econtent for 12th Class</h2>
      <div className="space-y-4">
        {data.map((item, index) => (
          <div
            key={item._id}
            className="border-r-2 border-l-2 border-[#ff0000] shadow"
          >
            <div
              className="bg-gray-200 p-1 cursor-pointer"
              onClick={() => handleAccordionToggle(index)}
            >
              <h3 className="sm:text-xl text-lg font-semibold ">
                {item.subject}
                <span className="ms-1 text-[#ff0000] text-xs">
                  ({item.language})
                </span>
              </h3>
            </div>
            {activeIndex === index && (
              <div className="p-1">
                <div className="flex justify-between items-center py-2">
                  <span className="font-medium bg-[#ff0000] text-white px-1 text-sm">
                    {item.Volume}
                  </span>
                  <button
                    onClick={() =>
                      handleDownloadClick(
                        item.file,
                        item.subject,
                        item.className
                      )
                    }
                    className="text-blue-600 hover:underline flex items-center"
                  >
                    📄 Download PDF
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-10">
          <div className="relative bg-white p-6 rounded-lg shadow-2xl w-96 border border-gray-300">
            {/* Layered Card Effect */}
            <div className="absolute -top-2 -left-2 w-full h-full bg-[#ff0000]  rounded-lg shadow-md border border-red-300 -z-10"></div>
            <div className="absolute top-2 left-2 w-full h-full bg-[#ff0000] rounded-lg shadow-md border border-red-300 -z-20"></div>

            <div className="flex flex-col justify-center items-center">
              <img
                src={fagglogo}
                className="sm:w-[13vw] sm:h-[13vw] w-[14vw] h-[14vw] max-w-24 max-h-24 object-fill bg-white rounded-full p-2 border-2 border-[#ff0000] shadow-md"
              />
              <h3 className="text-lg font-semibold mb-2 text-center">
                Enter Contact Number or Student ID
              </h3>
            </div>

            <input
              type="text"
              placeholder="Enter Student ID or Contact Number"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              className="border p-2 w-full mb-4 border-[#ff0000] rounded-md focus:outline-none focus:ring-2 focus:ring-[#ff0000] shadow-sm"
            />

            <div className="flex justify-end space-x-2">
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-4 py-2 bg-gray-500 text-white rounded shadow-md hover:bg-gray-600 transition-all"
              >
                Cancel
              </button>
              <button
                onClick={handleModalSubmit}
                className="px-4 py-2 bg-[#ff0000] text-white rounded shadow-md hover:bg-red-700 transition-all"
              >
                Submit & Download
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Econtent12th
