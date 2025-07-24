import React from 'react'

import {
  createBrowserRouter,
  RouterProvider,
  ScrollRestoration,
} from 'react-router-dom'
import App from '../App'
import Home from '../component/content/Home'
import About from '../component/content/About'
import Gallery from '../component/content/Gallery'
import ContactUs from '../component/content/ContactUs'
import Register from '../component/content/Register'
import Certificates from '../component/content/Certificates'
import Privacy from '../component/content/Privacy'
import TermsConditions from '../component/content/TermsConditions'
import Research from '../component/content/Research'
import StudentCorner from '../component/content/StudentCorner'
import EcontentOption from '../component/content/EcontentOption'
import Econtent10th from '../component/content/Econtent10th'
import Econtent12th from '../component/content/Econtent12th'
import OlineVideoOption from '../component/content/OlineVideoOption'
import Video10th from '../component/content/Video10th'
import Video12th from '../component/content/Video12th'
import MPSOSInfo from '../component/content/MPSOSInfo'
import PrivacyPolicy from '../component/content/PrivacyPolicy'
import AISECTInfo from '../component/content/AISECYInfo'
import FeesDetails from '../component/content/FeesDetails'
import CourseDetails from '../component/content/CourseDetails'
import PreviousPaperOption from '../component/content/PreviousPaperOption'
import Class10EnglishPapers from '../component/content/PreviousPaperOption/Class10EnglishPapers'
import Class10HindiPapers from '../component/content/PreviousPaperOption/Class10HindiPapers'
import Class12EnglishPapers from '../component/content/PreviousPaperOption/Class12EnglishPapers'
import Class12HindiPapers from '../component/content/PreviousPaperOption/Class12HindiPapers'
import Pragati from '../component/content/Pragati'
import EGteam from '../component/content/EGteam'
// import MissionVision from '../component/content/MissionVision'
import PracticeSet from '../component/content/practiceset/PracticeSet'
import Crad10th from '../component/content/practiceset/Crad10th'
import Crad12th from '../component/content/practiceset/Card12th'
import StartTest from '../component/content/practiceset/StartTest'
import ResultDisplay from '../component/content/practiceset/ResultDisplay'
import FAQComponent from '../component/content/FAQ'
import Vidya from '../component/content/Vidya'
import TenthClass from '../component/content/TenthClass'
import FindLernerID from '../component/content/FindLernerID'
import TwelfthEligibility from '../component/content/TwelfthEligibility'
import MpsosTeam from '../component/content/MpsosTeam'
import Newsletter from '../component/content/Newsletter'
import AnnouncementDetails from '../component/content/AnnouncementDetails'
import ScrollToTop from '../component/linktop/ScrollLinkTop'
import TermsAndConditions from '../component/content/Terms'
import BlueprintsPage from '../component/content/BluePrint'
import Login from '../../../admin/src/pages/Login'
import Sidebarlerner from '../../../admin/src/components/SidebarLerner'
import Dashboard from '../../../admin/src/components/Dashboard'
import ResetPasswordPage from '../../../admin/src/components/ReserPasswordPage'
import ForgotPassword from '../../../admin/src/pages/ForgotPassword'
import EBooks from '../../../admin/src/components/EBooks'
import EventForm from '../../../admin/src/components/EventForm'
import OlineVideoUpload from '../../../admin/src/components/OlineVideoUpload'
import CreatePracticeSet from '../../../admin/src/components/practice/CreatePracticeSet'
import CreateSubjectForm from '../../../admin/src/components/practice/CreateSubject'
import CreateChapterForm from '../../../admin/src/components/practice/CreateChapter'
import QuestionBank from '../../../admin/src/components/practice/QuestionBank'
import MockTestStart from '../../../admin/src/components/mock/MocktestStart'
import Mockresult from '../../../admin/src/components/mock/Mockresult'
import TestResultsTable from '../../../admin/src/components/practice/TestResultTable'
import CreateQuestion from '../../../admin/src/components/mock/CreateQuestions'
import QuestionTable from '../../../admin/src/components/practice/QuestionTable'
import PreviousPaper from '../../../admin/src/components/PreviousPaper'
import PracticeModaldata from '../../../admin/src/components/practice/PracticeModaldata'
import BluePrintupload from '../../../admin/src/components/BluePrintupload'
import AddTestimonials from '../../../admin/src/components/AddTestimonials'
import SessionAdd from '../../../admin/src/components/SessionAdd'
import Sidebarcreater from '../../../admin/src/components/Sidebarcreater'
import HeroImage from '../../../admin/src/components/HeroImage'
import AnnouncementUpload from '../../../admin/src/components/Announcement'
import NewsLetterUpload from '../../../admin/src/components/NewsLetterUpload'
import Sidebar from '../../../admin/src/components/Sidebar'
import UploadUrl from '../../../admin/src/components/UploadUrl'
import StudentList from '../../../admin/src/components/StudentList'
import EContentModel from '../../../admin/src/components/EContentModel'
// import AnnouncementDetails from '../component/content/EventAnnouncementDetails'

