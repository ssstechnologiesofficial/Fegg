// src/components/EventsAnnouncements.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import SummaryApi from "../../common/SummaryApi";
import { Link } from "react-router-dom";

const baseUrl = import.meta.env.VITE_BACKEND_URL;

const EventsAnnouncements = () => {
  const [announcements, setAnnouncements] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchAnnouncements = async () => {
      try {
        const response = await axios.get(SummaryApi.getAnnouncements.url);
        setAnnouncements(response.data);
      } catch (error) {
        setError("घोषणाएँ लोड करने में असफल।");
      } finally {
        setLoading(false);
      }
    };

    fetchAnnouncements();
  }, []);

  return (
    <div>
      <h2 className="text-lg sm:text-3xl font-bold mb-4 text-primary text-center">
        कार्यक्रम और घोषणाएँ
      </h2>

      {loading ? (
        <p>घोषणाएँ लोड हो रही हैं...</p>
      ) : error ? (
        <p className="text-primary">{error}</p>
      ) : announcements.length === 0 ? (
        <p>कोई घोषणा उपलब्ध नहीं है।</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {announcements.map((announcement, index) => (
          <div
            key={index}
            className="announcement-card border-2 border-gray-400 bg-white shadow-md flex flex-col transition hover:scale-105 hover:bg-gray-50"
          >
            {/* तारीख बॉक्स और शीर्षक */}
            <div className="border-b-2 border-gray-400 relative h-24 flex items-center">
              <div className="absolute top-0 left-0 bg-[#FD645B] text-white text-center w-16 h-16 flex flex-col justify-center font-bold">
                {(() => {
                  const dateObj = new Date(announcement.date);
                  const day = dateObj.getDate();
                  const month = dateObj.toLocaleString("hi-IN", {
                    month: "long",
                  });
                  return (
                    <>
                      <span className="text-lg">{day}</span>
                      <span className="text-sm">{month}</span>
                    </>
                  );
                })()}
              </div>
              <h3 className="text-gray-800 font-semibold pl-24 pr-4 py-2">
                {announcement.title}
              </h3>
            </div>
      
            {/* घोषणा विवरण और छवि */}
            <div className="flex flex-row items-center gap-4 h-full px-4 py-2">
              {/* घोषणा विवरण */}
              
              <div className="flex-1">
                <p className="text-gray-600 text-sm mt-2 line-clamp-2">
                  {announcement.description}
                </p>
                {announcement.pdf && (
                  <Link to={`/announcement/${announcement._id}`}>
                    <button className="inline-block mt-2 text-white bg-red-400 w-full px-4 py-2 text-sm rounded-md">
                      अधिक जानें
                    </button>
                  </Link>
                )}
              </div>
              {/* घोषणा छवि */}
              {announcement.image && (
                <img
                  src={`${baseUrl}/uploads/${announcement.image}`}
                  alt="घोषणा"
                  className="w-56 h-56 object-cover rounded-md"
                />
              )}
            </div>
          </div>
        ))}
      </div>
      
      )}
    </div>
  );
};

export default EventsAnnouncements;
