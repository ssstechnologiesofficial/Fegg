import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ImportantLinks = () => {
  const containerRef = useRef(null);

  const links = [
    "Meeting & Events",
    "R.T.I",
    "Download Section",
    "Report",
    "Photo Gallery",
    "Proud Learners",
  ];

  const announcements = [
    {
      date: "12 Mar",
      title: "Announcement",
      description:
        "The open schooling system was established in XXXX in the state to provide flexible education to diverse learners. It evolved from the National Open School (NOS), aiming to address.",
    },
    {
      date: "14 Mar",
      title: "Announcement",
      description:
        "New registration is open for class 10th in the session 2024-25.",
    },
    {
      date: "15 Mar",
      title: "Announcement",
      description:
        "The result is announced for supplementary examination held in October November 2003.",
    },
  ];

  useEffect(() => {
    const container = containerRef.current;

    // Animate each section on scroll
    gsap.fromTo(
      container.querySelectorAll(".important-link"),
      {
        opacity: 0,
        x: -50,
      },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: container.querySelector(".important-link"),
          start: "top 80%", // Trigger animation when 80% of the section is in view
        },
      }
    );

    gsap.fromTo(
      container.querySelectorAll(".announcement-card"),
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: container.querySelector(".announcement-card"),
          start: "top 80%", // Trigger animation when 80% of the section is in view
        },
      }
    );
  }, []);

  return (
    <div className="bg-gray-100 py-14 px-4" ref={containerRef}>
      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-8 md:px-16">
        {/* Important Links Section */}
        <div>
          <h2 className="text-xl font-bold mb-4 border-b-2 border-black">
            IMPORTANT LINKS
          </h2>
          <p className="text-gray-600 mb-6">
            Take the open school quiz and test your Open something.
          </p>
        </div>

        {/* Events & Announcements Section */}
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
              className="important-link flex items-center justify-between bg-white p-4 shadow-md border-l-8 border-red-500"
            >
              <span className="font-medium text-gray-800">{link}</span>
              <span className="text-red-500 text-lg font-bold">→</span>
            </div>
          ))}
        </div>
        <div className="space-y-4">
          {announcements.map((announcement, index) => (
            <div
              key={index}
              className="announcement-card relative bg-white p-4 shadow-md flex flex-col justify-between h-32"
            >
              {/* Date at the top-left corner */}
              <div className="absolute top-0 left-0 bg-red-500 text-white text-center w-16 h-16 flex flex-col justify-center font-bold">
                <span className="text-lg">{announcement.date.split(" ")[0]}</span>
                <span className="text-sm">{announcement.date.split(" ")[1]}</span>
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
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImportantLinks;
