import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import hero from "../../assets/hero.webp";

const Hero = () => {
  const popupRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      popupRef.current,
      { x: 300, opacity: 0 },
      { x: 0, opacity: 1, duration: 1, ease: "power3.out" }
    );
  }, []);

  return (
    <div className="relative hero-container">
      {/* Right-Aligned Popup */}
      <div className="absolute top-0 right-0 h-full flex items-center justify-end md:pr-20">
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
