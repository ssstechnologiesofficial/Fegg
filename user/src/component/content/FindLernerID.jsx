import React, { useState } from 'react'
import axios from 'axios'
import StudentPopup from './Studentpopup'

const FindLernerID = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
    sssmid: '',
    contactNo: '',
    dob: '',
  })
  const [studentData, setStudentData] = useState(null)
  const [isPopupOpen, setPopupOpen] = useState(false)
  const [showDetails, setShowDetails] = useState(false)
  const [isEditing, setIsEditing] = useState(false)
  const [editedData, setEditedData] = useState({})

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post(
        'http://localhost:8006/api/getStudentLernerID',
        formData
      )
      setStudentData(response.data)
      setEditedData(response.data) // Store original data for editing
      setPopupOpen(true)
    } catch (error) {
      alert('Student not found')
    }
  }

  // Show student details after clicking in popup
  const handleShowDetails = () => {
    setShowDetails(true)
    setPopupOpen(false)
  }

  // Handle Edit Mode Toggle
  const handleEdit = () => {
    setIsEditing(true)
  }

  // Handle Change for Editable Fields
  const handleInputChange = (e) => {
    setEditedData({ ...editedData, [e.target.name]: e.target.value })
  }

  // Save the updated details to the database
  const handleSave = async () => {
    try {
      const response = await axios.put(
        `http://localhost:8006/api/updateStudentLERnerID/${studentData._id}`,
        editedData
      )

      console.log('Data', response)
      setStudentData(response.data)
      setIsEditing(false)
      alert('Details updated successfully')
    } catch (error) {
      console.error('Error updating student details:', error)
      alert('Failed to update details')
    }
  }

  // Print Student Details
  const handlePrint = () => {
    window.print()
  }

  return (
    <div className="flex flex-col justify-center items-center w-full">
      <h2 className="text-2xl sm:text-5xl font-semibold text-white text-center my-5 border-[#fd645b] border-x-4 bg-[#00043c] pt-1 py-1">
        Know Your Student Learner ID
      </h2>

      {/* Form to Find Learner ID */}
      <form
        onSubmit={handleSubmit}
        className="flex justify-center sm:flex-row flex-col gap-4 p-6"
      >
        <input
          type="text"
          name="firstName"
          className="border p-2 w-full rounded"
          placeholder="First Name"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="middleName"
          className="border p-2 w-full rounded"
          placeholder="Middle Name"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="lastName"
          className="border p-2 w-full rounded"
          placeholder="Last Name"
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="sssmid"
          placeholder="SSSM ID"
          className="border p-2 w-full rounded"
          onChange={handleChange}
        />
        <input
          type="text"
          name="contactNo"
          className="border p-2 w-full rounded"
          placeholder="Contact No."
          onChange={handleChange}
        />
        <input
          type="date"
          name="dob"
          className="border p-2 w-full rounded"
          onChange={handleChange}
          required
        />
        <button
          type="submit"
          className="border p-2 w-full rounded bg-blue-500 text-white"
        >
          Submit
        </button>
      </form>

      {/* Student Popup */}
      {isPopupOpen && (
        <StudentPopup
          studentData={studentData}
          closePopup={() => setPopupOpen(false)}
          showDetails={handleShowDetails}
        />
      )}

      {/* Display Student Details Here */}
      {showDetails && studentData && (
        <div className="mt-6 w-full max-w-3xl bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold text-center text-[#fd645b] mb-4">
            Student Registration Details
          </h2>
          <p>
            <strong>Learner ID:</strong> {studentData.learnerId}
          </p>
          <p>
            <strong>Full Name:</strong> {studentData.firstName}{' '}
            {studentData.middleName} {studentData.lastName}
          </p>
          <p>
            <strong>SSSM ID:</strong> {studentData.sssmid}
          </p>
          <p>
            <strong>Date of Birth:</strong> {studentData.dob}
          </p>
          <p>
            <strong>Age:</strong> {studentData.age}
          </p>
          <p>
            <strong>Gender:</strong> {studentData.gender}
          </p>
          <p>
            <strong>Religion:</strong> {studentData.religion}
          </p>
          <p>
            <strong>Category:</strong> {studentData.category}
          </p>
          <p>
            <strong>Father's Name:</strong> {studentData.fatherFirstName}{' '}
            {studentData.fatherMiddleName} {studentData.fatherLastName}
          </p>
          <p>
            <strong>Mother's Name:</strong> {studentData.motherName}
          </p>
          <p>
            <strong>Last Class Studied:</strong> {studentData.lastClassStudied}
          </p>
          <p>
            <strong>Applied For:</strong> {studentData.applyFor}
          </p>
          <p>
            <strong>Status:</strong> {studentData.status}
          </p>
          <p>
            <strong>District:</strong> {studentData.district}
          </p>
          <p>
            <strong>Tehsil:</strong> {studentData.tehsil}
          </p>
          <p>
            <strong>Block:</strong> {studentData.block}
          </p>
          <p>
            <strong>Village:</strong> {studentData.village}
          </p>
          <p>
            <strong>Pincode:</strong> {studentData.pincode}
          </p>

          {/* Editable Fields */}
          <div className="mt-4">
            <p>
              <strong>Contact No:</strong>
              {isEditing ? (
                <input
                  type="text"
                  name="contactNo"
                  value={editedData.contactNo}
                  onChange={handleInputChange}
                  className="border p-1 rounded ml-2"
                />
              ) : (
                studentData.contactNo
              )}
            </p>
            <p>
              <strong>Email:</strong>
              {isEditing ? (
                <input
                  type="email"
                  name="mail"
                  value={editedData.mail}
                  onChange={handleInputChange}
                  className="border p-1 rounded ml-2"
                />
              ) : (
                studentData.mail
              )}
            </p>
            <p>
              <strong>Permanent Address:</strong>
              {isEditing ? (
                <textarea
                  name="permanentAddress"
                  value={editedData.permanentAddress}
                  onChange={handleInputChange}
                  className="border p-1 rounded ml-2 w-full"
                ></textarea>
              ) : (
                studentData.permanentAddress
              )}
            </p>
          </div>

          {/* Buttons */}
          <div className="mt-4 flex gap-4">
            {isEditing ? (
              <button
                onClick={handleSave}
                className="bg-green-500 text-white p-2 rounded"
              >
                Save
              </button>
            ) : (
              <button
                onClick={handleEdit}
                className="bg-yellow-500 text-white p-2 rounded"
              >
                Edit
              </button>
            )}
            <button
              onClick={handlePrint}
              className="bg-blue-500 text-white p-2 rounded"
            >
              Print
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default FindLernerID
