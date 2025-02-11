import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'
import SummaryApi from '../../../common/SummaryApi'

const StartTest = () => {
  const { mockSetId } = useParams()
  const navigate = useNavigate()
  const [testData, setTestData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [answers, setAnswers] = useState({})
  const [timeRemaining, setTimeRemaining] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [userName, setUserName] = useState('')
  const [learnerid, setLearnerid] = useState('')
  const [error, setError] = useState('')

  useEffect(() => {
    const fetchTestDetails = async () => {
      try {
        const response = await axios.get(SummaryApi.startTest.url.replace(":mockSetId", mockSetId));
        const data = response.data;

        if (data.success) {
          setTestData(data.data)
          setTimeRemaining(data.data.duration * 60)
        } else {
          alert('Failed to start the test')
        }
      } catch (error) {
        console.error('Error starting test:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchTestDetails()
  }, [mockSetId])

  useEffect(() => {
    if (timeRemaining === null) return
    if (timeRemaining === 0) {
      alert('Time is up! Test will be submitted.')
      handleSubmitTest()
      return
    }

    const timer = setInterval(() => {
      setTimeRemaining((prevTime) => prevTime - 1)
    }, 1000)

    return () => clearInterval(timer)
  }, [timeRemaining])

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`
  }

  const handleAnswerChange = (questionId, answer) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionId]: answer,
    }))
  }

  const handleNextQuestion = () => {
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1)
  }

  const handlePreviousQuestion = () => {
    setCurrentQuestionIndex((prevIndex) => prevIndex - 1)
  }

  const handleOpenModal = () => {
    setIsModalOpen(true)
  }

  const handleModalSubmit = async () => {
    if (!userName || !learnerid) {
      setError('Please enter both name and phone number.')
      return
    }
    setError('')
    setIsModalOpen(false)
    await handleSubmitTest()
  }

  const handleSubmitTest = async () => {
    try {
      const result = { mockSetId, answers, userName, learnerid };
      const response = await axios.post(SummaryApi.submitpost.url,
        result);
      alert(`Test submitted successfully! Score: ${response.data.score}`);
      navigate(`/result/${response.data.result._id}`);
    } catch (error) {
      console.error('Error submitting test:', error)
      alert('Error submitting test. Please try again.')
    }
  }

  if (loading) {
    return <p>Loading test...</p>
  }

  if (!testData || !testData.questions.length) {
    return <p>No test data found.</p>
  }

  const currentQuestion = testData.questions[currentQuestionIndex]

  return (
    <div className="container mx-auto p-6 flex gap-6">
      {/* Left Sidebar - Question Numbers */}
      <div className="w-1/4">
        <h2 className="text-lg font-bold mb-4">Questions</h2>
        <ul className="space-y-2">
          {testData.questions.map((q, index) => {
            const isAnswered = Object.keys(answers).length >= index + 1
            return (
              <li
                key={q._id}
                className={`cursor-pointer text-white font-semibold text-center py-2 rounded ${
                  isAnswered ? 'bg-green-500' : 'bg-blue-500'
                }`}
                onClick={() => setCurrentQuestionIndex(index)}
              >
                {index + 1}
              </li>
            )
          })}
        </ul>
      </div>

      {/* Main Question Area */}
      <div className="w-3/4">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">
          Start Test: {testData.title}
        </h1>
        <div className="text-right text-xl font-semibold text-red-600 mb-4">
          Time Remaining: {formatTime(timeRemaining)}
        </div>

        <div className="p-6 border rounded shadow-sm bg-white">
          <h3 className="text-lg font-semibold">
            {currentQuestion.questionText}
          </h3>
          <ul className="mt-4">
            {currentQuestion.options.map((option, index) => (
              <li key={index} className="mt-2">
                <input
                  type="radio"
                  id={`option-${index}`}
                  name={`question-${currentQuestion._id}`}
                  value={option._id}
                  checked={answers[currentQuestion._id] === option._id}
                  onChange={() =>
                    handleAnswerChange(currentQuestion._id, option._id)
                  }
                />
                <label htmlFor={`option-${index}`} className="ml-2">
                  {option.optionText}
                </label>
              </li>
            ))}
          </ul>

          <div className="flex justify-between mt-4">
            <button
              onClick={handlePreviousQuestion}
              disabled={currentQuestionIndex === 0}
              className="bg-gray-500 text-white py-2 px-4 rounded"
            >
              Previous
            </button>
            <button
              onClick={handleOpenModal}
              className="bg-green-500 text-white py-2 px-4 rounded"
            >
              Submit
            </button>
            <button
              onClick={handleNextQuestion}
              disabled={currentQuestionIndex === testData.questions.length - 1}
              className="bg-blue-500 text-white py-2 px-4 rounded"
            >
              Next
            </button>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded shadow-lg">
            <h2 className="text-lg font-semibold mb-4">Enter your details</h2>
            {error && <p className="text-red-600">{error}</p>}
            <div className="mb-4">
              <label className="block mb-2">Name:</label>
              <input
                type="text"
                className="border p-2 w-full"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2">Learner ID:</label>
              <input
                type="text"
                className="border p-2 w-full"
                value={learnerid}
                onChange={(e) => setLearnerid(e.target.value)}
              />
            </div>
            <div className="flex justify-end">
              <button
                onClick={() => setIsModalOpen(false)}
                className="bg-gray-500 text-white py-2 px-4 rounded mr-2"
              >
                Cancel
              </button>
              <button
                onClick={handleModalSubmit}
                className="bg-green-500 text-white py-2 px-4 rounded"
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

export default StartTest
