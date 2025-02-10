import React from 'react'
import hero from '../../assets/pp1.webp'
import hero2 from '../../assets/pp2.webp'

const MissionVision = () => {
  return (
    <div className="p-10">
      <h3 className="sm:text-5xl text-2xl text-center font-semibold border-x-4 py-1 my-3 text-white border-[#fd645b] bg-[#00043c]">
        Mission & Vision
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Vision */}
        <div className="flex flex-col border rounded-md">
          <img src={hero} alt="Vision" className="rounded-md object-cover" />
          <h3 className="text-xl font-semibold text-gray-800 mt-4 ps-2">
            Vision
          </h3>
          <p className="text-gray-600 p-2">
            Educate Girls aims to bring practical, social, and economic change
            for all girls, striving to build an India where all children have
            equal opportunities to receive quality education.
          </p>
          <button className="mt-4 px-6 py-2 text-red-400 font-bold text-sm self-start">
            READ MORE
          </button>
        </div>

        {/* Mission */}
        <div className="flex flex-col border rounded-md">
          <img src={hero2} alt="Mission" className="rounded-md object-cover" />
          <h3 className="text-xl font-semibold text-gray-800 mt-4 ps-2">
            Mission
          </h3>
          <p className="text-gray-600 p-2">
            Educate Girls leverages existing community and government resources
            to ensure that all girls are enrolled in school and receive quality
            education.
          </p>
          <button className="mt-4 px-6 py-2 text-red-400 font-bold text-sm self-start">
            READ MORE
          </button>
        </div>
      </div>
    </div>
  )
}

export default MissionVision
