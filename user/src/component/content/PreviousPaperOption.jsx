import React from 'react'
import { Link } from 'react-router-dom'
import op10 from '../../../public/class10.jpg'
import op12 from '../../../public/class12.jpg'
import PY10e from '../../../src/assets/PP10.jpg'
import PY10h from '../../../src/assets/PP10.jpg'

const PreviousPaperOption = () => {
  return (
    <div className="p-3">
      <h3 className="sm:text-4xl text-2xl text-center font-semibold border-x-4 py-1 my-3 text-white border-[#fd645b] bg-[#00043c]">
        Previous Year Paper{' '}
      </h3>
      <div className="flex flex-col sm:flex-row justify-around items-center gap-4 p-4">
        {/* Card for Class 10 */}
        <div className="w-96 h-80 overflow-hidden rounded-lg relative group">
          <Link
            to="/Class10EnglishPapers"
            className="block w-full h-full border rounded-lg bg-gray-100 hover:bg-gray-200 duration-200 bg-no-repeat bg-cover bg-center transform hover:scale-105 transition-all relative"
            style={{ backgroundImage: `url(${op10})` }}
          >
            {/* Layer Effect */}
            <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            <div className="relative z-10 bg-white border-2 rounded-lg border-[#fd645b] p-2 mx-4 my-8 text-center">
              <h3 className="text-xl font-bold text-center">
                Class <span className="text-[#fd645b]">10</span>
              </h3>
              <span className="text-[#fd645b]">(English)</span>
              <p className="text-center">Click here for Class 10 eContent</p>
            </div>
          </Link>
        </div>
        {/* Card for Class 12 */}
        <div className="w-96 h-80 overflow-hidden rounded-lg relative group">
          <Link
            to="/Class10HindiPapers"
            className="block w-full h-full border rounded-lg bg-gray-100 hover:bg-gray-200 transition duration-200 bg-no-repeat bg-cover bg-center transform hover:scale-105 relative"
            style={{ backgroundImage: `url(${op12})` }}
          >
            {/* Layer Effect */}
            <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            <div className="relative z-10 bg-white border-2 rounded-lg border-[#fd645b] p-2 mx-4 my-8 text-center">
              <h3 className="text-xl font-bold text-center">
                Class <span className="text-[#fd645b]">10</span>
              </h3>
              <span className="text-[#fd645b]">(Hindi)</span>

              <p className="text-center">Click here for Class 12 eContent</p>
            </div>
          </Link>
        </div>
        {/* Card for Class 12 */}
        <div className="w-96 h-80 overflow-hidden rounded-lg relative group">
          <Link
            to="/Class12EnglishPapers"
            className="block w-full h-full border rounded-lg bg-gray-100 hover:bg-gray-200 transition duration-200 bg-no-repeat bg-cover bg-center transform hover:scale-105 relative"
            style={{ backgroundImage: `url(${PY10e})` }}
          >
            {/* Layer Effect */}
            <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            <div className="relative z-10 bg-white border-2 rounded-lg border-[#fd645b] p-2 mx-4 my-8 text-center">
              <h3 className="text-xl font-bold text-center">
                Class <span className="text-[#fd645b]">12</span>
              </h3>
              <span className="text-[#fd645b] ">(English)</span>
              <p className="text-center">Click here for Class 12 eContent</p>
            </div>
          </Link>
        </div>{' '}
        {/* Card for Class 12 */}
        <div className="w-96 h-80 overflow-hidden rounded-lg relative group">
          <Link
            to="/Class12HindiPapers"
            className="block w-full h-full border rounded-lg bg-gray-100 hover:bg-gray-200 transition duration-200 bg-no-repeat bg-cover bg-center transform hover:scale-105 relative"
            style={{ backgroundImage: `url(${PY10h})` }}
          >
            {/* Layer Effect */}
            <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

            <div className="relative z-10 bg-white border-2 rounded-lg border-[#fd645b] p-2 mx-4 my-8 text-center">
              <h3 className="text-xl font-bold text-center">
                Class <span className="text-[#fd645b]">12</span>
              </h3>
              <span className="text-[#fd645b]">(Hindi)</span>

              <p className="text-center">Click here for Class 12 eContent</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default PreviousPaperOption
