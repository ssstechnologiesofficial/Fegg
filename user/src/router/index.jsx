import React from "react"
import { createBrowserRouter, RouterProvider,ScrollRestoration } from "react-router-dom";
import App from "../App";
import Home from "../component/content/Home";
import About from "../component/content/About";
import Gallery from "../component/content/Gallery";
import ContactUs from "../component/content/ContactUs";
import Donate from "../component/content/Donate";
import Register from "../component/content/Register";
import Certificates from "../component/content/Certificates";
import Privacy from "../component/content/Privacy";
import TermsConditions from "../component/content/TermsConditions";
import Research from "../component/content/Research";
import StudentCorner from "../component/content/StudentCorner";

export const router = createBrowserRouter([
    
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: "",
                element: <Home/>
            },
            {
                path: "about",
                element: <About/>
            },
            {
                path: "student-corner",
                element: <StudentCorner/>
            },
            {
                path: "research",
                element: <Research/>
            },
            {
                path: "gallery",
                element: <Gallery/>
            },
            {
                path: "contactus",
                element: <ContactUs/>
            },
            {
                path:"/register",
                element: <Register/>
            },
            {
                path: "donate",
                element: <Donate/>
            },
            {
                path: "certificate",
                element: <Certificates/>
            },
            {
                path: "privacy-policy",
                element: <Privacy/>
            },
            {
                path: "terms-conditions",
                element: <TermsConditions/>
            },
        ]
    }
])