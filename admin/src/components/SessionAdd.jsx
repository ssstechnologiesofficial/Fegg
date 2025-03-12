import React, { useState, useEffect } from 'react'
import axios from 'axios'
import SummaryApi from '../common/SummaryAPI'

const SessionAdd = () => {
  const [year, setYear] = useState('')
  const [month, setMonth] = useState('June')
  const [sessions, setSessions] = useState([])

  // Fetch existing sessions
  const fetchSessions = async () => {
    try {
      const response = await axios.get(SummaryApi.getsession.url)
      setSessions(response.data)
    } catch (error) {
      console.error('Error fetching sessions:', error)
    }
  }

  useEffect(() => {
    fetchSessions()
  }, [])

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!year || !month) {
      alert('Please enter a valid year and month.')
      return
    }

    try {
      const response = await axios.post(SummaryApi.uploadsession.url, {
        year,
        month,
      })
      alert('Session added successfully!')
      setSessions([...sessions, response.data]) // Update state with new session
      setYear('') // Reset year field
    } catch (error) {
      console.error('Error adding session:', error)
      alert('Failed to add session.')
    }
  }

  return (
    <div className="p-6 bg-white shadow-lg rounded-lg ">
      <h2 className="text-2xl font-bold mb-4">Add Session</h2>
      <form onSubmit={handleSubmit} className="space-y-4 border border-[#fd645b] rounded-xl border-r-4 border-b-4 p-5">
        <input
          type="number"
          placeholder="Enter Year"
          value={year}
          onChange={(e) => setYear(e.target.value)}
          className="border p-2 w-full rounded"
          required
        />
        <select
          value={month}
          onChange={(e) => setMonth(e.target.value)}
          className="border p-2 w-full rounded"
        >
          <option value="June">June</option>
          <option value="December">December</option>
        </select>
        <button
          type="submit"
          className="bg-primary text-white p-2 rounded w-full"
        >
          Add Session
        </button>
      </form>

      {/* Display Added Sessions */}
      <div className="mt-6">
        <h3 className="text-xl font-bold">Existing Sessions</h3>
        <ul className="mt-2">
          {sessions.map((session, index) => (
            <li key={index} className="p-2 border-b">
              {session.year} - {session.month}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default SessionAdd
