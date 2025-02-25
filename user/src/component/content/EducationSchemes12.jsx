import React from 'react'

const EducationSchemes = () => {
  const schemes = [
    {
      title: 'General Scheme',
      description:
        'Certified copy of the high school examination mark sheet passed from Madhya Pradesh or any other recognized board.',
    },
    {
      title: 'Full Credit Scheme',
      description:
        'Certified copy of the 10th class mark sheet and original & certified copy of the 12th class failed mark sheet.',
    },
    {
      title: 'Partial Credit Scheme',
      description:
        'Certified copy of the board mark sheet for 12th class passed from a board recognized by the education board.',
    },
    {
      title: 'Marks/Grade Improvement Scheme',
      description:
        'Original mark sheet of 12th class passed from MP State Open School.',
    },
    {
      title: 'Re-admission Scheme',
      description:
        'If not passed even in 9 attempts, re-admission is required to appear in the examination.',
    },
    {
      title: 'Do Not Stop Scheme',
      description:
        'Original mark sheet of the same session where the student was declared failed by MP Board, Bhopal.',
    },
    {
      title: 'Facility Scheme',
      description:
        'Only after passing all subjects, the 12th mark sheet cum certificate will be provided by the MP State Open School Board.',
    },
    {
      title: 'Equivalency Scheme',
      description:
        'For students who have passed 10th along with ITI, they need to pass one language and an entrepreneurship subject. Upon passing, they will be given credit for three ITI subjects and issued a 12th mark sheet.',
    },
  ]

  const subjects = [
    {
      group: 'A (Minimum one, Maximum two)',
      data: [
        {
          code: 301,
          subject: 'Hindi',
          papers: 1,
          totalMarks: 100,
          passingMarks: 33,
          duration: '3 hrs',
        },
        {
          code: 302,
          subject: 'English',
          papers: 1,
          totalMarks: 100,
          passingMarks: 33,
          duration: '3 hrs',
        },
        {
          code: 309,
          subject: 'Sanskrit',
          papers: 1,
          totalMarks: 100,
          passingMarks: 33,
          duration: '3 hrs',
        },
      ],
    },
    {
      group: 'B (Minimum one, Maximum two)',
      data: [
        {
          code: 311,
          subject: 'Mathematics',
          papers: 1,
          totalMarks: 100,
          passingMarks: 33,
          duration: '3 hrs',
        },
        {
          code: 321,
          subject: 'Home Science (Theory & Practical)',
          papers: 2,
          totalMarks: 100,
          passingMarks: 33,
          duration: '3 hrs',
        },
        {
          code: 318,
          subject: 'Economics',
          papers: 1,
          totalMarks: 100,
          passingMarks: 33,
          duration: '3 hrs',
        },
      ],
    },
    {
      group: 'C (Minimum one, Maximum two)',
      data: [
        {
          code: 312,
          subject: 'Physics (Theory & Practical)',
          papers: 2,
          totalMarks: 100,
          passingMarks: 33,
          duration: '3 hrs',
        },
        {
          code: 315,
          subject: 'History',
          papers: 1,
          totalMarks: 100,
          passingMarks: 33,
          duration: '3 hrs',
        },
        {
          code: 319,
          subject: 'Business Studies',
          papers: 1,
          totalMarks: 100,
          passingMarks: 33,
          duration: '3 hrs',
        },
      ],
    },
    {
      group: 'D (Minimum one, Maximum two)',
      data: [
        {
          code: 313,
          subject: 'Chemistry (Theory & Practical)',
          papers: 2,
          totalMarks: 100,
          passingMarks: 33,
          duration: '3 hrs',
        },
        {
          code: 317,
          subject: 'Political Science',
          papers: 1,
          totalMarks: 100,
          passingMarks: 33,
          duration: '3 hrs',
        },
      ],
    },
    {
      group: 'E (Minimum one, Maximum two)',
      data: [
        {
          code: 314,
          subject: 'Biology (Theory & Practical)',
          papers: 2,
          totalMarks: 100,
          passingMarks: 33,
          duration: '3 hrs',
        },
        {
          code: 316,
          subject: 'Geography',
          papers: 1,
          totalMarks: 100,
          passingMarks: 33,
          duration: '3 hrs',
        },
        {
          code: 320,
          subject: 'Accounting',
          papers: 1,
          totalMarks: 100,
          passingMarks: 33,
          duration: '3 hrs',
        },
      ],
    },
    {
      group: 'F (Maximum one)',
      data: [
        {
          code: 324,
          subject: 'Hindi Stenography (Theory & Practical)',
          papers: 2,
          totalMarks: 100,
          passingMarks: 33,
          duration: '1 hr 30 min each',
        },
        {
          code: 358,
          subject: 'Food Processing (Theory & Practical)',
          papers: 2,
          totalMarks: 100,
          passingMarks: 33,
          duration: '2 & 3 hrs',
        },
        {
          code: 605,
          subject: 'Cutting, Tailoring & Dress Material (Theory & Practical)',
          papers: 2,
          totalMarks: 100,
          passingMarks: 33,
          duration: '2 & 3 hrs',
        },
        {
          code: 616,
          subject:
            'Computer Hardware Assembly & Maintenance (Theory & Practical)',
          papers: 2,
          totalMarks: 100,
          passingMarks: 33,
          duration: '2 & 3 hrs',
        },
        {
          code: 650,
          subject: 'Entrepreneurship & Employment Skills (Theory & Practical)',
          papers: 2,
          totalMarks: 100,
          passingMarks: 33,
          duration: '3 hrs',
        },
      ],
    },
  ]

  return (
    <div className="py-4 bg-gray-100 rounded-lg">
      <h3 className="text-lg sm:text-2xl font-semibold text-white text-center my-5 border-[#fd645b] border-x-4 bg-[#00043c] pt-1 py-1 w-full mb-5">
        Operational Schemes
      </h3>
      <div className="overflow-x-auto">
        <table className="w-full border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-400 px-4 py-2">Schemes</th>
              <th className="border border-gray-400 px-4 py-2">
                Higher Secondary Curriculum 12
              </th>
            </tr>
          </thead>
          <tbody>
            {schemes.map((scheme, index) => (
              <tr key={index} className="bg-white">
                <td className="border border-gray-400 px-4 py-2">
                  {scheme.title}
                </td>
                <td className="border border-gray-400 px-4 py-2">
                  {scheme.description}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="p-4 mt-5 bg-white shadow-md rounded-lg">
        <h3 className="text-lg sm:text-2xl font-semibold text-white text-center my-5 border-[#fd645b] border-x-4 bg-[#00043c] pt-1 py-1 w-full mb-5">
          Fee Structure for Class 12
        </h3>
        <p className="mb-4 text-xs sm:text-base text-gray-700">
          The fee details for various courses conducted by the M.P. State Open
          School are shown in the table. Apply for admission registration
          through the designated kiosk. If the fee is paid partially or not paid
          at all, the admission application will be deemed invalid and canceled.
        </p>
        <p className="mb-4 text-xs sm:text-base text-gray-600">
          As per the current system, for admission to Open School (Traditional),
          the online application form must be filled out, and the fee must be
          submitted through the authorized AISECT Online Kiosk. The complete fee
          amount to be paid is detailed in the table below. While applying,
          ensure that all the information is correctly filled in, read
          carefully, and sign the form.
        </p>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300 mb-6 text-sm md:text-base">
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-gray-300 p-2">Subjects</th>
                <th className="border border-gray-300 p-2 text-center">
                  High School (General)
                </th>
                <th className="border border-gray-300 p-2 text-center">
                  BPL / SC-ST / Women / 40% Disabled
                </th>
                <th className="border border-gray-300 p-2 text-center">
                  Higher Secondary (General)
                </th>
                <th className="border border-gray-300 p-2 text-center">
                  BPL / SC-ST / Women / 40% Disabled
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                ['One Subject', '₹605', '₹415', '₹730', '₹500'],
                ['Two Subjects', '₹1210', '₹835', '₹1460', '₹960'],
                ['Three Subjects', '₹1500', '₹1010', '₹1710', '₹1110'],
                ['Four Subjects', '₹1760', '₹1160', '₹1960', '₹1260'],
                ['Five Subjects', '₹2010', '₹1310', '₹2210', '₹1410'],
                ['Six Subjects', '₹2060', '₹1360', '---', '---'],
              ].map((row, index) => (
                <tr key={index} className="text-center hover:bg-gray-50">
                  {row.map((cell, cellIndex) => (
                    <td key={cellIndex} className="border border-gray-300 p-2">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="container py-4">
          <h3 className="text-lg sm:text-2xl font-semibold text-white text-center my-5 border-[#fd645b] border-x-4 bg-[#00043c] pt-1 py-1 w-full mb-5">
            Higher Secondary Subjects
          </h3>
          {subjects.map((group, index) => (
            <div key={index} className="mb-8">
              <h3 className="text-xl md:text-2xl font-semibold mb-3 bg-gray-200 p-3 rounded">
                {group.group}
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300 text-sm md:text-base">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 p-2 md:p-3">
                        Code
                      </th>
                      <th className="border border-gray-300 p-2 md:p-3">
                        Subject
                      </th>
                      <th className="border border-gray-300 p-2 md:p-3">
                        Papers
                      </th>
                      <th className="border border-gray-300 p-2 md:p-3">
                        Total Marks
                      </th>
                      <th className="border border-gray-300 p-2 md:p-3">
                        Passing Marks
                      </th>
                      <th className="border border-gray-300 p-2 md:p-3">
                        Duration
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {group.data.map((subject, subIndex) => (
                      <tr
                        key={subIndex}
                        className="text-center hover:bg-gray-50"
                      >
                        <td className="border border-gray-300 p-2 md:p-3">
                          {subject.code}
                        </td>
                        <td className="border border-gray-300 p-2 md:p-3">
                          {subject.subject}
                        </td>
                        <td className="border border-gray-300 p-2 md:p-3">
                          {subject.papers}
                        </td>
                        <td className="border border-gray-300 p-2 md:p-3">
                          {subject.totalMarks}
                        </td>
                        <td className="border border-gray-300 p-2 md:p-3">
                          {subject.passingMarks}
                        </td>
                        <td className="border border-gray-300 p-2 md:p-3">
                          {subject.duration}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default EducationSchemes
