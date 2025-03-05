import { useEffect, useState } from 'react'
import SummaryApi from '../../common/SummaryAPI'

const TestResultsTable = () => {
  const [results, setResults] = useState([])
  const [filteredResults, setFilteredResults] = useState([])
  const [editingResult, setEditingResult] = useState(null)
  const [formData, setFormData] = useState({
    learnerName: '',
    learnerId: '',
    score: 0,
  })
  const [currentPage, setCurrentPage] = useState(1)
  const resultsPerPage = 10
  const [selectedClass, setSelectedClass] = useState('')
  const [selectedName, setSelectedName] = useState('')

  useEffect(() => {
    fetchResults()
  }, [])

  useEffect(() => {
    filterResults()
  }, [selectedClass, selectedName, results])

  const fetchResults = async () => {
    try {
      const response = await fetch(SummaryApi.getTestResult.url)
      const data = await response.json()
      setResults(data)
    } catch (error) {
      console.error('Error fetching results:', error)
    }
  }

  const filterResults = () => {
    let filtered = results
    if (selectedClass) {
      filtered = filtered.filter((result) => result.className === selectedClass)
    }
    if (selectedName) {
      filtered = filtered.filter((result) => result.name === selectedName)
    }
    setFilteredResults(filtered)
  }

  const deleteResult = async (id) => {
    if (!window.confirm('Are you sure you want to delete this result?')) return
    try {
      await fetch(SummaryApi.TestResult.url.replace(':id', id), {
        method: 'DELETE',
      })
      fetchResults()
    } catch (error) {
      console.error('Error deleting result:', error)
    }
  }

  const handleEdit = (result) => {
    setEditingResult(result._id)
    setFormData({
      learnerName: result.learnerName,
      learnerId: result.learnerId,
      score: result.score,
    })
  }

  const updateResult = async () => {
    try {
      await fetch(SummaryApi.TestResult.url.replace(':id', editingResult), {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      setEditingResult(null)
      fetchResults()
    } catch (error) {
      console.error('Error updating result:', error)
    }
  }

  const indexOfLastResult = currentPage * resultsPerPage
  const indexOfFirstResult = indexOfLastResult - resultsPerPage
  const currentResults = filteredResults.slice(
    indexOfFirstResult,
    indexOfLastResult
  )

  return (
    <div className="max-w-4xl mx-auto p-4 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold text-center mb-4 text-red-500">
        Test Results
      </h2>

      <div className="flex justify-between mb-4">
        <select
          className="p-2 border rounded"
          onChange={(e) => setSelectedClass(e.target.value)}
        >
          <option value="">Select Class</option>
          {[...new Set(results.map((result) => result.className))].map(
            (className) => (
              <option key={className} value={className}>
                {className}
              </option>
            )
          )}
        </select>
        <select
          className="p-2 border rounded"
          onChange={(e) => setSelectedName(e.target.value)}
        >
          <option value="">Select Name</option>
          {[...new Set(results.map((result) => result.name))].map((name) => (
            <option key={name} value={name}>
              {name}
            </option>
          ))}
        </select>
      </div>

      <table className="w-full border-collapse border border-red-500">
        <thead className="bg-red-500 text-white">
          <tr>
            <th className="border p-2">#</th>
            <th className="border p-2">Learner ID</th>
            <th className="border p-2">Score</th>
            <th className="border p-2">Correct Answer</th>
            <th className="border p-2">Wrong Answer</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentResults.map((result, index) => (
            <tr key={result._id} className="text-center">
              <td className="border p-2">{indexOfFirstResult + index + 1}</td>
              <td className="border p-2">{result.learnerId}</td>
              <td
                className={`border p-2 ${
                  result.score >= 50 ? 'text-green-600' : 'text-blue-600'
                }`}
              >
                {result.score}
              </td>
              <td className="border p-2">{result.correctAnswers}</td>
              <td className="border p-2">{result.wrongAnswers}</td>
              <td className="border p-2">
                <button
                  onClick={() => handleEdit(result)}
                  className="bg-blue-500 text-white px-3 py-1 rounded mr-2"
                >
                  Edit
                </button>
                <button
                  onClick={() => deleteResult(result._id)}
                  className="bg-red-500 text-white px-3 py-1 rounded"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex justify-between mt-4">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="bg-gray-500 text-white px-4 py-2 rounded disabled:opacity-50"
        >
          Previous
        </button>
        <span className="text-lg font-bold">Page {currentPage}</span>
        <button
          onClick={() =>
            setCurrentPage((prev) =>
              indexOfLastResult < filteredResults.length ? prev + 1 : prev
            )
          }
          disabled={indexOfLastResult >= filteredResults.length}
          className="bg-gray-500 text-white px-4 py-2 rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  )
}

export default TestResultsTable
