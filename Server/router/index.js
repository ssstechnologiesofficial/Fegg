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

const {
  createEbook,
  getAllEbooks,
  getEbooksByClass,
  updateEbook,
  deleteEbook,
} = require('../controller/ebookController')

// Configure Multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'uploads/'),
  filename: (req, file, cb) => cb(null, Date.now() + '-' + file.originalname),
})

const upload = multer({
  storage,
  limits: { fileSize: 1024 * 1024 * 10 }, // 10MB limit
  fileFilter: (req, file, cb) => {
    const allowedTypes = [
      'image/jpeg',
      'image/png',
      'image/webp', // Added WebP support
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
          'Only .jpeg, .png, .webp, .mp4, .pdf, .doc, and .docx files are allowed!'
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
const {
  uploadCarouselImage,
  getAllCarouselImages,
  deleteCarouselImage,
} = require('../controller/carouselController')
const {
  createAnnouncement,
  getAllAnnouncements,
  getAnnouncementById,
  updateAnnouncement,
  deleteAnnouncement,
} = require('../controller/announcementController')

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

// caroussel
router.post('/carousel-img', upload.single('image'), uploadCarouselImage)
router.get('/carousel-img', getAllCarouselImages)
router.delete('/carousel-img/:id', deleteCarouselImage)

// announcement

router.post('/announcements', createAnnouncement)
router.get('/announcements', getAllAnnouncements)
router.get('/announcements/:id', getAnnouncementById)
router.put('/announcements/:id', updateAnnouncement)
router.delete('/announcements/:id', deleteAnnouncement)

// E-material
router.post('/eupload', upload.single('file'), createEbook)
router.get('/ebooks', getAllEbooks)
// router.get('/ebooks/:className', getEbooksByClass)
router.put('/ebooks/:id', updateEbook)
router.delete('/ebooks/:id', deleteEbook)

module.exports = router
