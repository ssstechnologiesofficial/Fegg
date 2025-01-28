import React, { useEffect, useRef } from "react";
import { FaYoutube, FaFacebook, FaTwitter } from "react-icons/fa";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import hero from "../../assets/hero.webp";

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  const heroImageRef = useRef(null);
  const textSectionRef = useRef(null);
  const socialIconsRef = useRef([]);

  useEffect(() => {
    // Left section animation
    gsap.fromTo(
      heroImageRef.current,
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: heroImageRef.current,
          start: "top 80%", // Animation starts when 80% of the section is visible
          end: "top 20%",
          toggleActions: "play none none none",
        },
      }
    );

    // Right section animation
    gsap.fromTo(
      textSectionRef.current,
      { opacity: 0, x: 50 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: textSectionRef.current,
          start: "top 80%",
          end: "top 20%",
          toggleActions: "play none none none",
        },
      }
    );

    // Social icons animation
    gsap.fromTo(
      socialIconsRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: socialIconsRef.current[0], // Trigger based on the first social icon
          start: "top 90%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return (
    <>
      <div className="bg-gray-800 text-white py-2 text-center text-sm md:text-base">
        <div className="flex justify-between">
          <div className="text-lg md:text-2xl font-bold">
            Admission Open (2024-2025)
          </div>
          <span>|</span>
          <div className="text-lg md:text-2xl font-bold">
            Admission Open (2024-2025)
          </div>
          <span>|</span>
          <div className="text-lg md:text-2xl font-bold">
            Admission Open (2024-2025)
          </div>
          <span>|</span>
          <div className="text-lg md:text-2xl font-bold">
            Admission Open (2024-2025)
          </div>
        </div>
      </div>
      <div className="bg-primary py-12">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
          {/* Left Section - Video */}
          <div
            ref={heroImageRef}
            className="relative w-full md:w-1/2 mb-8 md:mb-0"
          >
            <img
              src={hero}
              alt="Classroom"
              className="rounded-3xl shadow-lg"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="bg-gray-700 bg-opacity-80 text-white text-4xl rounded-full w-16 h-16 flex items-center justify-center shadow-md">
                ▶
              </button>
            </div>
          </div>

          {/* Right Section - Content */}
          <div
            ref={textSectionRef}
            className="w-full md:w-1/2 md:pl-8 text-center md:text-left"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Foundation Globally
            </h2>
            <p className="text-gray-100 leading-relaxed mb-6">
              The open schooling system was established in XXXX in the state to
              provide flexible education to diverse learners. It evolved from
              the National Open School (NOS), aiming to address the educational
              needs of those unable to access traditional schooling.
            </p>
            <button className="border border-white text-white px-6 py-2 rounded-full hover:bg-white hover:text-red-300 transition">
              Read More
            </button>
          </div>
        </div>

        {/* Social Media Icons */}
        <div
          ref={(el) => (socialIconsRef.current = el ? [...socialIconsRef.current, el] : [])}
          className="fixed top-1/3 right-1 flex flex-col space-y-1 z-20"
        >
          <a
            href="#"
            className="bg-red-600 text-white w-14 h-14 flex items-center justify-center rounded-xs hover:bg-red-700"
          >
            <FaYoutube className="text-2xl" />
          </a>
          <a
            href="#"
            className="bg-blue-600 text-white w-14 h-14 flex items-center justify-center rounded-xs hover:bg-blue-700"
          >
            <FaFacebook className="text-2xl" />
          </a>
          <a
            href="#"
            className="bg-blue-400 text-white w-14 h-14 flex items-center justify-center rounded-xs hover:bg-blue-500"
          >
            <FaTwitter className="text-2xl" />
          </a>
          <button className="bg-gray-200 text-black w-14 h-14 flex items-center justify-center rounded-xs hover:bg-gray-300">
            Aa
          </button>
        </div>
      </div>
    </>
  );
};

export default AboutSection;
