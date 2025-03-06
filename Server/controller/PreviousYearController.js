const PreviousPaperModel = require('../model/PreviousYearModel')

// Create a new Previous Year Paper entry
const createPreviousPaper = async (req, res) => {
  console.log(req.body)
  try {
    const { year, className, subject, language, session } = req.body
    const file = req.files?.file?.[0]?.path // Handle multiple files
    const answerKey = req.files?.answerKey?.[0]?.path || '' // Optional

    if (!file) {
      return res.status(400).json({ message: 'Paper file is required' })
    }

    const previousPaper = new PreviousPaperModel({
      year,
      className,
      subject,
      language,
      session,
      file,
      answerKey,
    })

    await previousPaper.save()
    res.status(201).json({
      message: 'Previous year paper uploaded successfully',
      previousPaper,
    })
  } catch (error) {
    res.status(500).json({ message: 'Error uploading paper', error })
  }
}

// Get all Previous Year Papers with optional filters
// const getAllPreviousPaper = async (req, res) => {
//   try {
//     const { className, language, session } = req.query
//     const query = {}
//     if (className) query.className = className
//     if (language) query.language = language
//     if (session) query.session = session

//     const previousPapers = await PreviousPaperModel.find(query)
//     res.status(200).json(previousPapers)
//   } catch (error) {
//     res.status(500).json({ message: 'Error fetching previous papers', error })
//   }
// }

const getAllPreviousPaper = async (req, res) => {
  try {
    const { className } = req.query
    const query = className ? { className } : {}
    const prev = await PreviousPaperModel.find(query)
    res.status(200).json(prev)
  } catch (error) {
    res.status(500).json({ message: 'Error fetching ebooks', error })
  }
}

// Get Previous Year Papers by class
const getPreviousPaperByClass = async (req, res) => {
  try {
    const { className } = req.params
    const papers = await PreviousPaperModel.find({ className })
    res.status(200).json(papers)
  } catch (error) {
    res.status(500).json({ message: 'Error fetching papers by class', error })
  }
}

// Update a Previous Year Paper
const updatePreviousPaper = async (req, res) => {
  try {
    const { id } = req.params
    const { year, className, subject, language, session } = req.body
    const file = req.files?.file?.[0]?.path
    const answerKey = req.files?.answerKey?.[0]?.path

    const updateFields = { year, className, subject, language, session }
    if (file) updateFields.file = file
    if (answerKey) updateFields.answerKey = answerKey

    const updatedPaper = await PreviousPaperModel.findByIdAndUpdate(
      id,
      updateFields,
      { new: true }
    )

    if (!updatedPaper) {
      return res.status(404).json({ message: 'Paper not found' })
    }

    res
      .status(200)
      .json({ message: 'Paper updated successfully', updatedPaper })
  } catch (error) {
    res.status(500).json({ message: 'Error updating paper', error })
  }
}

// Delete a Previous Year Paper
const deletePreviousPaper = async (req, res) => {
  try {
    const { id } = req.params
    const paper = await PreviousPaperModel.findByIdAndDelete(id)

    if (!paper) {
      return res.status(404).json({ message: 'Paper not found' })
    }

    res.status(200).json({ message: 'Paper deleted successfully' })
  } catch (error) {
    res.status(500).json({ message: 'Error deleting paper', error })
  }
}

module.exports = {
  createPreviousPaper,
  getAllPreviousPaper,
  getPreviousPaperByClass,
  updatePreviousPaper,
  deletePreviousPaper,
}
