import React from "react";
import FeeStructureTable from "./Feestucture";
import HighSchoolSubjectsTable from "./HeighSchoolTbale";

const eligibilityData = [
  { category: "Minimum Age", details: "No Restriction" },
  { category: "Maximum Age", details: "No Restriction" },
  {
    category: "Birth Certificate Requirement",
    details: (
      <>
        - Transfer Certificate from the last attended school or original mark sheet of 5th, 8th, or 10th board exam.
        <br />
        - Certified copy of the birth certificate issued by Gram Panchayat, Municipal Council, or Corporation.
        <br />
        - For students born before 1989 who have never enrolled in any school, an affidavit mentioning the correct date of birth is required.
      </>
    ),
  },
  { category: "Minimum Educational Qualification", details: "Passed Class 8" },
  {
    category: "Fee Concession for SC/ST Students",
    details: "Caste Certificate issued by competent authority",
  },
  {
    category: "Fee Concession for Students with 40% or More Disability",
    details: "Disability Certificate issued by District Medical Board",
  },
  {
    category: "Fee Concession for BPL (Below Poverty Line) Card Holders",
    details: "Certificate issued by District Food Controller or authorized authority of Madhya Pradesh Government",
  },
];

const planData = [
  {
    plan: "General Plan",
    documents: (
      <>
        - Birth Certificate certified by a Gazette Officer
        <br />
        - Transfer Certificate/Original Mark Sheet if formal education was obtained
      </>
    ),
  },
  {
    plan: "Full Credit Plan",
    documents: "- Original and attested copy of marksheet from the previous board exam (Class 10 Failed)",
  },
  {
    plan: "Partial Credit Plan",
    documents: "- Attested copy of Class 10th marksheet from a recognized board",
  },
  {
    plan: "Marks/Grade Improvement Plan",
    documents: "- Original marksheet of Class 10 passed from MP Open School",
  },
  {
    plan: "Re-Admission Plan",
    documents: "- Required if not passing within 9 attempts",
  },
  {
    plan: '"Do Not Stop" Plan',
    documents: (
      <>
        - Original marksheet showing failure from MP Board
        <br />
        - Exams available in Hindi & English, with language choices including Hindi, English, Sanskrit, and Urdu
      </>
    ),
  },
  { plan: "Facility Plan", documents: "—" },
  { plan: "Equivalency Plan", documents: "—" },
];

const TenthClass = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-lg sm:text-2xl font-semibold text-white text-center my-5 border-[#fd645b] border-x-4 bg-[#00043c] pt-1 py-1 w-full">Class 10th  Eligibility & Required Documents</h1>
      <h3 className="text-lg text-center mb-6">
        The following qualifications and documents are required for admission to the M.P.S.O.S.E.B. examinations:
      </h3>

      {/* Eligibility Table */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100 ">
              <th className="border  px-4 py-2 text-left">Category</th>
              <th className="border px-4 py-2 text-left">Details</th>
            </tr>
          </thead>
          <tbody>
            {eligibilityData.map((item, index) => (
              <tr key={index} className={index % 2 === 0 ? "" : ""}>
                <td className="border  px-4 py-2 font-semibold">{item.category}</td>
                <td className="border px-4 py-2">{item.details}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Plans Table */}
      <h2 className="text-lg sm:text-2xl font-semibold text-white text-center my-5 border-[#fd645b] border-x-4 bg-[#00043c] pt-1 py-1 w-full">Operated Plans</h2>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 px-4 py-2 text-left">Plan</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Required Documents</th>
            </tr>
          </thead>
          <tbody>
            {planData.map((item, index) => (
              <tr key={index} className={index % 2 === 0 ? "" : ""}>
                <td className="border border-gray-300 px-4 py-2 font-semibold">{item.plan}</td>
                <td className="border border-gray-300 px-4 py-2">{item.documents}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <FeeStructureTable/>
      <HighSchoolSubjectsTable/>
    </div>
  );
};

export default TenthClass;
