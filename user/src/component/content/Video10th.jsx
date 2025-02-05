import React, { useEffect, useState } from 'react'
import axios from 'axios'
import SummaryApi from '../../common/SummaryApi'

const Video10th = () => {
  const [data, setData] = useState([])
  const [activeSubject, setActiveSubject] = useState(null)
  const [selectedLanguage, setSelectedLanguage] = useState('')

  useEffect(() => {
    axios
      .get(`${SummaryApi.getuploadvideo.url}?className=10`)
      .then((response) => {
        setData(response.data)
      })
      .catch((error) => {
        console.error('Error fetching videos:', error)
      })
  }, [])

  const handleSubjectClick = (subject) => {
    setActiveSubject(subject)
  }

  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value)
    setActiveSubject(null)
  }

  const filteredData = data.filter((item) => item.language === selectedLanguage)

  const groupedSubjects = filteredData.reduce((acc, item) => {
    if (!acc[item.subject]) {
      acc[item.subject] = []
    }
    acc[item.subject].push(item)
    return acc
  }, {})

  return (
    <div className="flex flex-col sm:flex-row p-4 bg-gray-50 min-h-screen">
      {/* Sidebar */}
      <div className="sm:w-1/4 w-full bg-white shadow-md rounded-md p-4 border-l-4 border-[#fd645b]">
        <h2 className="text-2xl font-bold text-[#fd645b] mb-4 border-b-2 border-[#fd645b] pb-2 text-center uppercase">
          Subjects
        </h2>
        <div className="flex-1 mb-4">
          <label className="font-semibold">Select Medium:</label>
          <select
            name="language"
            className="border p-2 w-full rounded focus:ring-2 focus:ring-[#fe0000]"
            value={selectedLanguage}
            onChange={handleLanguageChange}
          >
            <option value="">Select Medium</option>
            <option value="English">English</option>
            <option value="Hindi">Hindi</option>
          </select>
        </div>
        <ul className="space-y-3">
          {Object.keys(groupedSubjects).map((subjectName) => (
            <li
              key={subjectName}
              className={`cursor-pointer text-black font-semibold px-4 py-2 border-l-4 hover:border-[#fd645b] transition-all hover:bg-[#fd635b5d]  duration-200 ${
                activeSubject === groupedSubjects[subjectName]
                  ? 'border-[#fd645b]'
                  : 'border-transparent'
              }`}
              onClick={() => handleSubjectClick(groupedSubjects[subjectName])}
            >
              {subjectName}
            </li>
          ))}
        </ul>
      </div>

      {/* Main Content */}
      <div className="sm:w-3/4 w-full p-6">
        {activeSubject && (
          <div className="bg-white shadow-md rounded-md p-6">
            <h3 className="text-2xl font-bold text-[#fd645b] mb-4">
              {activeSubject[0].subject} ({activeSubject[0].language})
            </h3>
            <table className="w-full border-collapse rounded-md overflow-hidden">
              <thead>
                <tr className="bg-[#fd645b] text-white">
                  <th className="p-3">Chapter No.</th>
                  <th className="p-3">Chapter</th>
                  <th className="p-3">Video Link</th>
                </tr>
              </thead>
              <tbody>
                {activeSubject.map((item, index) => (
                  <tr key={index} className="border-b hover:bg-gray-100">
                    <td className="p-3 text-center">{index + 1}</td>
                    <td className="p-3 text-center">{item.chapterName}</td>
                    <td className="p-3 text-center">
                      <a
                        href={item.youtubeLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 font-medium hover:underline"
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
