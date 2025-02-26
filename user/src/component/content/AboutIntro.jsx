import hero from '../../assets/hero.webp'
import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const AboutIntro = () => {
  const heroImageRef = useRef(null)
  const textSectionRef = useRef(null)
  const historySectionRef = useRef(null)
  const visionSectionRef = useRef(null)
  const missionSectionRef = useRef(null)
  const ordinanceSectionRef = useRef(null)

  useEffect(() => {
    gsap.fromTo(
      heroImageRef.current,
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: heroImageRef.current,
          start: 'top 80%',
          end: 'top 20%',
          toggleActions: 'play none none none',
        },
      }
    )

    gsap.fromTo(
      textSectionRef.current,
      { opacity: 0, x: 50 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: textSectionRef.current,
          start: 'top 80%',
          end: 'top 20%',
          toggleActions: 'play none none none',
        },
      }
    )
  }, [])

  return (
    <div className="bg-gray-50 relative">
      <img src={hero} alt="इतिहास" className="object-cover w-full" />
      <div className="bg-white mx-6 relative -mt-16 rounded-lg shadow-lg mb-8">
        <div className="container px-4 md:px-8 lg:px-16 py-12">
          <div className="text-sm text-gray-600 mb-6">
            <a href="/" className="hover:text-red-400">
              होम
            </a>{' '}
            &gt; हमारे बारे में
          </div>

          <h1
            className="text-center text-2xl md:text-3xl font-bold text-red-400 mb-8"
            ref={textSectionRef}
          >
            एजुकेट गर्ल्स के बारे में
          </h1>

          <div className="mb-12" ref={textSectionRef}>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              वैश्विक खुले विद्यालय की नींव
            </h2>
            <p className="text-gray-600">
              एजुकेट गर्ल्स एक गैर-लाभकारी संस्था है जो भारत के ग्रामीण और
              शैक्षिक रूप से कमजोर वर्ग की लड़कियों की शिक्षा के लिए समुदायों को
              जागरूक और सशक्त करने पर ध्यान केंद्रित करती है।
            </p>
            <button className="mt-4 px-6 py-2 bg-red-400 text-white text-sm rounded-3xl hover:bg-red-600">
              और पढ़ें
            </button>
          </div>

          <div
            className="flex bg-gray-50 shadow-lg mb-12"
            ref={historySectionRef}
          >
            <img
              src={hero}
              alt="इतिहास"
              className="w-1/3 rounded-md object-cover"
            />
            <div className="w-2/3 pl-6">
              <h3 className="text-xl font-semibold text-gray-800 p-6 mb-4">
                इतिहास
              </h3>
              <p className="text-gray-600">
                2007 से, एजुकेट गर्ल्स ने लाखों लड़कियों को स्कूल नामांकन के लिए
                प्रेरित किया है।
              </p>
              <button className="mt-4 px-6 py-2 text-red-400 font-bold text-sm">
                और पढ़ें
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8" id="vm">
            <div
              className="flex flex-col border rounded-md"
              ref={visionSectionRef}
            >
              <img
                src={hero}
                alt="दृष्टि"
                className="rounded-md object-cover"
              />
              <h3 className="text-xl font-semibold text-gray-800 mt-4 ps-2">
                दृष्टि
              </h3>
              <p className="text-gray-600 p-2">
                हम सभी बच्चों के लिए समान अवसरों वाली शिक्षा सुनिश्चित करना
                चाहते हैं।
              </p>
              <button className="mt-4 px-6 py-2 text-red-400 font-bold text-sm self-start">
                और पढ़ें
              </button>
            </div>

            <div
              className="flex flex-col border rounded-md"
              ref={missionSectionRef}
            >
              <img src={hero} alt="मिशन" className="rounded-md object-cover" />
              <h3 className="text-xl font-semibold text-gray-800 mt-4 ps-2">
                मिशन
              </h3>
              <p className="text-gray-600 p-2">
                हम सभी लड़कियों को स्कूल में दाखिला दिलाने के लिए संसाधनों का
                उपयोग करते हैं।
              </p>
              <button className="mt-4 px-6 py-2 text-red-400 font-bold text-sm self-start">
                और पढ़ें
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutIntro
