import React from "react";
import hero from "../../assets/hero.webp";
import Testimonials from "./Testimonials";
const StudentCorner = () => {
  return (
    <div className="bg-gray-100 relative">
      <img src={hero} alt="History" className="object-cover w-full" />
      <div className="bg-white mx-6 relative -mt-16 rounded-lg shadow-lg mb-8">
        {/* Header */}
        <header className="bg-white  p-4">
          <h1 className="text-2xl font-bold text-center text-red-500">
            STUDENT CORNER
          </h1>
        </header>

        {/* Divya Sharma Section */}
        <section className="bg-white p-6 m-6">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-2/3 text-right">
              <h2 className="text-xl font-bold">Divya Sharma</h2>
              <p className="text-gray-600 mt-2">
                Divya Sharma Enrollment No. 123456789012. Divya Sharma
                (123456789012) is currently studying at DPS South Delhi, in the
                NIOS stream. Post completing her Senior Secondary exams in April
                2023, she plans to pursue Business Administration and has
                enrolled herself at the XXX University, Delhi for the Business
                Administration Program.
              </p>
              <button className="mt-4 px-4 py-2 text-primary">READ MORE</button>
            </div>
            <img
              src={hero}
              alt="Divya Sharma"
              className="w-full md:w-1/3 rounded-lg object-cover"
            />
          </div>
        </section>

        {/* Placements Section */}
        <section className="flex flex-col md:flex-row gap-6 bg-gray-100 m-6">
          <img
            src={hero}
            alt="Divya Sharma"
            className="w-full md:w-1/3  object-cover"
          />
          <div className="md:w-2/3">
            <h2 className="text-xl font-bold mb-4">Placements</h2>
            <table className="table-auto w-full text-left border-collapse">
              <thead>
                <tr className="bg-pink-100">
                  <th className="p-2 border">Name</th>
                  <th className="p-2 border">Program</th>
                  <th className="p-2 border">Location</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    name: "Amrita Singh",
                    program: "ASHA",
                    location: "Rajasthan",
                  },
                  {
                    name: "Anuj Singh",
                    program: "NAREGA",
                    location: "Uttar Pradesh",
                  },
                  {
                    name: "Bhavna Kumari",
                    program: "ANM",
                    location: "Uttar Pradesh",
                  },
                  {
                    name: "Bharti Singh",
                    program: "ANM",
                    location: "Madhya Pradesh",
                  },
                  { name: "Deepak", program: "Aganwadi", location: "Delhi" },
                  {
                    name: "Suraj Singh",
                    program: "ANM",
                    location: "Rajasthan",
                  },
                ].map((placement, index) => (
                  <tr
                    key={index}
                    className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
                  >
                    <td className="p-2 border">{placement.name}</td>
                    <td className="p-2 border">{placement.program}</td>
                    <td className="p-2 border">{placement.location}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <button className="mt-4 px-4 py-2 text-red-500 ">READ MORE</button>
          </div>
        </section>

        {/* Skilling Program Section */}
        <section className="flex flex-col md:flex-row gap-6 m-6 border">
          <div className="md:w-2/3 p-4 items-center">
            <h2 className="text-xl font-bold mb-4">Skilling Program</h2>
            <ul className="list-disc ml-6 text-gray-600">
              <li>Pradhan Mantri Kaushal Kendra</li>
              <li>Sankalp</li>
              <li>Udaan</li>
            </ul>
            <button className="mt-4 px-4 py-2 text-red-500">READ MORE</button>
          </div>
          <img
            src={hero}
            alt="Divya Sharma"
            className="w-full md:w-1/3  object-cover"
          />
        </section>

        {/* Testimonial Section */}
      <div className="py-7">
      <Testimonials />
      </div>
      </div>
    </div>
  );
};

export default StudentCorner;
