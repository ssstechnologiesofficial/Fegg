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
        console.log(response.data) // Debugging API response
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
          <div key={item._id} className="border rounded shadow">
            {/* Accordion Header */}
            <div
              className="bg-gray-200 p-3 cursor-pointer"
              onClick={() => handleAccordionToggle(index)}
            >
              <h3 className="text-xl font-semibold">
                {item.subject} ({item.language})
              </h3>
            </div>

            {/* Accordion Content */}
            {activeIndex === index && (
              <div className="p-4">
                <div className="flex justify-between items-center py-2">
                  <span className="font-medium">{item.Volume}</span>
                  <a
                    href={`http://localhost:8006/${item.file}`} // Adjust path based on API
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline flex items-center"
                  >
                    📄 View PDF
                  </a>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Econtent10th
