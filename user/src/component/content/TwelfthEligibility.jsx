import React from 'react'
import EducationSchemes12 from './EducationSchemes12'

const TwelfthEligibility = () => {
  const eligibilityCriteria = [
    {
      title: 'Age',
      details: [
        'No restriction.',
        'No restriction.',
        'Certificate/Marksheet of High School or equivalent examination from a recognized board mentioning Date of Birth.',
      ],
    },
    {
      title: 'Minimum Educational Qualification',
      details: [
        'Certificate/Marksheet of High School or equivalent examination from a recognized board in the approved list of Madhya Pradesh Board of Secondary Education, Bhopal.',
      ],
    },
    {
      title: 'Fee Exemption for SC/ST Students',
      details: ['Caste certificate issued by a competent authority.'],
    },
    {
      title: 'Fee Exemption for Students with 40% or More Disability',
      details: ['Disability certificate issued by the District Medical Board.'],
    },
    {
      title: 'Fee Exemption for BPL Cardholders',
      details: [
        'Certificate issued by the District Food Controller Officer or other competent authority authorized by the Government of Madhya Pradesh from time to time.',
      ],
    },
  ]

  return (
    <div className="p-4 bg-gray-100 rounded-lg shadow-md">
      <h3 className="text-lg sm:text-2xl font-semibold text-white text-center my-5 border-[#fd645b] border-x-4 bg-[#00043c] pt-1 py-1 w-full">
        Class 12th Eligibility & Required Documents
      </h3>
      <table className="w-full border-collapse border border-gray-300 bg-white">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 px-4 py-2">
              Eligibility Criteria
            </th>
            <th className="border border-gray-300 px-4 py-2">
              Required Documents
            </th>
          </tr>
        </thead>
        <tbody>
          {eligibilityCriteria.map((item, index) => (
            <tr key={index} className="hover:bg-gray-100">
              <td className="border border-gray-300 px-4 py-2 font-semibold">
                {item.title}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                <ul className="list-disc list-inside">
                  {item.details.map((detail, i) => (
                    <li key={i}>{detail}</li>
                  ))}
                </ul>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <EducationSchemes12 />
    </div>
  )
}

export default TwelfthEligibility
