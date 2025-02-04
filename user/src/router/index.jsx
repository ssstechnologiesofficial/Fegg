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

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
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
        path: 'privacy-policy',
        element: <Privacy />,
      },
      {
        path: 'terms-conditions',
        element: <TermsConditions />,
      },
      {
        path: 'e-content',
        element: <EcontentOption />,
      },
      {
        path: 'class10',
        element: <Econtent10th />,
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
    ],
  },
])
