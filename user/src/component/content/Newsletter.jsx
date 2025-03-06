import React, { useState, useEffect } from 'react'
import axios from 'axios'
import SummaryApi from '../../common/SummaryApi'
const baseUrl = import.meta.env.VITE_BACKEND_URL

const Newsletter = () => {
  const [gallery, setGallery] = useState([]) // State to store images
  const [file, setFile] = useState(null)

  useEffect(() => {
    // Fetch images from backend using Axios
    const fetchImages = async () => {
      try {
        const response = await axios.get(SummaryApi.getNewsLetterImages.url) // Adjust URL as needed
        setGallery(response.data)
        console.log(response.data) // Check the fetched data
      } catch (error) {
        console.error('Error fetching images:', error)
      }
    }

    fetchImages()
  }, [])

  return (
    <div className="galleryContainer">
      <h1 className="text-2xl sm:text-5xl font-semibold text-white text-center my-5 border-[#fd645b] border-x-4 bg-[#00043c] pt-1 py-1 w-full">
        News Letter
      </h1>

      <div className="media-container mt-2">
        {gallery.map((item) => (
          <div className="media" key={item._id} onClick={() => setFile(item)}>
            <img
              src={`${baseUrl}/${item.image.replace(/\\/g, '/')}`}
              alt={`Gallery Image ${item._id}`}
              className="media-image"
            />
          </div>
        ))}
      </div>

      {file && (
        <div className="popup-media">
          <span onClick={() => setFile(null)}>&times;</span>
          <img src={file.image} alt={`Gallery Image ${file._id}`} />
        </div>
      )}
    </div>
  )
}

export default Newsletter
