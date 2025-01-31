// Econtent10th.js
import React, { useEffect, useState } from 'react'
import axios from 'axios'

// Fetch data for 10th class

const Econtent10th = () => {
  const [data, setData] = useState([])
  const [activeIndex, setActiveIndex] = useState(null)

  useEffect(() => {
    axios
      .get(`http://localhost:8006/api/ebooks?className=10`)
      .then((response) => {
        setData(response.data)
        console.log(response)
      })
      .catch((error) => {
        console.error('Error fetching eBooks:', error)
      })
  }, [])
  const handleAccordionToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Econtent for 10th Class</h2>
      <div className="space-y-4">
        {data.map((item, index) => (
          <div key={item.id} className="border rounded shadow">
            <div
              className="bg-gray-200 p-3 cursor-pointer"
              onClick={() => handleAccordionToggle(index)}
            >
              <h3 className="text-xl font-semibold">{item.subject}</h3>
            </div>
            {activeIndex === index && (
              <div className="p-4">
                {item.pdfFiles.map((file, fileIndex) => (
                  <div
                    key={fileIndex}
                    className="flex justify-between items-center py-2"
                  >
                    <span>{file.volume}</span>
                    <a
                      href={file.pdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      <img
                        src="/path/to/pdf-logo.png"
                        alt={`${file.volume} icon`}
                        className="w-6 h-6 inline mr-2"
                      />
                      {file.name}
                    </a>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Econtent10th
