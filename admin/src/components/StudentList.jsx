import { useEffect, useState } from 'react'
import axios from 'axios'
import SummaryApi from '../common/SummaryAPI'
import * as XLSX from 'xlsx'

const StudentList = () => {
  const [students, setStudents] = useState([])
  const [selectedStudent, setSelectedStudent] = useState(null)
  const [formData, setFormData] = useState({})
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const studentsPerPage = 5

  useEffect(() => {
    fetchStudents()
  }, [])

  const fetchStudents = async () => {
    try {
      const response = await axios.get(SummaryApi.Register.url)
      setStudents(response.data)
    } catch (error) {
      console.error('Error fetching students:', error)
    }
  }

  const handleEdit = (student) => {
    setSelectedStudent(student)
    setFormData(student)
    setIsModalOpen(true)
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleUpdate = async () => {
    try {
      await axios.put(
        SummaryApi.deleteRegister.url.replace(':id', selectedStudent._id),
        formData
      )
      alert('Student updated successfully!')
      setIsModalOpen(false)
      fetchStudents()
    } catch (error) {
      console.error('Error updating student:', error)
    }
  }

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this student?')) {
      try {
        await axios.delete(SummaryApi.deleteRegister.url.replace(':id', id))
        alert('Student deleted successfully!')
        fetchStudents()
      } catch (error) {
        console.error('Error deleting student:', error)
      }
    }
  }

  const exportToExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(students)
    const workbook = XLSX.utils.book_new()
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Students')
    XLSX.writeFile(workbook, 'StudentList.xlsx')
  }

  const indexOfLastStudent = currentPage * studentsPerPage
  const indexOfFirstStudent = indexOfLastStudent - studentsPerPage
  const currentStudents = students.slice(
    indexOfFirstStudent,
    indexOfLastStudent
  )

  const nextPage = () => {
    if (indexOfLastStudent < students.length) {
      setCurrentPage((prev) => prev + 1)
    }
  }

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1)
    }
  }
  return (
    <div className="p-6 bg-white min-h-screen">
      <h2 className="text-2xl font-bold mb-4">Admin - Student List</h2>
      {/* Export Button */}
      <button
        className="mb-4 bg-green-500 text-white px-4 py-2 rounded"
        onClick={exportToExcel}
      >
        Export to Excel
      </button>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-primary text-white">
            <th className="border p-2">Learner ID</th>
            <th className="border p-2">Name</th>
            <th className="border p-2">Father's Name</th>
            <th className="border p-2">Gender</th>
            <th className="border p-2">DOB</th>
            <th className="border p-2">Age</th>
            <th className="border p-2">Category</th>
            <th className="border p-2">Religion</th>
            <th className="border p-2">SSSM ID</th>
            {/* <th className="border p-2">Permanent Address</th>
            <th className="border p-2">Current Address</th> */}
            <th className="border p-2">Contact No.</th>
            <th className="border p-2">Last Class Studied</th>
            <th className="border p-2">Apply For</th>
            <th className="border p-2">Status</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentStudents.map((student) => (
            <tr key={student._id} className="border">
              <td className="border p-2">{student.learnerId}</td>
              <td className="border p-2">
                {student.firstName} {student.middleName} {student.lastName}
              </td>
              <td className="border p-2">
                {student.fatherFirstName} {student.fatherMiddleName}{' '}
                {student.fatherLastName}
              </td>
              <td className="border p-2">{student.gender}</td>
              <td className="border p-2">
                {new Date(student.dob).toLocaleDateString()}
              </td>
              <td className="border p-2">{student.age}</td>
              <td className="border p-2">{student.category}</td>
              <td className="border p-2">{student.religion}</td>
              <td className="border p-2">{student.sssmid}</td>
              {/* <td className="border p-2">{student.permanentAddress}</td>
              <td className="border p-2">
                {student.block} {student.village} {student.tehsil} {student.district}  {student.pincode}
              </td> */}
              <td className="border p-2">{student.contactNo}</td>
              <td className="border p-2">{student.lastClassStudied}</td>
              <td className="border p-2">{student.applyFor}</td>
              <td className="border p-2">{student.status}</td>
              <td className="border p-2">
                <button
                  className="bg-blue-500 text-white px-3 py-1 rounded mr-2"
                  onClick={() => handleEdit(student)}
                >
                  Edit
                </button>
                <button
                  className="bg-red-500 text-white px-3 py-1 rounded"
                  onClick={() => handleDelete(student._id)}
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
          className="bg-gray-500 text-white px-4 py-2 rounded"
          onClick={prevPage}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span className="text-lg font-semibold">Page {currentPage}</span>
        <button
          className="bg-gray-500 text-white px-4 py-2 rounded"
          onClick={nextPage}
          disabled={indexOfLastStudent >= students.length}
        >
          Next
        </button>
      </div>
      {/* Update Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-[450px] max-h-[80vh] overflow-y-auto">
            <h2 className="text-xl font-bold mb-4">Update Student</h2>

            {/* Non-editable ID */}
            <p className="font-semibold">Student ID: {formData._id}</p>

            {/* Scrollable Form Fields */}
            <div className="h-[400px] overflow-y-auto">
              {Object.keys(formData)
                .filter((field) => field !== '_id') // Exclude _id from inputs
                .map((field) => (
                  <div key={field} className="mb-2">
                    <label className="block font-semibold capitalize">
                      {field.replace(/([A-Z])/g, ' $1').trim()}
                    </label>
                    <input
                      type={field === 'dob' ? 'date' : 'text'}
                      name={field}
                      value={formData[field] || ''}
                      onChange={handleChange}
                      className="border rounded p-2 w-full"
                    />
                  </div>
                ))}
            </div>

            {/* Buttons */}
            <div className="flex justify-end mt-4">
              <button
                className="bg-red-500 text-white px-4 py-2 rounded mr-2"
                onClick={() => setIsModalOpen(false)}
              >
                Cancel
              </button>
              <button
                className="bg-green-500 text-white px-4 py-2 rounded"
                onClick={handleUpdate}
              >
                Update
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default StudentList
