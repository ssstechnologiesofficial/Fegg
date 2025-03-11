import React, { useEffect, useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import {
  FaGraduationCap,
  FaClipboard,
  FaLaptop,
  FaWpforms,
  FaAddressCard,
  FaPencilAlt,
  FaSearch,
} from 'react-icons/fa'
import 'swiper/css'
import 'swiper/css/navigation'
import { Navigation } from 'swiper/modules'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SummaryApi from '../../common/SummaryApi'

gsap.registerPlugin(ScrollTrigger)

const InfoSection = () => {
  const sectionRef = useRef(null)
  const itemsRef = useRef([])
  const [admitCardUrl, setAdmitCardUrl] = useState('')
  const [resultUrl, setResultUrl] = useState('')

  const infoItems = [
    {
      label: 'पंजीकरण', // Registration
      color: 'bg-yellow-500',
      icon: <FaWpforms />,
      link: 'register',
    },
    {
      label: 'ई-बुक', // E-Content
      color: 'bg-teal-500',
      icon: <FaClipboard />,
      link: 'e-content',
    },
    {
      label: 'प्रैक्टिस सेट', // Practice Set
      color: 'bg-orange-500',
      icon: <FaPencilAlt />,
      link: 'practice-set',
    },
    {
      label: 'ऑनलाइन वीडियो', // Online Video
      color: 'bg-purple-500',
      icon: <FaLaptop />,
      link: 'onlinevideo',
    },
    {
      label: 'प्रवेश पत्र', // Admit Card
      color: 'bg-green-500',
      icon: <FaAddressCard />,
      link: 'https://www.aisectonline.com/',
    },
    {
      label: 'अपना लर्नर आईडी खोजें', // Find your Learner ID
      color: 'bg-blue-500',
      icon: <FaSearch />,
      link: 'FindLernerID',
    },
    {
      label: 'परिणाम', // Result
      color: 'bg-red-500',
      icon: <FaGraduationCap />,
      link: 'https://www.aisectonline.com/',
    },
  ]

  useEffect(() => {
    // Fetch Admit Card & Result URL
    const fetchUrls = async () => {
      try {
        const response = await axios.get(SummaryApi.resultAdmitcard.url)
        if (response.data.length > 0) {
          const latestEntry = response.data[0] // Assuming the latest entry is needed
          setAdmitCardUrl(latestEntry.admitCardUrl)
          setResultUrl(latestEntry.resultUrl)
        }
      } catch (error) {
        console.error('Error fetching URLs:', error)
      }
    }

    fetchUrls()

    // GSAP Animation
    const context = gsap.context(() => {
      itemsRef.current.forEach((item, index) => {
        gsap.fromTo(
          item,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: item,
              start: 'top 80%',
            },
          }
        )
      })
    }, sectionRef)

    return () => context.revert() // Clean up GSAP context on unmount
  }, [])

  return (
    <div ref={sectionRef} className="py-12 bg-gray-100 px-4 md:px-8">
      <h2 className="text-center text-primary text-xl md:text-3xl font-bold mb-8">
        {/* INFORMATION ABOUT */}
        शॉर्टकट कुंजियाँ
      </h2>
      <div className="container mx-auto">
        <Swiper
          modules={[Navigation]}
          navigation
          spaceBetween={10}
          slidesPerView={1}
          breakpoints={{
            480: { slidesPerView: 2, spaceBetween: 10 },
            768: { slidesPerView: 3, spaceBetween: 15 },
            1024: { slidesPerView: 4, spaceBetween: 10 },
            1280: { slidesPerView: 7, spaceBetween: 10 },
          }}
        >
          {infoItems.map((item, index) => (
            <SwiperSlide key={index}>
              <div
                ref={(el) => (itemsRef.current[index] = el)}
                className="flex flex-col items-center"
              >
                <a
                  href={item.link !== '#' ? item.link : undefined} // Use href for non-navigation items
                  className={`flex items-center justify-center w-20 h-20 md:w-28 md:h-28 lg:w-30 lg:h-30 ${item.color} text-white rounded-full shadow-lg`}
                >
                  <div className="text-2xl md:text-4xl lg:text-6xl">
                    {item.icon}
                  </div>
                </a>
                <p className="text-sm md:text-base lg:text-lg font-medium mt-2 text-center">
                  {item.label}
                </p>
              </div>
            </SwiperSlide>
          ))}

          {/* Admit Card */}
          {admitCardUrl && (
            <SwiperSlide>
              <div className="flex flex-col items-center">
                <a
                  href={admitCardUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-20 h-20 md:w-28 md:h-28 lg:w-30 lg:h-30 bg-green-500 text-white rounded-full shadow-lg"
                >
                  <FaAddressCard className="text-2xl md:text-4xl lg:text-6xl" />
                </a>
                <p className="text-sm md:text-base lg:text-lg font-medium mt-2 text-center">
                  Admit Card
                </p>
              </div>
            </SwiperSlide>
          )}

          {/* Result */}
          {resultUrl && (
            <SwiperSlide>
              <div className="flex flex-col items-center">
                <a
                  href={resultUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-20 h-20 md:w-28 md:h-28 lg:w-30 lg:h-30 bg-red-500 text-white rounded-full shadow-lg"
                >
                  <FaGraduationCap className="text-2xl md:text-4xl lg:text-6xl" />
                </a>
                <p className="text-sm md:text-base lg:text-lg font-medium mt-2 text-center">
                  Result
                </p>
              </div>
            </SwiperSlide>
          )}
        </Swiper>
      </div>
    </div>
  )
}

export default InfoSection
