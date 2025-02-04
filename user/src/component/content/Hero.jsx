import React, { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import axios from "axios";
import "swiper/css";
import SummaryApi from "../../common/SummaryApi";
const baseUrl = import.meta.env.VITE_BACKEND_URL
const Hero = () => {
  const popupRef = useRef(null);
  const [carouselImages, setCarouselImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch carousel images from API
    const fetchCarouselImages = async () => {
      try {
        const response = await axios.get(SummaryApi.getCarouselImage.url);
        setCarouselImages(response.data); // Assuming API returns an array of images
        setLoading(false);
      } catch (error) {
        console.error("Error fetching carousel images:", error);
        setError("Failed to load images");
        setLoading(false);
      }
    };

    fetchCarouselImages();
  }, []);

  useEffect(() => {
    if (popupRef.current) {
      gsap.fromTo(
        popupRef.current,
        { x: 300, opacity: 0 },
        { x: 0, opacity: 1, duration: 1, ease: "power3.out" }
      );
    }
  }, []);

  return (
    <div className="relative">
      {/* Image Slider */}
      {loading ? (
        <p className="text-center py-10">Loading images...</p>
      ) : error ? (
        <p className="text-center text-red-500 py-10">{error}</p>
      ) : (
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          slidesPerView={1}
          className="w-full"
        >
          {carouselImages.map((image, index) => (
            <SwiperSlide key={index}>
              <img
                src={`${baseUrl}/${image.image}`} // Ensure correct image path
                alt={`Slide ${index + 1}`}
                className="w-full h-[560px] object-cover" // Fixed height and responsive width
              />
            </SwiperSlide>
          ))}
        </Swiper>
      )}

      {/* Right-Aligned Popup */}
      <div className="absolute top-0 right-0 h-full z-10 flex items-center justify-end md:pr-20">
        <div
          ref={popupRef}
          className="bg-white p-6 rounded-sm border-t-4 border-red-500 shadow-lg w-96"
        >
          <h2 className="text-2xl font-semibold mb-4">Open School</h2>
          <p className="text-sm text-gray-600 mb-4">
            This popup will appear only if there is a notification and the result is announced.
          </p>
          <div className="flex space-x-4">
            <button className="w-40 py-3 bg-primary text-white rounded-3xl uppercase">
              Registration
            </button>
            <button className="w-36 py-3 bg-primary text-white rounded-3xl uppercase">
              Result
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
