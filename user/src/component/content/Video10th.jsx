
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import SummaryApi from '../../common/SummaryApi'
const baseUrl = import.meta.env.VITE_BACKEND_URL
const Video10th = () => {
  const [data, setData] = useState([])
  const [activeSubject, setActiveSubject] = useState(null)

  useEffect(() => {
    axios
      .get(`${SummaryApi.getuploadvideo.url}?className=10`)
      .then((response) => {
        setData(response.data)
        console.log(response.data) // Debugging API response
      })
      .catch((error) => {
        console.error('Error fetching eBooks:', error)
      })
  }, [])

  const handleSubjectClick = (subject) => {
    setActiveSubject(subject)
  }

  // Grouping subjects by subject name
  const groupedSubjects = data.reduce((acc, item) => {
    if (!acc[item.subject]) {
      acc[item.subject] = []
    }
    acc[item.subject].push(item)
    return acc
  }, {})

  return (
    <div className="flex p-4">
      {/* Sidebar */}
      <div className="w-1/4 bg-gray-100 p-4">
        <h2 className="text-xl font-bold mb-4">Subjects</h2>
        <ul className="space-y-2">
          {Object.keys(groupedSubjects).map((subjectName) => (
            <li
              key={subjectName}
              className="cursor-pointer text-blue-600 hover:underline"
              onClick={() => handleSubjectClick(groupedSubjects[subjectName])}
            >
              {subjectName}
            </li>
          ))}
        </ul>
      </div>

      {/* Main Content */}
      <div className="w-3/4 p-4">
        {activeSubject && (
          <div>
            <h3 className="text-2xl font-bold mb-4">
              {activeSubject[0].subject} ({activeSubject[0].language})
            </h3>
            <table className="w-full table-auto border-collapse">
              <thead>
                <tr>
                  <th className="border p-2">Chapter</th>
                  <th className="border p-2">Video Link</th>
                </tr>
              </thead>
              <tbody>
                {activeSubject.map((item, index) => (
                  <tr key={index}>
                    <td className="border p-2">{item.chapterName}</td>
                    <td className="border p-2">
                      <a
                        href={item.youtubeLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                      >
                        Watch Video
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  )
}

export default Video10th
