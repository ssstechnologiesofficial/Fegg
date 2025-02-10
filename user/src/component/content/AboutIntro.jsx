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
    // Hero image animation
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

    // Text section animation
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

    // History section animation
    gsap.fromTo(
      historySectionRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: historySectionRef.current,
          start: 'top 80%',
          end: 'top 20%',
          toggleActions: 'play none none none',
        },
      }
    )

    // Vision section animation
    gsap.fromTo(
      visionSectionRef.current,
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: visionSectionRef.current,
          start: 'top 80%',
          end: 'top 20%',
          toggleActions: 'play none none none',
        },
      }
    )

    // Mission section animation
    gsap.fromTo(
      missionSectionRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: missionSectionRef.current,
          start: 'top 80%',
          end: 'top 20%',
          toggleActions: 'play none none none',
        },
      }
    )

    // Ordinance/Act section animation
    gsap.fromTo(
      ordinanceSectionRef.current,
      { opacity: 0, x: 50 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: ordinanceSectionRef.current,
          start: 'top 80%',
          end: 'top 20%',
          toggleActions: 'play none none none',
        },
      }
    )
  }, [])

  return (
    <div className="bg-gray-50 relative">
      <img src={hero} alt="History" className="object-cover w-full" />
      <div className="bg-white mx-6 relative -mt-16 rounded-lg shadow-lg mb-8">
        <div className="container px-4 md:px-8 lg:px-16 py-12">
          {/* Breadcrumb */}
          <div className="text-sm text-gray-600 mb-6">
            <a href="/" className="hover:text-red-400">
              Home
            </a>{' '}
            &gt; About us
          </div>

          {/* Heading Section */}
          <h1
            className="text-center text-2xl md:text-3xl font-bold text-red-400 mb-8"
            ref={textSectionRef}
          >
            ABOUT US
          </h1>

          <div className="mb-12" ref={textSectionRef}>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Foundation to Open School Globally
            </h2>
            <p className="text-gray-600">
              Educate Girls is a non-profit organization that focuses on raising
              awareness and empowering communities for the education of girls
              from rural and educationally disadvantaged backgrounds in India.
              Strongly aligned with the 'Right to Education Act' and the
              'Samagra Shiksha Abhiyan,' Educate Girls actively supports the
              government's objective of increasing access to quality primary
              education for children, with a special emphasis on girls. Since
              2007, in partnership with state governments, Educate Girls has
              motivated over 1.8 million girls to enroll in schools across more
              than 29,000 villages in Rajasthan, Madhya Pradesh, Uttar Pradesh,
              and Bihar.
            </p>
            <button className="mt-4 px-6 py-2 bg-red-400 text-white text-sm rounded-3xl hover:bg-red-600">
              READ MORE
            </button>
          </div>

          {/* History Section */}
          <div
            className="flex bg-gray-50 shadow-lg mb-12"
            ref={historySectionRef}
          >
            <img
              src={hero}
              alt="History"
              className="w-1/3 rounded-md object-cover"
            />
            <div className="w-2/3 pl-6">
              <h3 className="text-xl font-semibold text-gray-800 p-6 mb-4">
                History
              </h3>
              <p className="text-gray-600">
                Since 2007, in partnership with state governments, Educate Girls
                has motivated over 1.8 million girls to enroll in schools across
                more than 29,000 villages in Rajasthan, Madhya Pradesh, Uttar
                Pradesh, and Bihar.
              </p>
              <button className="mt-4 px-6 py-2 text-red-400 font-bold text-sm">
                READ MORE
              </button>
            </div>
          </div>

          {/* Vision and Mission Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8" id="vm">
            {/* Vision */}
            <div
              className="flex flex-col border rounded-md"
              ref={visionSectionRef}
            >
              <img
                src={hero}
                alt="Vision"
                className="rounded-md object-cover"
              />
              <h3 className="text-xl font-semibold text-gray-800 mt-4 ps-2">
                Vision
              </h3>
              <p className="text-gray-600 p-2">
                Educate Girls aims to bring practical, social, and economic
                change for all girls, striving to build an India where all
                children have equal opportunities to receive quality education.
              </p>
              <button className="mt-4 px-6 py-2 text-red-400 font-bold text-sm self-start">
                READ MORE
              </button>
            </div>

            {/* Mission */}
            <div
              className="flex flex-col border rounded-md"
              ref={missionSectionRef}
            >
              <img
                src={hero}
                alt="Mission"
                className="rounded-md object-cover"
              />
              <h3 className="text-xl font-semibold text-gray-800 mt-4 ps-2">
                Mission
              </h3>
              <p className="text-gray-600 p-2">
                Educate Girls leverages existing community and government
                resources to ensure that all girls are enrolled in school and
                receive quality education.
              </p>
              <button className="mt-4 px-6 py-2 text-red-400 font-bold text-sm self-start">
                READ MORE
              </button>
            </div>
          </div>

          {/* ORDINANCE/ACT */}
          <div
            className="flex bg-gray-50 rounded-md shadow-lg p-3 my-12"
            ref={ordinanceSectionRef}
          >
            {/* <img
              src={hero}
              alt="History"
              className="w-1/3 rounded-md object-cover"
            /> */}

            {/* More Features Section */}
            <div>
              <h2 className="text-lg font-semibold text-red-400 mb-6">
                MORE FEATURES
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Objective */}
                <div>
                  <h3 className="text-md font-semibold text-gray-800 mb-2 flex items-center border-t-2 border-red-400">
                    OBJECTIVE <span className="ml-2 text-red-400">→</span>
                  </h3>
                  <p className="text-gray-600">
                    Educate Girls aims to impact 10 million learners by 2035.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutIntro
