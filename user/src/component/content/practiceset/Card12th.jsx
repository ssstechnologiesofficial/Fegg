import { useEffect, useState } from 'react'
import SummaryApi from '../../../common/SummaryApi'
import fagglogo from '../../../assets/logo.png'

const Crad12th = () => {
  const [mockTests, setMockTests] = useState([])

  useEffect(() => {
    const fetchMockTests = async () => {
      try {
        const response = await fetch(SummaryApi.getPracticeCards.url) // Replace with your API URL
        const data = await response.json()
        if (data.success) {
          const filteredTests = data.data.filter(
            (test) => test.className === '12'
          )
          setMockTests(filteredTests)
        }
      } catch (error) {
        console.error('Error fetching mock tests:', error)
      }
    }

    fetchMockTests()
  }, [])

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-xl font-bold mb-4">Class 12th Practice Mock Tests</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {mockTests.map((test) => (
          <div
            key={test._id}
            className="flex justify-center flex-col items-center bg-white shadow-md shadow-[#fd645b] p-4 rounded-lg border hover:scale-95 hover:shadow-[#fd645b] hover:shadow-lg  transition-all"
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
            <p className="text-sm">Number of Questions: {test.numQuestions}</p>
            <button className="mt-2 bg-[#fd645b] text-white px-4 py-2 rounded active:scale-95 transition-all">
              Start Test
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Crad12th
