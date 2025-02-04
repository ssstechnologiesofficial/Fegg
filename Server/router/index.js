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

// Route video

const videoController = require('../controller/VideoController')

//route 10th and 12th Model

const {
  storeUserDownload,
  getAllDownloads,
} = require('../controller/Model10and12user')

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
const {
  registerStudent,
  getAllStudents,
  updateStudent,
  deleteStudent,
} = require('../controller/studentController')
const { createMockTest, getMockTests, mockTestDelete, getStartMockTest, getMockTestById } = require('../controller/mocktest/mocktestController')
const { submitMockTest, getResult, getALLResult } = require('../controller/mocktest/resultController')
const { getSubjects, createSubject, updateSubject, deleteSubject } = require('../controller/mocktest/subjectController')
const { getQuestionsBySubject, updateQuestion, deleteQuestion, createQuestion } = require('../controller/mocktest/questionsController')

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

// -------------E-material
router.post('/eupload', upload.single('file'), createEbook)
router.get('/ebooks', getAllEbooks)
router.put('/ebooks/:id', updateEbook)
router.delete('/ebooks/:id', deleteEbook)

//----------all Route uploaded videos

router.get('/getuploadvideo', videoController.getVideos)

router.post('/uploadvideo', videoController.uploadVideo)

router.put('Ovideoupdate/:id', videoController.updateVideo)

router.delete('Ovideodelete/:id', videoController.deleteVideo)

//---------------- User modal 10th and 12th
router.post('/storeUserDownload', storeUserDownload)
router.get('/getAllDownloads', getAllDownloads)

// student register
router.post('/register', registerStudent)
router.get('/register', getAllStudents)
router.put('/register/:id', updateStudent)
router.delete('/register/:id', deleteStudent)

// mock test 
// mocktest
router.post('/mock-test', upload.single('MockLogo'), createMockTest)
router.get('/mock-tests', getMockTests)
router.post('/mock-test/submit', submitMockTest)
router.delete('/mock-tests/:id', mockTestDelete)

router.get('/mock-test/:mockTestId', getStartMockTest)
router.get('/result/:resultId', getResult)
router.get('/result', getALLResult)
router.get('/subjects', getSubjects)
router.post('/subjects', createSubject)
router.put('/subjects/:id', updateSubject)
router.delete('/subjects/:id', deleteSubject)
router.post('/questions', createQuestion)
router.get('/questions', getQuestionsBySubject)
router.put('/questions/:questionId', updateQuestion)
router.delete('/questions/:id', deleteQuestion)
router.get('/mockTests/:id',getMockTestById);
module.exports = router
