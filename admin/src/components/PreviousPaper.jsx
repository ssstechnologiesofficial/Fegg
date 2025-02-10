import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { FaTrash, FaEdit, FaSave } from 'react-icons/fa' // Added save icon
import '../App.css'
import SummaryApi from '../common/SummaryAPI'

const PreviousPaper = () => {
  const [uploads, setUploads] = useState([])
  const [filteredUploads, setFilteredUploads] = useState([])
  const [editId, setEditId] = useState(null)
  const [editData, setEditData] = useState({})
  const [formData, setFormData] = useState({})
  const [filters, setFilters] = useState({
    sessionYear: '',
    sessionMonth: '',
    className: '',
    subject: '',
  })

  const subjects = {
    10: ['Mathematics', 'Science', 'Social Studies', 'English', 'Hindi'],
    12: ['Physics', 'Chemistry', 'Mathematics', 'Biology', 'English', 'Hindi'],
  }

  useEffect(() => {
    axios
      .get(SummaryApi.PreviousPaper.url)
      .then((response) => setUploads(response.data))
      .catch((error) => console.error('Error fetching eBooks:', error))
  }, [])

  const handleChange = (e) => {
    const { name, value } = e.target
    if (name === 'className') {
      // If a class is selected, set subject based on that, otherwise use the default subject
      setFormData({
        ...formData,
        [name]: value,
        subject: subjects[value] ? subjects[value][0] : '',
      })
    } else {
      setFormData({ ...formData, [name]: value })
    }
  }

  const handleFileChange = (e) =>
    setFormData((prev) => ({ ...prev, file: e.target.files[0] }))

  const handleEdit = (upload) => {
    setEditId(upload._id)
    setEditData(upload)
  }

  const handleEditChange = (e) => {
    const { name, value } = e.target
    setEditData((prev) => ({ ...prev, [name]: value }))
  }

  const handleUpdate = async (id) => {
    try {
      const response = await axios.put(
        SummaryApi.PreviousPaperId.url.replace(':id', id),
        editData
      )
      setUploads(
        uploads.map((item) => (item._id === id ? response.data.ebook : item))
      )
      setEditId(null)
    } catch (error) {
      console.error('Error updating eBook:', error)
    }
  }

  useEffect(() => {
    const filteredData = uploads.filter((upload) => {
      return (
        (!filters.sessionYear || upload.sessionYear === filters.sessionYear) &&
        (!filters.sessionMonth ||
          upload.sessionMonth === filters.sessionMonth) &&
        (!filters.className || upload.className === filters.className) &&
        (!filters.subject || upload.subject === filters.subject)
      )
    })
    setFilteredUploads(filteredData)
  }, [filters, uploads])

  const handleFilterChange = (e) => {
    const { name, value } = e.target
    setFilters({ ...filters, [name]: value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (formData.file) {
      const data = new FormData()
      Object.keys(formData).forEach((key) => data.append(key, formData[key]))

      try {
        const response = await axios.post(
          SummaryApi.PreviousPaperpost.url,
          data,
          {
            headers: { 'Content-Type': 'multipart/form-data' },
          }
        )
        setUploads([...uploads, response.data])
        setFormData({
          sessionYear: '',
          sessionMonth: '',
          className: '10',
          subject: subjects['10'][0],
          language: 'English',
          file: '',
        })
      } catch (error) {
        console.error('Error uploading file:', error)
      }
    }
  }

  const handleDelete = async (id) => {
    try {
      await axios.delete(SummaryApi.PreviousPaperId.url.replace(':id', id))
      setUploads(uploads.filter((upload) => upload._id !== id))
    } catch (error) {
      console.error('Error deleting ebook:', error)
    }
  }

  return (
    <div className="p-4 bg-white">
      <h2 className="text-3xl font-bold mb-4">Previous Year Paper Upload</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="border border-[#fd645b] rounded-xl border-r-4 border-b-4 p-5">
          <div className="mb-4">
            <label className="font-semibold">Session:</label>
            <div className="flex gap-3">
              <select
                name="sessionYear"
                value={formData.sessionYear}
                onChange={handleChange}
                required
                className="border p-2 w-full rounded focus:ring-2 focus:ring-[#fd645b]"
              >
                <option value=""></option>
                <option value="2023-2024">2023-2024</option>
                <option value="2024-2025">2024-2025</option>
                <option value="2025-2026">2025-2026</option>
              </select>
              <select
                name="sessionMonth"
                value={formData.sessionMonth}
                onChange={handleChange}
                required
                className="border p-2 w-full rounded focus:ring-2 focus:ring-[#fd645b]"
              >
                <option value=""></option>
                <option value="April-October">April-October</option>
                <option value="November-March">November-March</option>
              </select>
            </div>
          </div>

          <div className="flex gap-3 flex-wrap">
            <div className="flex-1">
              <label className="font-semibold">Class:</label>
              <select
                name="className"
                value={formData.className}
                onChange={handleChange}
                required
                className="border p-2 w-full rounded focus:ring-2 focus:ring-[#fd645b]"
              >
                <option value=""></option>
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
                className="border p-2 w-full rounded focus:ring-2 focus:ring-[#fd645b]"
              >
                <option value=""></option>
                {subjects[formData.className] ? (
                  subjects[formData.className].map((subj) => (
                    <option key={subj} value={subj}>
                      {subj}
                    </option>
                  ))
                ) : (
                  <option>No subjects available</option> // Display this when no subjects are available
                )}
              </select>
            </div>
          </div>
          <div className="flex gap-3 flex-wrap mt-4">
            <div className="flex-1">
              <label className="font-semibold">Medium:</label>
              <select
                name="language"
                value={formData.language}
                onChange={handleChange}
                required
                className="border p-2 w-full rounded focus:ring-2 focus:ring-[#fd645b]"
              >
                <option value=""></option>

                <option value="English">English</option>
                <option value="Hindi">Hindi</option>
              </select>
            </div>
            <div className="flex-1">
              <label className="font-semibold">Upload File:</label>
              <input
                name="file"
                type="file"
                onChange={handleFileChange}
                required
                className="border p-2 w-full rounded focus:ring-2 focus:ring-[#fd645b]"
              />
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="bg-[#fd645b] text-white p-2 rounded-lg font-semibold w-full sm:w-auto focus:ring-2 focus:ring-[#fd645b] hover:bg-white hover:text-[#fd645b] border-[#fd645b] border transition-all"
        >
          Upload
        </button>
      </form>

      <h3 className="text-lg font-bold mt-6">Uploaded Files</h3>
      <div className="flex gap-3 mb-4">
        <select
          name="sessionYear"
          value={filters.sessionYear}
          onChange={handleFilterChange}
          className="border p-2 rounded"
        >
          <option value="">All Years</option>
          <option value="2023-2024">2023-2024</option>
          <option value="2024-2025">2024-2025</option>
          <option value="2025-2026">2025-2026</option>
        </select>
        <select
          name="sessionMonth"
          value={filters.sessionMonth}
          onChange={handleFilterChange}
          className="border p-2 rounded"
        >
          <option value="">All Months</option>
          <option value="April-October">April-October</option>
          <option value="November-March">November-March</option>
        </select>
        <select
          name="className"
          value={filters.className}
          onChange={handleFilterChange}
          className="border p-2 rounded"
        >
          <option value="">All Classes</option>
          <option value="10">10</option>
          <option value="12">12</option>
        </select>
        <select
          name="subject"
          value={filters.subject}
          onChange={handleFilterChange}
          className="border p-2 rounded"
        >
          <option value="">All Subjects</option>
          {filters.className && subjects[filters.className]
            ? subjects[filters.className].map((subj) => (
                <option key={subj} value={subj}>
                  {subj}
                </option>
              ))
            : Object.values(subjects)
                .flat()
                .map((subj) => (
                  <option key={subj} value={subj}>
                    {subj}
                  </option>
                ))}
        </select>
      </div>

      <table className="w-full border mt-4">
        <thead>
          <tr className="bg-[#fd645b] text-white">
            <th className="p-1">S.No</th>
            <th className="p-1">Subject</th>
            <th className="p-1">Class</th>
            <th className="p-1">Language</th>
            <th className="p-1">Volume</th>
            <th className="p-1">Uploaded File</th>
            <th className="p-1">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredUploads.map((upload, index) => (
            <tr key={upload._id} className="text-center">
              <td className="border p-2">{index + 1}</td>
              <td className="border p-2">
                {editId === upload._id ? (
                  <input
                    type="text"
                    name="subject"
                    value={editData.subject}
                    onChange={handleEditChange}
                    className="border p-1 w-full"
                  />
                ) : (
                  upload.subject
                )}
              </td>
              <td className="border p-2">{upload.className}</td>
              <td className="border p-2">
                {editId === upload._id ? (
                  <select
                    name="language"
                    value={editData.language}
                    onChange={handleEditChange}
                    className="border p-1 w-full"
                  >
                    <option value="English">English</option>
                    <option value="Hindi">Hindi</option>
                  </select>
                ) : (
                  upload.language
                )}
              </td>
              <td className="border p-2">
                {editId === upload._id ? (
                  <input
                    type="text"
                    name="chapterName"
                    value={editData.Volume}
                    onChange={handleEditChange}
                    className="border p-1 w-full"
                  />
                ) : (
                  upload.Volume
                )}
              </td>
              <td className="border p-2">
                <a
                  href={upload.file} // Link to YouTube video
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600"
                >
                  View PDF
                </a>
              </td>
              <td className="border p-2 flex justify-center gap-2">
                {editId === upload._id ? (
                  <FaSave
                    className="text-green-600 cursor-pointer"
                    onClick={() => handleUpdate(upload._id)}
                  />
                ) : (
                  <FaEdit
                    className="text-blue-600 cursor-pointer"
                    onClick={() => handleEdit(upload)}
                  />
                )}
                <FaTrash
                  className="text-red-600 cursor-pointer"
                  onClick={() => handleDelete(upload._id)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default PreviousPaper
