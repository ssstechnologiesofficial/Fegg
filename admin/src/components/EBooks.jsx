import React, { useState } from 'react'
import '../App.css'

const EBooks = () => {
  const [uploads, setUploads] = useState([])
  const [formData, setFormData] = useState({
    sessionYear: '2023-2024',
    sessionMonth: 'April-October',
    className: '10',
    subject: '',
    language: 'English',
    file: null,
  })

  const subjects = {
    10: ['Mathematics', 'Science', 'Social Studies', 'English', 'Hindi'],
    12: ['Physics', 'Chemistry', 'Mathematics', 'Biology', 'English', 'Hindi'],
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    if (name === 'className') {
      setFormData({ ...formData, [name]: value, subject: subjects[value][0] })
    } else {
      setFormData({ ...formData, [name]: value })
    }
  }

  const handleFileChange = (e) => {
    setFormData({ ...formData, file: e.target.files[0] })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (formData.file) {
      setUploads([...uploads, { ...formData, id: uploads.length + 1 }])
      setFormData({
        sessionYear: '2023-2024',
        sessionMonth: 'April-October',
        className: '10',
        subject: subjects['10'][0],
        language: 'English',
        file: null,
      })
    }
  }

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">E-Book Upload</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col">
          <label>Session:</label>
          <div className="flex gap-3 flex-wrap">
            <select
              name="sessionYear"
              value={formData.sessionYear}
              onChange={handleChange}
              required
              className="border p-2 w-full rounded focus:ring-2 focus:ring-[#fe0000]"
            >
              <option value="2023-2024">2023-2024</option>
              <option value="2024-2025">2024-2025</option>
              <option value="2025-2026">2025-2026</option>
            </select>
            <select
              name="sessionMonth"
              value={formData.sessionMonth}
              onChange={handleChange}
              required
              className="border p-2 w-full rounded focus:ring-2 focus:ring-[#fe0000]"
            >
              <option value="April-October">April-October</option>
              <option value="November-March">November-March</option>
            </select>
          </div>
        </div>
        <div className="flex gap-3 flex-wrap">
          <div className="flex-1">
            <label>Class:</label>
            <select
              name="className"
              value={formData.className}
              onChange={handleChange}
              required
              className="border p-2 w-full rounded focus:ring-2 focus:ring-[#fe0000]"
            >
              <option value="10">10</option>
              <option value="12">12</option>
            </select>
          </div>
          <div className="flex-1">
            <label>Subject:</label>
            <select
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="border p-2 w-full rounded focus:ring-2 focus:ring-[#fe0000]"
            >
              {subjects[formData.className].map((subj) => (
                <option key={subj} value={subj}>
                  {subj}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="flex gap-3 flex-wrap">
          <div className="flex-1">
            <label>Language:</label>
            <select
              name="language"
              value={formData.language}
              onChange={handleChange}
              required
              className="border p-2 w-full rounded focus:ring-2 focus:ring-[#fe0000]"
            >
              <option value="English">English</option>
              <option value="Hindi">Hindi</option>
            </select>
          </div>
          <div className="flex-1">
            <label>Upload File:</label>
            <input
              type="file"
              onChange={handleFileChange}
              required
              className="border p-2 w-full rounded focus:ring-2 focus:ring-[#fe0000]"
            />
          </div>
        </div>
        <button
          type="submit"
          className="bg-[#fe0000] text-white p-2 rounded w-full sm:w-auto focus:ring-2 focus:ring-[#fe0000]"
        >
          Upload
        </button>
      </form>

      <h3 className="text-lg font-bold mt-6">Uploaded Files</h3>
      <table className="w-full border mt-4">
        <thead>
          <tr className="bg-[#fe0000] text-white">
            <th className=" p-1">S.No</th>
            <th className=" p-1">Subject</th>
            <th className=" p-1">Class</th>
            <th className=" p-1">Language</th>
            <th className=" p-1">Uploaded File</th>
          </tr>
        </thead>
        <tbody>
          {uploads.map((upload, index) => (
            <tr key={index} className="text-center">
              <td className="border p-2">{upload.id}</td>
              <td className="border p-2">{upload.subject}</td>
              <td className="border p-2">{upload.className}</td>
              <td className="border p-2">{upload.language}</td>
              <td className="border p-2">
                <a
                  href={URL.createObjectURL(upload.file)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600"
                >
                  View File
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default EBooks
