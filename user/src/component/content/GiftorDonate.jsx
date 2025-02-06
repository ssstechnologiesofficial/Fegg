import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SummaryApi from "../../common/SummaryApi";

gsap.registerPlugin(ScrollTrigger);

const ImportantLinks = () => {
  const containerRef = useRef(null);
  const [announcements, setAnnouncements] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const links = [
    "Online Books",
    "Syllabus",
    "Recorded Videos",
    "Blue Print",
    "Previous Year Question Paper",
    "Practice Set",
    "Model Answer Sheet",
  ];

  useEffect(() => {
    // Fetch announcements from API
    const fetchAnnouncements = async () => {
      try {
        const response = await axios.get(SummaryApi.getAnnouncements.url);
        setAnnouncements(response.data);
      } catch (error) {
        setError("Failed to load announcements.");
      } finally {
        setLoading(false);
      }
    };

    fetchAnnouncements();

    // GSAP Animations
    const container = containerRef.current;
    gsap.fromTo(
      container.querySelectorAll(".important-link"),
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: container.querySelector(".important-link"),
          start: "top 80%",
        },
      }
    );

    gsap.fromTo(
      container.querySelectorAll(".announcement-card"),
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: container.querySelector(".announcement-card"),
          start: "top 80%",
        },
      }
    );
  }, []);

  return (
    <div className="bg-gray-100 py-14 px-4" ref={containerRef}>
      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-8 md:px-16">
        <div>
          <h2 className="text-xl font-bold mb-4 border-b-2 border-black">
            IMPORTANT LINKS
          </h2>
          <p className="text-gray-600 mb-6">
            Take the open school quiz and test your Open something.
          </p>
        </div>
        <div>
          <h2 className="text-xl font-bold mb-4 border-b-2 border-black">
            EVENTS & ANNOUNCEMENT
          </h2>
        </div>
      </div>

      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-8 md:px-16">
        <div className="space-y-3">
          {links.map((link, index) => (
            <div
              key={index}
              className="important-link flex items-center justify-between bg-white p-4 shadow-md border-l-8 border-red-400"
            >
              <span className="font-medium text-gray-800">{link}</span>
              <span className="text-primary text-lg font-bold">→</span>
            </div>
          ))}
        </div>

        <div className="space-y-4">
          {loading ? (
            <p>Loading announcements...</p>
          ) : error ? (
            <p className="text-primary">{error}</p>
          ) : announcements.length === 0 ? (
            <p>No announcements available.</p>
          ) : (
            announcements.map((announcement, index) => (
              <div
                key={index}
                className="announcement-card relative bg-white p-4 shadow-md flex flex-col justify-between h-32"
              >
                <div className="absolute top-0 left-0 bg-[#FD645B] text-white text-center w-16 h-16 flex flex-col justify-center font-bold">
                  {(() => {
                    const dateObj = new Date(announcement.date);
                    const day = dateObj.getDate();
                    const month = dateObj.toLocaleString("en-US", {
                      month: "long",
                    }); // Converts to full month name
                    return (
                      <>
                        <span className="text-lg">{day}</span>
                        <span className="text-sm">{month}</span>
                      </>
                    );
                  })()}
                </div>
                <div className="ml-20">
                  <h3 className="text-gray-800 font-semibold">
                    {announcement.title}
                  </h3>
                  <p className="text-gray-600 text-sm mt-2">
                    {announcement.description}
                  </p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default ImportantLinks;
