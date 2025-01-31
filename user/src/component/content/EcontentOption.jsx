import React from 'react'
import { Link } from 'react-router-dom'

const EcontentOption = () => {
  return (
    <div className="flex gap-4 p-4">
      {/* Card for Class 10 */}
      <div className="w-1/2 p-4 border rounded-lg bg-gray-100 hover:bg-gray-200 transition duration-200">
        <Link to="/class10">
          <h3 className="text-xl font-bold text-center mb-4">Class 10</h3>
          <p className="text-center">Click here for Class 10 eContent</p>
        </Link>
      </div>

      {/* Card for Class 12 */}
      <div className="w-1/2 p-4 border rounded-lg bg-gray-100 hover:bg-gray-200 transition duration-200">
        <Link to="/class12">
          <h3 className="text-xl font-bold text-center mb-4">Class 12</h3>
          <p className="text-center">Click here for Class 12 eContent</p>
        </Link>
      </div>
    </div>
  )
}

export default EcontentOption
