import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Outlet, Link } from "react-router-dom";

import {
  FaGraduationCap,
  FaClipboard,
  FaLaptop,
  FaWpforms,
  FaAddressCard,
  FaPencilAlt,
} from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const InfoSection = () => {
  const sectionRef = useRef(null);
  const itemsRef = useRef([]);

  const infoItems = [
    { label: "Registration", color: "bg-yellow-500", icon: <FaWpforms /> , link:"register"},
    {
      label: "E-Content",
      color: "bg-teal-500",
      icon: <FaClipboard />,
      link: "e-content",
    },
    { label: "Practice Set", color: "bg-orange-500", icon: <FaPencilAlt /> },
    {
      label: "Online Vedio",
      color: "bg-purple-500",
      icon: <FaLaptop />,
      link: "onlinevideo",
    },
    { label: "Admit Card", color: "bg-green-500", icon: <FaAddressCard /> },
    { label: "Result", color: "bg-red-500", icon: <FaGraduationCap /> },
  ];

  useEffect(() => {
    // GSAP Animation
    const context = gsap.context(() => {
      itemsRef.current.forEach((item, index) => {
        gsap.fromTo(
          item,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: item,
              start: "top 80%", // Trigger when the item enters the viewport
            },
          }
        );
      });
    }, sectionRef);

    return () => context.revert(); // Clean up GSAP context on unmount
  }, []);

  return (
    <div ref={sectionRef} className="py-12 bg-gray-100 px-4 md:px-8">
      <h2 className="text-center text-xl md:text-3xl font-bold mb-8">
        INFORMATION ABOUT
      </h2>
      <div className="container mx-auto">
        <Swiper
          modules={[Navigation]}
          navigation
          spaceBetween={10}
          slidesPerView={1} // Default for smallest screens
          breakpoints={{
            480: { slidesPerView: 2, spaceBetween: 10 }, // Small screens
            768: { slidesPerView: 3, spaceBetween: 15 }, // Medium screens
            1024: { slidesPerView: 4, spaceBetween: 10 }, // Large screens
            1280: { slidesPerView: 6, spaceBetween: 10 }, // Extra-large screens
          }}
        >
          {infoItems.map((item, index) => (
            <SwiperSlide key={index}>
              <div
                ref={(el) => (itemsRef.current[index] = el)}
                className="flex flex-col items-center"
              >
                {/* Circle containing the icon */}
                <Link
                  to={item.link}
                  className={`flex items-center justify-center w-20 h-20 md:w-28 md:h-28 lg:w-32 lg:h-32 ${item.color} text-white rounded-full shadow-lg`}
                >
                  <div className="text-2xl md:text-4xl lg:text-6xl">
                    {item.icon}
                  </div>
                </Link>
                {/* Label outside the circle */}
                <p className="text-sm md:text-base lg:text-lg font-medium mt-2 text-center">
                  {item.label}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default InfoSection;
