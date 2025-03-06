import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import EventsAnnouncements from './EventAnnouncement'

// import EventsAnnouncements from './EventsAnnouncements'

gsap.registerPlugin(ScrollTrigger)

const ImportantLinks = () => {
  const containerRef = useRef(null)

  useEffect(() => {
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
  }, [])
// src/components/ImportantLinksData.js
 const importantLinks = [
  'ऑनलाइन पुस्तकें',
  'पाठ्यक्रम',
  'रिकॉर्डेड वीडियो',
  'ब्लू प्रिंट',
  'पिछले वर्ष के प्रश्न पत्र',
  'प्रैक्टिस सेट',
  'मॉडल उत्तर पत्रक',
]

  return (
    <div className="bg-gray-100 pt-8 pb-14" ref={containerRef}>
      <div className="container  px-4 sm:px-12">
        {/* दाईं ओर - कार्यक्रम और घोषणाएँ */}
        <EventsAnnouncements />
        {/* बाईं ओर - महत्वपूर्ण लिंक */}
        <div>
          <h2 className="text-lg sm:text-3xl font-bold mb-4 text-primary text-center mt-8">
            महत्वपूर्ण लिंक
          </h2>
          <p className="text-gray-600 mb-6 text-center">
            ओपन स्कूल क्विज़ लें और अपनी ओपन शिक्षा का परीक्षण करें।
          </p>

          <div className="space-y-3">
            {importantLinks.map((link, index) => (
              <div
                key={index}
                className="important-link flex items-center justify-between bg-white p-4 shadow-md border-l-8 border-red-400 transition hover:scale-105 hover:bg-gray-50"
              >
                <span className="font-medium text-gray-800">{link}</span>
                <span className="text-primary text-lg font-bold">→</span>
              </div>
            ))}
          </div>
        </div>

        
      </div>
    </div>
  )
}

export default ImportantLinks
