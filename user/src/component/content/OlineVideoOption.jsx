import React from 'react'
import { Link } from 'react-router-dom'
import op10 from '../../../public/class10.jpg'
import op12 from '../../../public/class12.jpg'

const OlineVideoOption = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-around items-center gap-4 p-4">
      {/* Card for Class 10 */}
      <div className="w-96 h-80 overflow-hidden rounded-lg relative group">
        <Link
          to="/class10video"
          className="block w-full h-full border rounded-lg bg-gray-100 hover:bg-gray-200 duration-200 bg-no-repeat bg-cover bg-center transform hover:scale-105 transition-all relative"
          style={{ backgroundImage: `url(${op10})` }}
        >
          {/* Layer Effect */}
          <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

          <div className="relative z-10 bg-white border-2 rounded-lg border-[#fd645b] p-2 mx-4 my-8">
            <h3 className="text-xl font-bold text-center mb-4">
              Class <span className="text-[#fd645b]">10</span>
            </h3>
            <p className="text-center">Click here for Class 10</p>
          </div>
        </Link>
      </div>

      {/* Card for Class 12 */}
      <div className="w-96 h-80 overflow-hidden rounded-lg relative group">
        <Link
          to="/class12video"
          className="block w-full h-full border rounded-lg bg-gray-100 hover:bg-gray-200 transition duration-200 bg-no-repeat bg-cover bg-center transform hover:scale-105 relative"
          style={{ backgroundImage: `url(${op12})` }}
        >
          {/* Layer Effect */}
          <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

          <div className="relative z-10 bg-white border-2 rounded-lg border-[#fd645b] p-2 mx-4 my-8">
            <h3 className="text-xl font-bold text-center mb-4">
              Class <span className="text-[#fd645b]">12</span>
            </h3>
            <p className="text-center">Click here for Class 12</p>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default OlineVideoOption
