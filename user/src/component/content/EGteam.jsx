import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import team1 from '../../assets/Anushree-Singh_Educate-Girls.jpg'
import team2 from '../../assets/Bineesh-Mathai.jpg'
import team3 from '../../assets/Geetika-Tondon-Higgins.jpg'
import team4 from '../../assets/Vijaylakshmi-Saxena_Educate-Girls.jpg'
import team5 from '../../assets/Vikram-Singh-Solanki.jpg'

const images = [
  { img: team1, name: 'Anushree Singh', position: 'Head- Human Resources' },
  {
    img: team2,
    name: 'Bineesh Mathai',
    position: 'Director - Purpose Resources',
  },
  {
    img: team3,
    name: 'Geetika Tondan-Higgins',
    position: 'Director - Pragati',
  },
  {
    img: team4,
    name: 'Vijaylakshmi Saxena',
    position: 'Chief Financial Officer (CFO)',
  },
  {
    img: team5,
    name: 'Vikram Singh Solanki',
    position: 'Director - Operations',
  },
]

const EGteam = () => {
  return (
    <div className="w-full max-w-6xl  px-2">
      <h3 className="text-2xl sm:text-5xl font-semibold text-white text-center my-5 border-[#fd645b] border-x-4 bg-[#00043c] pt-1 py-1 ">
        Senior Management Team{' '}
      </h3>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 2 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 5 },
        }}
        navigation
        pagination={{ clickable: true }}
        className="my-8"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index} className="group">
            <div className="flex flex-col justify-center items-center sm:p-0 p-12">
              <div className="text-center ">
                <img
                  src={img.img}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-60 object-fill rounded-lg shadow-lg mb-2 
                            transform transition duration-300 ease-in-out group-hover:scale-105 border-l-2 border-[#fd645b]"
                />
                <h3 className="font-semibold text-lg">{img.name}</h3>
                <h3 className="text-gray-600">{img.position}</h3>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default EGteam
