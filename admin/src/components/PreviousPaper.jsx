import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { FaTrash, FaEdit, FaSave } from 'react-icons/fa'
import '../App.css'
import SummaryApi from '../common/SummaryAPI'
const baseUrl = import.meta.env.VITE_BACKEND_URL

const PreviousPaper = () => {
  const [uploads, setUploads] = useState([])
  const [filteredUploads, setFilteredUploads] = useState([])
  const [editId, setEditId] = useState(null)
  const [editData, setEditData] = useState({})
  const [formData, setFormData] = useState({
    year: '',
    className: '10',
    subject: '',
    language: 'English',
    session: 'June',
    file: null,
    answerKey: null,
  })
  const [filters, setFilters] = useState({
    year: '',
    className: '',
    subject: '',
  })

  const subjects = {
    10: [
      '',
      'हिंदी (201)',
      'अंग्रेज़ी (202)',
      'मराठी (204)',
      'उर्दू (206)',
      'संस्कृत (209)',
      'गणित (211)',
      'विज्ञान (212)',
      'सामाजिक विज्ञान (213)',
      'अर्थशास्त्र (214)',
      'व्यवसाय अध्ययन (215)',
      'गृह विज्ञान (216)',
      'भारतीय संस्कृति (223)',
      'उद्यमिता (249)',
    ],
    12: [
      '',

      'हिंदी (301)',
      'अंग्रेज़ी (302)',
      'संस्कृत (309)',

      'गणित (311)',
      'गृह विज्ञान  (सिद्धांत एवं प्रयोगात्मक) (321)',
      'अर्थशास्त्र (318)',

      'भारतीय  (सिद्धांत एवं प्रयोगात्मक)(321)',
      'इतिहास (315)',
      'व्यवसाय अध्ययन (319)',
    ],
  }

  useEffect(() => {
    axios
      .get(SummaryApi.PreviousPaper.url)
      .then((response) => {
        if (Array.isArray(response.data)) {
          setUploads(response.data)
        } else {
          setUploads([])
        }
      })
      .catch((error) => console.error('Error fetching eBooks:', error))
  }, [])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleFileChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.files[0] })
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
          { headers: { 'Content-Type': 'multipart/form-data' } }
        )
        setUploads([...uploads, response.data])
        setFormData({
          year: '',
          className: '10',
          subject: subjects['10'][0],
          language: 'English',
          session: 'June',
          file: null,
          answerKey: null,
        })
      } catch (error) {
        console.error('Error uploading file:', error)
      }
    }
  }

  useEffect(() => {
    if (!Array.isArray(uploads)) return
    const filteredData = uploads.filter(
      (upload) =>
        (!filters.year || upload.year === filters.year) &&
        (!filters.className || upload.className === filters.className) &&
        (!filters.subject || upload.subject === filters.subject)
    )
    setFilteredUploads(filteredData)
  }, [filters, uploads])

  return (
    <div className="p-4 bg-white">
      <h2 className="text-3xl font-bold mb-4">Previous Year Paper Upload</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="border border-[#fd645b] rounded-xl p-5">
          <div className="mb-4">
            <label className="font-semibold">Year:</label>
            <input
              name="year"
              type="text"
              value={formData.year}
              onChange={handleChange}
              required
              className="border p-2 w-full rounded focus:ring-2 focus:ring-[#fd645b]"
            />
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
                {subjects[formData.className]?.map((subj) => (
                  <option key={subj} value={subj}>
                    {subj}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex-1">
              <label className="font-semibold">Session:</label>
              <select
                name="session"
                value={formData.session}
                onChange={handleChange}
                required
                className="border p-2 w-full rounded focus:ring-2 focus:ring-[#fd645b]"
              >
                <option value="June">June</option>
                <option value="December">December</option>
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
                <option value="English">English</option>
                <option value="Hindi">Hindi</option>
              </select>
            </div>
            <div className="flex-1">
              <label className="font-semibold">Upload Paper:</label>
              <input
                name="file"
                type="file"
                onChange={handleFileChange}
                required
                className="border p-2 w-full rounded focus:ring-2 focus:ring-[#fd645b]"
              />
            </div>
            <div className="flex-1">
              <label className="font-semibold">Upload Answer Key:</label>
              <input
                name="answerKey"
                type="file"
                onChange={handleFileChange}
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

      <h3 className="text-lg font-bold mt-5 mb-1">Uploaded Files:</h3>
      <table className="w-full border mt-4">
        <thead>
          <tr className="bg-[#fd645b] text-white">
            <th>S.No</th>
            <th>Subject</th>
            <th>Class</th>
            <th>Year</th>
            <th>Session</th>
            <th>Language</th>
            <th>Paper</th>
            <th>Answer Key</th>
          </tr>
        </thead>
        <tbody>
          {filteredUploads.map((upload, index) => (
            <tr key={upload._id} className="text-center">
              <td>{index + 1}</td>
              <td>{upload.subject}</td>
              <td>{upload.className}</td>
              <td>{upload.year}</td>
              <td>{upload.session}</td>
              <td>{upload.language}</td>
              <td>
                <a href={`${baseUrl}/${upload.file}`} target="_blank">
                  View
                </a>
              </td>
              <td>
                <a href={`${baseUrl}/${upload.answerKey}`} target="_blank">
                  View
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default PreviousPaper
