import React, { useEffect, useState } from 'react'
import axios from 'axios'

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
      .get(`http://localhost:8006/api/ebooks?className=12`)
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
        .post('http://localhost:8006/api/storeUserDownload', {
          userInput,
          subject: selectedSubject,
          className: selectedClass, // Ensure className is sent
        })
        .then(() => {
          // Automatically trigger file download after successful submission
          const link = document.createElement('a')
          link.href = `http://localhost:8006/${selectedFile}`
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
          <div key={item._id} className="border rounded shadow">
            <div
              className="bg-gray-200 p-3 cursor-pointer"
              onClick={() => handleAccordionToggle(index)}
            >
              <h3 className="text-xl font-semibold">
                {item.subject} ({item.language})
              </h3>
            </div>
            {activeIndex === index && (
              <div className="p-4">
                <div className="flex justify-between items-center py-2">
                  <span className="font-medium">{item.Volume}</span>
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
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="bg-white p-6 rounded shadow-lg w-96">
            <h3 className="text-lg font-semibold mb-2">Enter Details</h3>
            <input
              type="text"
              placeholder="Enter Student ID or Contact Number"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              className="border p-2 w-full mb-4"
            />
            <div className="flex justify-end space-x-2">
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-4 py-2 bg-gray-500 text-white rounded"
              >
                Cancel
              </button>
              <button
                onClick={handleModalSubmit}
                className="px-4 py-2 bg-blue-600 text-white rounded"
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
