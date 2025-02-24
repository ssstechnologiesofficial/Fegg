import React from "react";

const TenthClass = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold text-center  text-red-600">
        Class 10th 
      </h1>
      <h1 className="text-xl font-bold text-center  ">
      Eligibility & Required Documents
      </h1>
      <h1 className="text-lg  text-center mb-6 ">
      The following qualifications and documents are required for admission to the M.P.S.O.S.E.B. examinations:
      </h1>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-red-500 text-white">
              <th className="border border-gray-300 px-4 py-2 text-left">
                Category
              </th>
              <th className="border border-gray-300 px-4 py-2 text-left">
                Details
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-gray-100">
              <td className="border border-gray-300 px-4 py-2 font-semibold">
                Minimum Age
              </td>
              <td className="border border-gray-300 px-4 py-2">No Restriction</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2 font-semibold">
                Maximum Age
              </td>
              <td className="border border-gray-300 px-4 py-2">No Restriction</td>
            </tr>
            <tr className="bg-gray-100">
              <td className="border border-gray-300 px-4 py-2 font-semibold">
                Birth Certificate Requirement
              </td>
              <td className="border border-gray-300 px-4 py-2">
                - Transfer Certificate from the last attended school or original mark sheet of 5th, 8th, or 10th board exam.<br />
                - Certified copy of the birth certificate issued by Gram Panchayat, Municipal Council, or Corporation.<br />
                - For students born before 1989 who have never enrolled in any school, an affidavit mentioning the correct date of birth is required.
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2 font-semibold">
                Minimum Educational Qualification
              </td>
              <td className="border border-gray-300 px-4 py-2">Passed Class 8</td>
            </tr>
            <tr className="bg-gray-100">
              <td className="border border-gray-300 px-4 py-2 font-semibold">
                Fee Concession for SC/ST Students
              </td>
              <td className="border border-gray-300 px-4 py-2">
                Caste Certificate issued by competent authority
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2 font-semibold">
                Fee Concession for Students with 40% or More Disability
              </td>
              <td className="border border-gray-300 px-4 py-2">
                Disability Certificate issued by District Medical Board
              </td>
            </tr>
            <tr className="bg-gray-100">
              <td className="border border-gray-300 px-4 py-2 font-semibold">
                Fee Concession for BPL (Below Poverty Line) Card Holders
              </td>
              <td className="border border-gray-300 px-4 py-2">
                Certificate issued by District Food Controller or authorized authority of Madhya Pradesh Government
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Additional Sections for Different Plans */}
      <h2 className="text-xl font-bold text-center my-6 text-red-600">
        Operated Plans
      </h2>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-red-500 text-white">
              <th className="border border-gray-300 px-4 py-2 text-left">Plan</th>
              <th className="border border-gray-300 px-4 py-2 text-left">
                Required Documents
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-gray-100">
              <td className="border border-gray-300 px-4 py-2 font-semibold">
                General Plan
              </td>
              <td className="border border-gray-300 px-4 py-2">
                - Birth Certificate certified by a Gazette Officer<br />
                - Transfer Certificate/Original Mark Sheet if formal education was obtained
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2 font-semibold">
                Full Credit Plan
              </td>
              <td className="border border-gray-300 px-4 py-2">
                - Original and attested copy of marksheet from the previous board exam (Class 10 Failed)
              </td>
            </tr>
            <tr className="bg-gray-100">
              <td className="border border-gray-300 px-4 py-2 font-semibold">
                Partial Credit Plan
              </td>
              <td className="border border-gray-300 px-4 py-2">
                - Attested copy of Class 10th marksheet from a recognized board
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2 font-semibold">
                Marks/Grade Improvement Plan
              </td>
              <td className="border border-gray-300 px-4 py-2">
                - Original marksheet of Class 10 passed from MP Open School
              </td>
            </tr>
            <tr className="bg-gray-100">
              <td className="border border-gray-300 px-4 py-2 font-semibold">
                Re-Admission Plan
              </td>
              <td className="border border-gray-300 px-4 py-2">
                - Required if not passing within 9 attempts
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2 font-semibold">
                "Do Not Stop" Plan
              </td>
              <td className="border border-gray-300 px-4 py-2">
                - Original marksheet showing failure from MP Board<br />
                - Exams available in Hindi & English, with language choices including Hindi, English, Sanskrit, and Urdu
              </td>
            </tr>
            <tr className="bg-gray-100">
              <td className="border border-gray-300 px-4 py-2 font-semibold">
                Facility Plan
              </td>
              <td className="border border-gray-300 px-4 py-2">—</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2 font-semibold">
                Equivalency Plan
              </td>
              <td className="border border-gray-300 px-4 py-2">—</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TenthClass;
