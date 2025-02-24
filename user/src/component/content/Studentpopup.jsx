import React from 'react'

const StudentPopup = ({ studentData, closePopup, showDetails }) => {
  return (
    <div className="flex justify-center items-center flex-col z-50 h-auto border-2 border-[#fd645b] p-3 mb-5 bg-white shadow-lg">
      <h2 className="text-lg mb-1">Your Learner ID</h2>
      <h3 className="text-3xl text-[#fd645b] font-semibold my-4">
        {studentData?.learnerId}
      </h3>

      {/* Button to Show Details in FindLernerID */}
      <button
        onClick={showDetails}
        className="bg-[#fd645b] p-2 rounded-full text-white font-semibold"
      >
        Click here to see your registration details
      </button>

      {/* Close Popup */}
      <button
        onClick={closePopup}
        className="mt-4 bg-red-500 p-2 rounded-full text-white font-semibold"
      >
        Close
      </button>
    </div>
  )
}

export default StudentPopup