export const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <ScrollToTop />
        <App />
      </>
    ),
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'student-corner',
        element: <StudentCorner />,
      },
      {
        path: 'research',
        element: <Research />,
      },
      {
        path: 'gallery',
        element: <Gallery />,
      },
      {
        path: 'blueprint',
        element: <BlueprintsPage />,
      },
      {
        path: 'contactus',
        element: <ContactUs />,
      },
      {
        path: '/register',
        element: <Register />,
      },

      {
        path: 'certificate',
        element: <Certificates />,
      },
      {
        path: 'announcement/:id',
        element: <AnnouncementDetails />,
      },
      {
        path: 'privacy-policy',
        element: <PrivacyPolicy />,
      },
      {
        path: 'terms-conditions',
        element: <TermsConditions />,
      },
      {
        path: 'MPSOSInfo',
        element: <MPSOSInfo />,
      },
      {
        path: 'e-content',
        element: <EcontentOption />,
      },
      {
        path: 'practice-set',
        element: <PracticeSet />,
      },
      {
        path: 'practice10',
        element: <Crad10th />,
      },
      {
        path: 'practice12',
        element: <Crad12th />,
      },
      {
        path: 'class10',
        element: <Econtent10th />,
      },
      {
        path: 'terms',
        element: <TermsAndConditions />,
      },
      {
        path: 'start-test/:mockSetId',
        element: <StartTest />,
      },
      {
        path: 'result/:id',
        element: <ResultDisplay />,
      },
      {
        path: 'class12',
        element: <Econtent12th />,
      },
      {
        path: 'onlinevideo',
        element: <OlineVideoOption />,
      },
      {
        path: 'class10video',
        element: <Video10th />,
      },
      {
        path: 'class12video',
        element: <Video12th />,
      },
      {
        path: 'AISECTInfo',
        element: <AISECTInfo />,
      },
      {
        path: 'mpsosTesm',
        element: <MpsosTeam />,
      },
      {
        path: 'FeesDetails',
        element: <FeesDetails />,
      },
      {
        path: 'CourseDetails',
        element: <CourseDetails />,
      },
      {
        path: 'PreviousPaperOption',
        element: <PreviousPaperOption />,
      },
      {
        path: 'Class10EnglishPapers',
        element: <Class10EnglishPapers />,
      },
      {
        path: 'Class10HindiPapers',
        element: <Class10HindiPapers />,
      },
      {
        path: 'Class12EnglishPapers',
        element: <Class12EnglishPapers />,
      },
      {
        path: 'Class12HindiPapers',
        element: <Class12HindiPapers />,
      },
      {
        path: 'Pragati',
        element: <Pragati />,
      },
      {
        path: 'EGteam',
        element: <EGteam />,
      },
      // {
      //   path: 'MissionVision',
      //   element: <MissionVision />,
      // },
      {
        path: 'faq',
        element: <FAQComponent />,
      },
      {
        path: 'vidya',
        element: <Vidya />,
      },
      {
        path: '10th-class',
        element: <TenthClass />,
      },
      {
        path: '12th-class',
        element: <TwelfthEligibility />,
      },
      {
        path: 'FindLernerID',
        element: <FindLernerID />,
      },
      {
        path: 'Newsletter',
        element: <Newsletter />,
      },
    ],
  },
  {
    path:'/admin',
    children: [
      {
        path: '',
        element: <Login />,
      },
      {
        path: 'forgotpassword',
        element: <ForgotPassword />,
      },
      // {
      //   path: 'Registration',
      //   element: <Registration />,
      // },
      {
        path: 'ResetPasswordPage/:token',
        element: <ResetPasswordPage />,
      },
      {
        path: 'dashboard2',
        element: <Sidebarlerner />,
        children: [
          {
            path: 'dashboardCards',
            element: <Dashboard />,
          },
          {
            path: 'EBooks',
            element: <EBooks />,
          },
          {
            path: 'event',
            element: <EventForm />,
          },
          

      
          
          {
            path: 'OlineVideoUpload',
            element: <OlineVideoUpload />,
          },
         
          {
            path: 'create-test',
            element: <CreatePracticeSet />,
          },
          

          {
            path: 'create-subject',
            element: <CreateSubjectForm />,
          },
          {
            path: 'create-chapter',
            element: <CreateChapterForm />,
          },
          {
            path: 'create-question',
            element: <QuestionBank />,
          },
          {
            path: 'start/:mockTestId',
            element: <MockTestStart />,
          },
          {
            path: 'result/:resultId',
            element: <Mockresult />,
          },
          {
            path: 'MockSidebarResult',
            element: <TestResultsTable />,
          },
          {
            path: 'create-questions',
            element: <CreateQuestion />,
          },
          {
            path: 'questions-manage',
            element: <QuestionTable />,
          },
          {
            path: 'PreviousPaper',
            element: <PreviousPaper />,
          },
          {
            path: 'PracticeModaldata',
            element: <PracticeModaldata />,
          },
          {
            path: 'BluePrintupload',
            element: <BluePrintupload />,
          },
          {
            path: 'testimonial',
            element: <AddTestimonials />,
          },
          
          {
            path: 'SessionAdd',
            element: <SessionAdd />,
          },
        ],
      },

      //==================================== creater
      {
        path: 'dashboard3',
        element: <Sidebarcreater />,
        children: [
          {
            path: 'dashboardCards',
            element: <Dashboard />,
          },
          {
            path: 'hero-img',
            element: <HeroImage />,
          },
          {
            path: 'announcement',
            element: <AnnouncementUpload />,
          },
          {
            path: 'NewsLetterUpload',
            element: <NewsLetterUpload />,
          },
        ],
      },
      {
        path: 'dashboard',
        element: <Sidebar />,
        children: [
          {
            path: 'dashboardCards',
            element: <Dashboard />,
          },
          {
            path: 'EBooks',
            element: <EBooks />,
          },
          {
            path: 'resultAdmitcardUrl',
            element: <UploadUrl />,
          },
          {
            path: 'event',
            element: <EventForm />,
          },

          {
            path: 'hero-img',
            element: <HeroImage />,
          },
          {
            path: 'announcement',
            element: <AnnouncementUpload />,
          },
          {
            path: 'students',
            element: <StudentList />,
          },
          {
            path: 'OlineVideoUpload',
            element: <OlineVideoUpload />,
          },
          {
            path: 'EContentModel',
            element: <EContentModel />,
          },
          {
            path: 'create-test',
            element: <CreatePracticeSet />,
          },

          {
            path: 'create-subject',
            element: <CreateSubjectForm />,
          },
          {
            path: 'create-chapter',
            element: <CreateChapterForm />,
          },
          {
            path: 'create-question',
            element: <QuestionBank />,
          },
          {
            path: 'start/:mockTestId',
            element: <MockTestStart />,
          },
          {
            path: 'result/:resultId',
            element: <Mockresult />,
          },
          {
            path: 'MockSidebarResult',
            element: <TestResultsTable />,
          },
          {
            path: 'create-questions',
            element: <CreateQuestion />,
          },
          {
            path: 'questions-manage',
            element: <QuestionTable />,
          },
          {
            path: 'PreviousPaper',
            element: <PreviousPaper />,
          },
          {
            path: 'PracticeModaldata',
            element: <PracticeModaldata />,
          },
          {
            path: 'BluePrintupload',
            element: <BluePrintupload />,
          },
          {
            path: 'testimonial',
            element: <AddTestimonials />,
          },
          {
            path: 'NewsLetterUpload',
            element: <NewsLetterUpload />,
          },
          {
            path: 'SessionAdd',
            element: <SessionAdd />,
          },
        ],
      },
    ],
  },
 
  
 
])
