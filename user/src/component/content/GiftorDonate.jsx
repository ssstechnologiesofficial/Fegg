import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SummaryApi from '../../common/SummaryApi'

gsap.registerPlugin(ScrollTrigger)

const ImportantLinks = () => {
  const containerRef = useRef(null)
  const [announcements, setAnnouncements] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  const links = [
    'ऑनलाइन पुस्तकें',
    'पाठ्यक्रम',
    'रिकॉर्डेड वीडियो',
    'ब्लू प्रिंट',
    'पिछले वर्ष के प्रश्न पत्र',
    'प्रैक्टिस सेट',
    'मॉडल उत्तर पत्रक',
  ]

  useEffect(() => {
    // घोषणाएँ API से प्राप्त करें
    const fetchAnnouncements = async () => {
      try {
        const response = await axios.get(SummaryApi.getAnnouncements.url)
        setAnnouncements(response.data)
      } catch (error) {
        setError('घोषणाएँ लोड करने में असफल।')
      } finally {
        setLoading(false)
      }
    }

    fetchAnnouncements()

    // GSAP एनिमेशन
    const container = containerRef.current
    gsap.fromTo(
      container.querySelectorAll('.important-link'),
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: container.querySelector('.important-link'),
          start: 'top 80%',
        },
      }
    )

    gsap.fromTo(
      container.querySelectorAll('.announcement-card'),
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: container.querySelector('.announcement-card'),
          start: 'top 80%',
        },
      }
    )
  }, [])

  return (
    <div className="bg-gray-100 py-14 px-4" ref={containerRef}>
      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-8 md:px-16">
        {/* बाईं ओर - महत्वपूर्ण लिंक */}
        <div>
          <h2 className="text-xl font-bold mb-4 border-b-2 border-black">
            महत्वपूर्ण लिंक
          </h2>
          <p className="text-gray-600 mb-6">
            ओपन स्कूल क्विज़ लें और अपनी ओपन शिक्षा का परीक्षण करें।
          </p>
        </div>

        {/* दाईं ओर - कार्यक्रम और घोषणाएँ */}
        <div>
          <h2 className="text-xl font-bold mb-4 border-b-2 border-black">
            कार्यक्रम और घोषणाएँ
          </h2>
        </div>
      </div>

      {/* लिंक और घोषणाएँ */}
      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-8 md:px-16">
        {/* महत्वपूर्ण लिंक */}
        <div className="space-y-3">
          {links.map((link, index) => (
            <div
              key={index}
              className="important-link flex items-center justify-between bg-white p-4 shadow-md border-l-8 border-red-400 transition hover:scale-105 hover:bg-gray-50"
            >
              <span className="font-medium text-gray-800">{link}</span>
              <span className="text-primary text-lg font-bold">→</span>
            </div>
          ))}
        </div>

        {/* घोषणाएँ */}
        <div className="space-y-4">
          {loading ? (
            <p>घोषणाएँ लोड हो रही हैं...</p>
          ) : error ? (
            <p className="text-primary">{error}</p>
          ) : announcements.length === 0 ? (
            <p>कोई घोषणा उपलब्ध नहीं है।</p>
          ) : (
            announcements.map((announcement, index) => (
              <div
                key={index}
                className="announcement-card relative bg-white p-4 shadow-md flex flex-col h-40 transition hover:scale-105 hover:bg-gray-50"
              >
                {/* तारीख बॉक्स */}
                <div className="absolute top-0 left-0 bg-[#FD645B] text-white text-center w-16 h-16 flex flex-col justify-center font-bold">
                  {(() => {
                    const dateObj = new Date(announcement.date)
                    const day = dateObj.getDate()
                    const month = dateObj.toLocaleString('hi-IN', {
                      month: 'long',
                    })
                    return (
                      <>
                        <span className="text-lg">{day}</span>
                        <span className="text-sm">{month}</span>
                      </>
                    )
                  })()}
                </div>

                {/* घोषणा विवरण और छवि */}
                <div className="flex flex-row items-center gap-4 h-full ml-20">
                  {/* घोषणा विवरण */}
                  <div className="flex-1 justify-between h-full">
                    <h3 className="text-gray-800 font-semibold">
                      {announcement.title}
                    </h3>
                    <p className="text-gray-600 text-sm mt-2 line-clamp-2">
                      {announcement.description}
                    </p>
                    {announcement.pdf && (
                      <a
                        href={`http://localhost:8006/uploads/${announcement.pdf}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block mt-2 text-red-500 px-3 py-1 text-sm rounded-md"
                      >
                        अधिक जानें
                      </a>
                    )}
                  </div>

                  {/* घोषणा छवि */}
                  {announcement.image && (
                    <img
                      src={`http://localhost:8006/uploads/${announcement.image}`}
                      alt="घोषणा"
                      className="w-40 h-full object-cover rounded-lg"
                    />
                  )}
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  )
}

export default ImportantLinks
