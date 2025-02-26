import React, { useEffect, useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Outlet, Link } from 'react-router-dom'

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

gsap.registerPlugin(ScrollTrigger)

const InfoSection = () => {
  const sectionRef = useRef(null)
  const itemsRef = useRef([])

  const infoItems = [
    {
      label: 'पंजीकरण',
      color: 'bg-yellow-500',
      icon: <FaWpforms />,
      link: 'register',
    },
    {
      label: 'ई-सामग्री',
      color: 'bg-teal-500',
      icon: <FaClipboard />,
      link: 'e-content',
    },
    {
      label: 'अभ्यास सेट',
      color: 'bg-orange-500',
      icon: <FaPencilAlt />,
      link: 'practice-set',
    },
    {
      label: 'ऑनलाइन वीडियो',
      color: 'bg-purple-500',
      icon: <FaLaptop />,
      link: 'onlinevideo',
    },
    { label: 'प्रवेश पत्र', color: 'bg-green-500', icon: <FaAddressCard /> },
    {
      label: 'अपने लर्नर आईडी खोजें',
      color: 'bg-blue-500',
      icon: <FaSearch />,
      link: 'FindLernerID',
    },

    { label: 'परिणाम', color: 'bg-red-500', icon: <FaGraduationCap /> },
  ]

  useEffect(() => {
    // GSAP एनीमेशन
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
              start: 'top 80%', // जब आइटम व्यू में आता है तब ट्रिगर होता है
            },
          }
        )
      })
    }, sectionRef)

    return () => context.revert() // अनमाउंट पर GSAP कॉन्टेक्स्ट को रीसेट करें
  }, [])

  return (
    <div ref={sectionRef} className="py-12 bg-gray-100 px-4 md:px-8">
      <h2 className="text-center text-xl md:text-3xl font-bold mb-8">
        जानकारी
      </h2>
      <div className="container mx-auto">
        <Swiper
          modules={[Navigation]}
          navigation
          spaceBetween={10}
          slidesPerView={1} // सबसे छोटे स्क्रीन के लिए डिफ़ॉल्ट
          breakpoints={{
            480: { slidesPerView: 2, spaceBetween: 10 }, // छोटे स्क्रीन
            768: { slidesPerView: 3, spaceBetween: 15 }, // मध्यम स्क्रीन
            1024: { slidesPerView: 4, spaceBetween: 10 }, // बड़े स्क्रीन
            1280: { slidesPerView: 7, spaceBetween: 10 }, // अतिरिक्त बड़े स्क्रीन
          }}
        >
          {infoItems.map((item, index) => (
            <SwiperSlide key={index}>
              <div
                ref={(el) => (itemsRef.current[index] = el)}
                className="flex flex-col items-center"
              >
                {/* आइकन वाला सर्कल */}
                <Link
                  to={item.link}
                  className={`flex items-center justify-center w-20 h-20 md:w-28 md:h-28 lg:w-30 lg:h-30 ${item.color} text-white rounded-full shadow-lg`}
                >
                  <div className="text-2xl md:text-4xl lg:text-6xl">
                    {item.icon}
                  </div>
                </Link>
                {/* सर्कल के बाहर लेबल */}
                <p className="text-sm md:text-base lg:text-lg font-medium mt-2 text-center">
                  {item.label}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}

export default InfoSection
