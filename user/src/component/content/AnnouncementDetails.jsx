import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const baseUrl = import.meta.env.VITE_BACKEND_URL

const AnnouncementDetails = () => {
  const { id } = useParams()
  const [announcement, setAnnouncement] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const fetchAnnouncement = async () => {
      try {
        const response = await axios.get(`${baseUrl}/api/announcements/${id}`)
        setAnnouncement(response.data)
      } catch (error) {
        setError('घोषणा लोड करने में असफल।')
      } finally {
        setLoading(false)
      }
    }

    fetchAnnouncement()
  }, [id])

  if (loading) return <p>लोड हो रहा है...</p>
  if (error) return <p className="text-red-500">{error}</p>
  if (!announcement) return <p>घोषणा उपलब्ध नहीं है।</p>

  return (
    <div className="">
      <div className="relative">
        {announcement.image && (
          <div
            className="w-full h-64 rounded-md mb-4"
            style={{
              width: '100%',
              height: '560px',
              backgroundImage: `url(${baseUrl}/uploads/${announcement.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
        )}
      </div>

      <div className="p-5 sm:mx-12 mx-4 relative -mt-14 rounded-lg shadow-lg mb-8 z-10 bg-white text-center">
        <h2 className="text-2xl font-bold text-primary mb-4">
          {announcement.title}
        </h2>

        <p className="text-gray-600">{announcement.description}</p>

        {announcement.pdf && (
          <a
            href={`${baseUrl}/uploads/${announcement.pdf}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block text-blue-500 underline"
          >
            PDF देखें
          </a>
        )}
      </div>
    </div>
  )
}

export default AnnouncementDetails
