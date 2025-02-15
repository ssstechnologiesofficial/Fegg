import { useEffect, useState } from 'react'
import SummaryApi from '../../common/SummaryAPI'

const TestResultsTable = () => {
  const [results, setResults] = useState([])
  const [editingResult, setEditingResult] = useState(null)
  const [formData, setFormData] = useState({
    learnerName: '',
    learnerId: '',
    score: 0,
  })
  const [currentPage, setCurrentPage] = useState(1)
  const resultsPerPage = 10

  const fetchResults = async () => {
    try {
      const response = await fetch(SummaryApi.getTestResult.url)
      const data = await response.json()
      console.log(data)

      setResults(data)
    } catch (error) {
      console.error('Error fetching results:', error)
    }
  }

  useEffect(() => {
    fetchResults()
  }, [])

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
  const currentResults = results.slice(indexOfFirstResult, indexOfLastResult)

  return (
    <div className="max-w-4xl mx-auto p-4 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold text-center mb-4 text-red-500">
        Test Results
      </h2>

      {editingResult && (
        <div className="mb-6 p-4 bg-gray-100 border border-red-500 rounded">
          <h3 className="text-lg font-bold mb-2 text-red-600">Edit Result</h3>
          <input
            type="text"
            placeholder="Learner Name"
            className="w-full p-2 mb-2 border rounded"
            value={formData.learnerName}
            onChange={(e) =>
              setFormData({ ...formData, learnerName: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="Learner ID"
            className="w-full p-2 mb-2 border rounded"
            value={formData.learnerId}
            onChange={(e) =>
              setFormData({ ...formData, learnerId: e.target.value })
            }
          />
          <input
            type="number"
            placeholder="Score"
            className="w-full p-2 mb-2 border rounded"
            value={formData.score}
            onChange={(e) =>
              setFormData({ ...formData, score: e.target.value })
            }
          />
          <button
            onClick={updateResult}
            className="bg-green-500 text-white px-4 py-2 rounded"
          >
            Update
          </button>
        </div>
      )}

      <table className="w-full border-collapse border border-red-500">
        <thead className="bg-red-500 text-white">
          <tr>
            <th className="border p-2">#</th>
            {/* <th className="border p-2">Learner Name</th> */}
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
              {/* <td className="border p-2">{result.learnerName}</td> */}
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
              indexOfLastResult < results.length ? prev + 1 : prev
            )
          }
          disabled={indexOfLastResult >= results.length}
          className="bg-gray-500 text-white px-4 py-2 rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  )
}

export default TestResultsTable
