const Ebook = require('../model/ebookSchema')

// Create a new Ebook entry
const createEbook = async (req, res) => {
  console.log(req.body)
  try {
    const { sessionYear, className, subject, language, Volume } = req.body
    const file = req.file.path
    const ebook = new Ebook({
      sessionYear,
      className,
      subject,
      Volume,
      language,
      file: file,
    })
    await ebook.save()
    res.status(201).json({ message: 'Ebook uploaded successfully', ebook })
  } catch (error) {
    res.status(500).json({ message: 'Error uploading ebook', error })
  }
}

// Get all eBooks
const getAllEbooks = async (req, res) => {
  try {
    const { className } = req.query
    const query = className ? { className } : {}
    const ebooks = await Ebook.find(query)
    res.status(200).json(ebooks)
  } catch (error) {
    res.status(500).json({ message: 'Error fetching ebooks', error })
  }
}

// Get eBooks by class
const getEbooksByClass = async (req, res) => {
  try {
    const { className } = req.params
    const ebooks = await Ebook.find({ className })
    res.status(200).json(ebooks)
  } catch (error) {
    res.status(500).json({ message: 'Error fetching ebooks by class', error })
  }
}

// Update an Ebook
const updateEbook = async (req, res) => {
  try {
    const { id } = req.params
    const { sessionYear, className, subject, language, file, Volume } = req.body
    const ebook = await Ebook.findByIdAndUpdate(
      id,
      { sessionYear, className, subject, language, Volume, file },
      { new: true }
    )
    if (!ebook) {
      return res.status(404).json({ message: 'Ebook not found' })
    }
    res.status(200).json({ message: 'Ebook updated successfully', ebook })
  } catch (error) {
    res.status(500).json({ message: 'Error updating ebook', error })
  }
}

// Delete an Ebook
const deleteEbook = async (req, res) => {
  try {
    const { id } = req.params
    const ebook = await Ebook.findByIdAndDelete(id)
    if (!ebook) {
      return res.status(404).json({ message: 'Ebook not found' })
    }
    res.status(200).json({ message: 'Ebook deleted successfully' })
  } catch (error) {
    res.status(500).json({ message: 'Error deleting ebook', error })
  }
}

module.exports = {
  createEbook,
  getAllEbooks,
  getEbooksByClass,
  updateEbook,
  deleteEbook,
}
