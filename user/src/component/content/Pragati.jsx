import React from 'react'
import img from '../../assets/pragati.jpg'

const Pragati = () => {
  return (
    <div className="p-5">
      <h3 className="text-2xl sm:text-4xl font-semibold text-white text-center my-5 border-[#fd645b] border-x-4 bg-[#00043c] py-1">
        About Pragati
      </h3>
      <div className="flex flex-col sm:flex-row justify-evenly items-center mt-8">
        {/* Image Container with Layered Effect */}
        <div className="relative w-60 sm:w-80 m-3">
          {/* Background Layer */}
          <div className="absolute top-2 left-2 sm:top-3 sm:left-3 w-full h-full bg-[#fd645b] rounded-lg -z-10"></div>
          <div className="absolute bottom-2 right-2 sm:bottom-3 sm:right-3 w-full h-full bg-[#fd645b] rounded-lg -z-10"></div>

          {/* Image with Border & Shadow */}
          <img
            src={img}
            className="w-full object-fill rounded-lg shadow-lg border-4 border-white"
          />
        </div>

        {/* Text Content */}
        <div className="sm:m-3 flex justify-center items-start flex-col sm:w-[600px] sm:p-3 p-5 mt-7 text-sm sm:text-base  card">
          <p className="mb-5">
            In India, <span className="text-[#fd645b] font-bold">90</span>{' '}
            million young women (aged 15-29) are outside the scope of education,
            employment, and training (NEET - Not in Education, Employment &
            Training). The primary reasons for this include early marriage,
            motherhood, migration, lack of access to secondary education,
            academic barriers, and poverty. Many of these young women are
            deprived of the autonomy needed to make informed decisions about
            their health, homes, and communities, effectively pushing them to
            the margins of the formal economy.
          </p>
          <p>
            Through <i className="text-[#fd645b] font-bold">Pragati</i>, we
            aspire to support these young women in completing their 10th-grade
            education while also creating opportunities for further education,
            employment, and skill development. Our goal is to empower adolescent
            girls and young women by providing them with the choices and
            resources necessary to realize their full potential.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Pragati
