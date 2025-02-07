import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
const AISECTInfo = () => {
  const AISECTInfoRef = useRef(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const footerSections = AISECTInfoRef.current.querySelectorAll(
      '.AISECTInfo-section'
    )

    footerSections.forEach((section, index) => {
      gsap.fromTo(
        section,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: index * 0.2,
          scrollTrigger: {
            trigger: section,
            start: 'top 90%',
            end: 'bottom 70%',
            toggleActions: 'play none none reverse',
            once: true,
            invalidateOnRefresh: true,
          },
        }
      )
    })

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  return (
    <div ref={AISECTInfoRef} className="bg-[#00043c]">
      {' '}
      <div className=" p-6 rounded-xl shadow-lg max-w-2xl mx-auto text-center py-10 sm:py-20 AISECTInfo-section">
        <h2 className="sm:text-4xl text-3xl font-semibold text-[#fd645b] mb-8">
          About AISECT
        </h2>
        <p className="text-gray-100 sm:text-lg text-base">
          AISECTonline.com भारत के अग्रणी ऑनलाइन सेवा नेटवर्क में से एक है। यह
          विभिन्न G2C (सरकार से नागरिक) और B2C (व्यवसाय से) ग्राहक सेवाओं का
          गुलदस्ता है। अपेक्षाकृत कम समय के दौरान{' '}
          <span className="text-[#fd645b] font-medium">aisectonline.com </span>
          ने ग्रामीण, अर्ध-शहरी और शहरी क्षेत्रों में भी गहरी पैठ बना ली है।
        </p>
        <p className="text-gray-100 sm:text-lg text-base mt-4">
          आज AISECTonline 28 राज्यों और 6 केंद्र शासित प्रदेशों में सेवाओं का एक
          बहुत व्यापक स्पेक्ट्रम प्रदान करता है।
        </p>
      </div>
    </div>
  )
}

export default AISECTInfo
