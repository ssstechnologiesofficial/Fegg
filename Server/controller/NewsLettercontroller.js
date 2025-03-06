const NewsLetter = require('../model/NewsLetterModal')

const uploadNewsLetter = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: 'Image file is required' })
    }

    // Fix the image path to use forward slashes
    const imagePath = req.file.path.replace(/\\/g, '/')

    const newCarousel = new NewsLetter({
      image: imagePath,
    })

    await newCarousel.save()
    res.status(201).json({
      message: 'Carousel image uploaded successfully',
      carousel: newCarousel,
    })
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error', error })
  }
}

const getNewsLetterImages = async (req, res) => {
  try {
    const images = await NewsLetter.find()
    res.json(images)
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch images' })
  }
}

// Delete a newsletter image

const deleteNewsLetterImage = async (req, res) => {
  try {
    const { id } = req.params
    const deletedImage = await NewsLetter.findByIdAndDelete(id)
    if (!deletedImage) {
      return res.status(404).json({ message: 'Image not found' })
    }
    res.status(200).json({ message: 'Image deleted successfully' })
  } catch (error) {
    res.status(500).json({ message: 'Error deleting image', error })
  }
}
module.exports = {
  uploadNewsLetter,
  getNewsLetterImages,
  deleteNewsLetterImage,
}
