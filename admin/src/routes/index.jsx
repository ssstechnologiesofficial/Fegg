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
        ],
      },
    ],
  },
])
