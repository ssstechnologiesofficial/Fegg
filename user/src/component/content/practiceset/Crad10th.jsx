import { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import SummaryApi from '../../../common/SummaryApi'
import fagglogo from '../../../assets/logo.png'

const Crad10th = () => {
  const navigate = useNavigate()
  const [mockTests, setMockTests] = useState([])
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedClass, setSelectedClass] = useState('12')
  const [selectedSubject, setSelectedSubject] = useState('')
  const [selectedMockSetId, setSelectedMockSetId] = useState(null)
  const [userInput, setUserInput] = useState('')
  const [userName, setUserName] = useState('')
  const [inputError, setInputError] = useState('')

  useEffect(() => {
    const fetchMockTests = async () => {
      try {
        const response = await axios.get(SummaryApi.getPracticeCards.url)
        if (response.data.success) {
          const filteredTests = response.data.data.filter(
            (test) => test.className === '10'
          )
          setMockTests(filteredTests)
        }
      } catch (error) {
        console.error('Error fetching mock tests:', error)
      }
    }

    fetchMockTests()
  }, [])

  const openModal = (subject, mockSetId) => {
    setSelectedSubject(subject)
    setSelectedMockSetId(mockSetId)
    setIsModalOpen(true)
  }

  const validateUserInput = (value) => {
    if (/^\d{10}$/.test(value)) {
      setInputError('')
      return true // Valid contact number
    } else if (/^EG\d{12,}$/.test(value)) {
      setInputError('')
      return true // Valid learner ID (14+ digits)
    } else {
      setInputError(
        'Enter a valid 10-digit Contact Number or 14+ digit Learner ID'
      )
      return false
    }
  }

  const handleUserInputChange = (e) => {
    const value = e.target.value
    setUserInput(value)
    validateUserInput(value)
  }

  const handleModalSubmit = async () => {
    if (!validateUserInput(userInput)) return // Prevent submission if input is invalid

    const submissionData = {
      className: selectedClass,
      subject: selectedSubject,
      userName,
      userInput,
    }
    console.log('Submitted Data:', submissionData)

    try {
      const response = await axios.post(
        SummaryApi.practiceModal.url,
        submissionData,
        { headers: { 'Content-Type': 'application/json' } }
      )
      console.log('Database Response:', response.data)

      if (response.data.success && selectedMockSetId) {
        navigate(`/start-test/${selectedMockSetId}`)
      }
    } catch (error) {
      console.error('Error submitting data:', error)
    }

    setIsModalOpen(false)
  }

  return (
    <div>
      <div className="container mx-auto p-4">
        <h2 className="text-xl font-bold mb-4">
          Class 12th Practice Mock Tests
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {mockTests.map((test) => (
            <div
              key={test._id}
              className="flex justify-center flex-col items-center bg-white shadow-md shadow-[#fd645b] p-4 rounded-lg border hover:scale-95 hover:shadow-[#fd645b] hover:shadow-lg transition-all"
            >
              <img
                className="w-24 h-24 p-1 object-fill rounded-full mb-4 border-2 border-[#fd645b]"
                src={fagglogo}
                alt="FAGG Logo"
              />
              <h3 className="text-lg font-semibold">
                Subject: {test.subject?.name || 'Unknown Subject'}
              </h3>
              <p className="text-sm">Total Marks: {test.totalMarks}</p>
              <p className="text-sm">Duration: {test.duration} mins</p>
              <p className="text-sm">
                Number of Questions: {test.numQuestions}
              </p>
              <button
                onClick={() => openModal(test.subject?.name, test._id)}
                className="mt-2 bg-[#fd645b] text-white px-4 py-2 rounded active:scale-95 transition-all"
              >
                Start Test
              </button>
            </div>
          ))}
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
          <div className="relative bg-white p-6 rounded-lg shadow-2xl w-96 border border-gray-300">
            <div className="absolute -top-2 -left-2 w-full h-full bg-[#ff0000] rounded-lg shadow-md border border-red-300 -z-10"></div>
            <div className="absolute top-2 left-2 w-full h-full bg-[#ff0000] rounded-lg shadow-md border border-red-300 -z-20"></div>

            <div className="flex flex-col justify-center items-center">
              <img
                src={fagglogo}
                className="sm:w-[13vw] sm:h-[13vw] w-[14vw] h-[14vw] max-w-24 max-h-24 object-fill bg-white rounded-full p-2 border-2 border-[#ff0000] shadow-md"
              />
              <h3 className="text-lg font-semibold mb-2 text-center">
                Enter Name, Contact Number, or Student ID
              </h3>
            </div>

            <input
              type="text"
              placeholder="Enter Name"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              className="border p-2 w-full mb-2 border-[#ff0000] rounded-md focus:outline-none focus:ring-2 focus:ring-[#ff0000] shadow-sm"
            />

            <input
              type="text"
              placeholder="Enter Student ID or Contact Number"
              value={userInput}
              onChange={handleUserInputChange}
              className="border p-2 w-full mb-2 border-[#ff0000] rounded-md focus:outline-none focus:ring-2 focus:ring-[#ff0000] shadow-sm"
            />

            {inputError && <p className="text-red-600 text-sm">{inputError}</p>}

            <div className="flex justify-end space-x-2 mt-3">
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-4 py-2 bg-gray-500 text-white rounded shadow-md hover:bg-gray-600 transition-all"
              >
                Cancel
              </button>
              <button
                onClick={handleModalSubmit}
                className={`px-4 py-2 rounded shadow-md transition-all ${
                  inputError
                    ? 'bg-gray-400 text-gray-700 cursor-not-allowed'
                    : 'bg-[#ff0000] text-white hover:bg-red-700'
                }`}
                disabled={!!inputError}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Crad10th
