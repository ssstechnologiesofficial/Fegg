const HighSchoolSubjectsTable = () => {
    const subjects = [
      { code: "201", subject: "Hindi", papers: "1", totalMarks: "100", passingMarks: "33", duration: "3" },
      { code: "202", subject: "English", papers: "1", totalMarks: "100", passingMarks: "33", duration: "3" },
      { code: "204", subject: "Marathi", papers: "1", totalMarks: "100", passingMarks: "33", duration: "3" },
      { code: "206", subject: "Urdu", papers: "1", totalMarks: "100", passingMarks: "33", duration: "3" },
      { code: "209", subject: "Sanskrit", papers: "1", totalMarks: "100", passingMarks: "33", duration: "3" },
      { code: "211", subject: "Mathematics", papers: "1", totalMarks: "100", passingMarks: "33", duration: "3" },
      { code: "212", subject: "Science (Theory)", papers: "1", totalMarks: "75", passingMarks: "25", duration: "3" },
      { code: "212", subject: "Science (Practical)", papers: "1", totalMarks: "25", passingMarks: "08", duration: "-" },
      { code: "213", subject: "Social Science", papers: "1", totalMarks: "100", passingMarks: "33", duration: "3" },
      { code: "214", subject: "Economics", papers: "1", totalMarks: "100", passingMarks: "33", duration: "3" },
      { code: "215", subject: "Business Studies", papers: "1", totalMarks: "100", passingMarks: "33", duration: "3" },
      { code: "216", subject: "Home Science (Theory)", papers: "1", totalMarks: "75", passingMarks: "25", duration: "3" },
      { code: "216", subject: "Home Science (Practical)", papers: "1", totalMarks: "25", passingMarks: "08", duration: "-" },
      { code: "223", subject: "Indian Culture", papers: "1", totalMarks: "100", passingMarks: "33", duration: "3" },
      { code: "249", subject: "Entrepreneurship (Theory)", papers: "1", totalMarks: "40", passingMarks: "14", duration: "2" },
      { code: "249", subject: "Entrepreneurship (Practical)", papers: "1", totalMarks: "60", passingMarks: "20", duration: "3" },
    ];
  
    return (
      <div className="p-4 rounded-lg ">
        <h3 className="text-lg sm:text-2xl font-semibold text-white text-center my-5 border-[#fd645b] border-x-4 bg-[#00043c] pt-1 py-1 w-full">
          High School Subject Details
        </h3>
        <table className="w-full border-collapse border border-gray-300 bg-white">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 px-4 py-2">Code</th>
              <th className="border border-gray-300 px-4 py-2">Subject</th>
              <th className="border border-gray-300 px-4 py-2">Paper Count</th>
              <th className="border border-gray-300 px-4 py-2">Total Marks</th>
              <th className="border border-gray-300 px-4 py-2">Passing Marks</th>
              <th className="border border-gray-300 px-4 py-2">Duration (Hours)</th>
            </tr>
          </thead>
          <tbody>
            {subjects.map((item, index) => (
              <tr key={index} className="hover:bg-gray-100">
                <td className="border border-gray-300 px-4 py-2 font-semibold">{item.code}</td>
                <td className="border border-gray-300 px-4 py-2">{item.subject}</td>
                <td className="border border-gray-300 px-4 py-2">{item.papers}</td>
                <td className="border border-gray-300 px-4 py-2">{item.totalMarks}</td>
                <td className="border border-gray-300 px-4 py-2">{item.passingMarks}</td>
                <td className="border border-gray-300 px-4 py-2">{item.duration}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  
  export default HighSchoolSubjectsTable;
  