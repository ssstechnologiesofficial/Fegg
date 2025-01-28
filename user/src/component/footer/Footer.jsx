import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import logo from '../../assets/logo.png'

const Footer = () => {
  const footerRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const footerSections = footerRef.current.querySelectorAll('.footer-section');

    footerSections.forEach((section, index) => {
      gsap.fromTo(
        section,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: index * 0.2,
          scrollTrigger: {
            trigger: section,
            start: 'top 90%',
            end: 'bottom 70%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });
  }, []);

  return (
    <footer
      ref={footerRef}
      className="bg-gray-900 text-white py-8 border-t-4 border-red-500"
    >
      <div className="container mx-auto px-4">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 footer-section">
          {/* Logo and Description */}
          <div className="flex flex-col items-center md:items-start">
            <div className="bg-white w-16 h-16 rounded-full mb-4">
              <img src={logo} alt="" />
            </div>
            <h2 className="text-lg font-semibold">ABC State Open School</h2>
            <p className="text-sm text-gray-400">एबीसी स्टेट ओपन स्कूल</p>
            <p className="text-gray-400 text-sm mt-4">
              The open schooling system was established in XXXX in the state to
              provide flexible education to diverse learners. It evolved from
              the National Open School (NOS), aiming to address.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col items-center md:items-start footer-section">
            <h3 className="text-lg font-semibold text-red-500 mb-4">Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about-us" className="hover:underline">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/programme" className="hover:underline">
                  Programme
                </Link>
              </li>
              <li>
                <Link to="/admission" className="hover:underline">
                  Admission
                </Link>
              </li>
              <li>
                <Link to="/student-corner" className="hover:underline">
                  Student Corner
                </Link>
              </li>
              <li>
                <Link to="/events" className="hover:underline">
                  Events
                </Link>
              </li>
              <li>
                <Link to="/notification" className="hover:underline">
                  Notification
                </Link>
              </li>
              <li>
                <Link to="/contact-us" className="hover:underline">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Address and Email */}
          <div className="flex flex-col items-center md:items-start footer-section">
            <h3 className="text-lg font-semibold text-red-500 mb-4">
              Address
            </h3>
            <p className="text-gray-400 text-sm">
              Head Office Lucknow xxxx, Viram Khand - xx, Gomti Nagar, Near
              Manisha Mandir, Lucknow -XXXXXX, Uttar Pradesh
            </p>
            <p className="text-gray-400 text-sm mt-4">
              <span className="font-semibold">Email us:</span>{' '}
              info@abcopenschool.org
            </p>
            <p className="text-red-500 hover:underline cursor-pointer mt-2">
              Locate Us on Google Maps
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-8 border-t border-gray-700 pt-4 footer-section">
          <p className="text-gray-500 text-sm">
            Copyright © 2024, Open School. All Rights Reserved
          </p>
          <p className="text-gray-500 text-sm">
            Visitors Count: <span className="text-white">54,00,000</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
