const express = require('express')
const multer = require('multer')
const {
  submitJobApplication,
  getJobApplications,
} = require('../controller/jobApplication')
const path = require('path')

const {
  submitContactForm,
  getContactFormInfo,
  deleteContactForm,
  updateContactForm,
} = require('../controller/ContectFormController')

const router = express.Router()

// Configure Multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'uploads/'),
  filename: (req, file, cb) => cb(null, Date.now() + '-' + file.originalname),
})

const upload = multer({
  storage,
  limits: { fileSize: 1024 * 1024 * 10 },
  fileFilter: (req, file, cb) => {
    const allowedTypes = [
      'image/jpeg',
      'image/png',
      'video/mp4',
      'application/pdf',
      'application/msword',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    ]
    if (allowedTypes.includes(file.mimetype)) {
      cb(null, true)
    } else {
      cb(
        new Error(
          'Only .jpeg, .png, .mp4, .pdf, .doc, and .docx files are allowed!'
        ),
        false
      )
    }
  },
})

// POST route for submitting job applications
router.post('/applications', upload.single('resumeFile'), submitJobApplication)
router.get('/getjobapplications', getJobApplications)

// Job
const {
  getJobs,
  addJob,
  updateJob,
  deleteJob,
} = require('../controller/JobController')
const {
  createPortfolio,
  getAllPortfolios,
  deletePortfolio,
  getAllPortfoliosDetails,
  updateAllPortfoliosDetails,
} = require('../controller/portfolioController')

// Contact us
router.post('/contact', submitContactForm)
router.get('/get-contact', getContactFormInfo)
router.delete('/delete-contact/:id', deleteContactForm)
router.put('/update-contact/:id', updateContactForm)

// Portfolio
router.post('/portfolio', upload.array('media', 10), createPortfolio)
router.get('/portfolio', getAllPortfolios)
router.get('/portfolio/:id', getAllPortfoliosDetails)
router.delete('/portfolio/:id', deletePortfolio)
router.put('/portfolio/:id', updateAllPortfoliosDetails)

// Jobs
router.get('/getJobs', getJobs)
router.post('/addJob', addJob)
router.put('/updateJob/:id', updateJob)
router.delete('/deleteJob/:id', deleteJob)

module.exports = router
