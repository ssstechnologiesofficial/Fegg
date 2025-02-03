// import React from 'react'

// const Video10th = () => {
//   return <div>Video10th</div>
// }

// export default Video10th

// Econtent10th.js
import React, { useEffect, useState } from 'react'
import axios from 'axios'

// Fetch data for 10th class

const Video10th = () => {
  const [data, setData] = useState([])
  const [activeIndex, setActiveIndex] = useState(null)

  useEffect(() => {
    axios
      .get(`http://localhost:8006/api/getuploadvideo?className=10`)
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
          <div key={item._id} className=" border-l-4 border-[#fe0000]  shadow">
            {/* Accordion Header */}
            <div
              className="bg-gray-200 p-1 ps-2 cursor-pointer"
              onClick={() => handleAccordionToggle(index)}
            >
              <h3 className="text-lg font-semibold">
                {item.subject} ({item.language})
              </h3>
            </div>

            {/* Accordion Content */}
            {activeIndex === index && (
              <div className="p-2">
                <div className="flex justify-between items-center ">
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

export default Video10th
