import React, { useState, useEffect } from 'react'
import axios from 'axios'
import SummaryApi from '../common/SummaryAPI'

const baseUrl = import.meta.env.VITE_BACKEND_URL

const NewsLetterUpload = () => {
  const [gallery, setGallery] = useState([])
  const [file, setFile] = useState(null)
  const [preview, setPreview] = useState(null)
  const [discription, setDiscription] = useState('')

  const [isEditing, setIsEditing] = useState(false)
  const [editId, setEditId] = useState(null)

  useEffect(() => {
    fetchGallery()
  }, [])

  // Fetch all newsletters
  const fetchGallery = async () => {
    try {
      const { data } = await axios.get(SummaryApi.getNewsLetterImages.url)
      setGallery(data)
    } catch (error) {
      console.error('Error fetching gallery', error)
    }
  }

  // Upload or update
  const handleUpload = async (e) => {
    e.preventDefault()
    if (!file && !isEditing) return alert('Please select an image')
    if (!discription.trim()) return alert('Please enter a description')

    const formData = new FormData()
    if (file) formData.append('image', file)
    formData.append('discription', discription)

    try {
      if (isEditing) {
        await axios.put(`${SummaryApi.updateNewsLetter.url}/${editId}`, formData)

        setIsEditing(false)
        setEditId(null)
      } else {
        await axios.post(SummaryApi.NewsLuploads.url, formData)
      }

      setFile(null)
      setPreview(null)
      setDiscription('')
      fetchGallery()
    } catch (error) {
      console.error('Error uploading/updating image', error)
    }
  }

  // Delete newsletter
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      'Are you sure you want to delete this newsletter?'
    )
    if (!confirmDelete) return

    try {
      await axios.delete(`${SummaryApi.NLuploadsdelete.url}/${id}`)
      fetchGallery()
    } catch (error) {
      console.error('Error deleting image', error)
    }
  }

  // Prepare for editing
  const handleEdit = (newsletter) => {
    setIsEditing(true)
    setEditId(newsletter._id)
    setDiscription(newsletter.discription)
    setPreview(`${baseUrl}/${newsletter.image.replace(/\\/g, '/')}`)
  }

  return (
    <div className="container mx-auto bg-white p-4">
      <h1 className="text-2xl sm:text-4xl font-semibold py-3">
        News Letter Upload
      </h1>

      {/* Form */}
      <form
        onSubmit={handleUpload}
        className="bg-white shadow-md flex flex-col items-center gap-3 border border-[#fd645b] rounded-xl border-r-4 border-b-4 p-5"
      >
        <input
          type="file"
          className="border p-2 rounded-md"
          onChange={(e) => {
            setFile(e.target.files[0])
            setPreview(URL.createObjectURL(e.target.files[0]))
          }}
        />
        {preview && (
          <img
            src={preview}
            alt="Preview"
            className="w-40 h-40 object-cover rounded-md"
          />
        )}
        <input
          type="text"
          placeholder="Enter description"
          className="border p-2 rounded-md w-full"
          value={discription}
          onChange={(e) => setDiscription(e.target.value)}
        />
        <button
          type="submit"
          className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-700"
        >
          {isEditing ? 'Update' : 'Upload'}
        </button>
      </form>

      {/* Gallery Table */}
      <div className="overflow-x-auto mt-5">
        <table className="min-w-full bg-white shadow-md rounded-md overflow-hidden">
          <thead>
            <tr className="bg-red-500 text-white">
              <th className="py-2 px-4">Image</th>
              <th className="py-2 px-4">Title</th>
              <th className="py-2 px-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {gallery.map((file) => (
              <tr key={file._id} className="border-b">
                <td className="py-2 px-4 flex justify-center">
                  <img
                    src={`${baseUrl}/${file.image.replace(/\\/g, '/')}`}
                    alt="Gallery"
                    className="w-20 h-20 object-cover rounded-md"
                  />
                </td>
                <td className="py-2 px-4 text-center">{file.discription}</td>
                <td className="py-2 px-4 text-center">
                  <button
                    onClick={() => handleEdit(file)}
                    className="bg-yellow-500 text-white px-3 py-1 rounded-md hover:bg-yellow-600 mr-2"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(file._id)}
                    className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-700"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default NewsLetterUpload
