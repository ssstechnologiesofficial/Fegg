import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import Login from '../pages/Login'
import Dashboard from '../components/Dashboard'
import CourseForm from '../components/CourseForm'
import Sidebar from '../components/Sidebar'
import EventForm from '../components/EventForm'
import ForgotPassword from '../pages/ForgotPassword'
import EBooks from '../components/EBooks'
import HeroImage from '../components/HeroImage'
import AnnouncementUpload from '../components/Announcement'
import StudentList from '../components/StudentList'
import OlineVideoUpload from '../components/OlineVideoUpload'
import EContentModel from '../components/EContentModel'
import CreateMockTest from '../components/mock/CreateMocktest'
import CreateSubject from '../components/mock/CreateSubject'
import MockTestStart from '../components/mock/MocktestStart'
import Mockresult from '../components/mock/Mockresult'
import MockSidebarResult from '../components/mock/MockSidebarResult'
import CreateQuestion from '../components/mock/CreateQuestions'
import QuestionManagement from '../components/mock/QuestionsManage'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <Login />,
      },
      {
        path: 'forgotpassword',
        element: <ForgotPassword />,
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
            element: <CreateMockTest />,
          },
          {
            path: 'questions-manage',
            element: <QuestionManagement />,
          },
          {
            path: 'create-subject',
            element: <CreateSubject />,
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
            element: <MockSidebarResult />,
          },
          {
            path: 'create-questions',
            element: <CreateQuestion />,
          },
        ],
      },
    ],
  },
])
