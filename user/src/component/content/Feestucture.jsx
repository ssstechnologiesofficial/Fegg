const FeeStructureTable = () => {
    const feeData = [
      { subject: "One Subject", highSchool: "₹605.00", highSchoolBPL: "₹415.00", higherSecondary: "₹730.00", higherSecondaryBPL: "₹500.00" },
      { subject: "Two Subjects", highSchool: "₹1210.00", highSchoolBPL: "₹835.00", higherSecondary: "₹1460.00", higherSecondaryBPL: "₹960.00" },
      { subject: "Three Subjects", highSchool: "₹1500.00", highSchoolBPL: "₹1010.00", higherSecondary: "₹1710.00", higherSecondaryBPL: "₹1110.00" },
      { subject: "Four Subjects", highSchool: "₹1760.00", highSchoolBPL: "₹1160.00", higherSecondary: "₹1960.00", higherSecondaryBPL: "₹1260.00" },
      { subject: "Five Subjects", highSchool: "₹2010.00", highSchoolBPL: "₹1310.00", higherSecondary: "₹2210.00", higherSecondaryBPL: "₹1410.00" },
      { subject: "Six Subjects", highSchool: "₹2060.00", highSchoolBPL: "₹1360.00", higherSecondary: "------", higherSecondaryBPL: "------" },
    ];
  
    return (
      <div className="p-4 rounded-lg">
        <h3 className="text-lg sm:text-2xl font-semibold text-white text-center my-5 border-[#fd645b] border-x-4 bg-[#00043c] pt-1 py-1 w-full">
          Fee Structure Table ( Class 10th )
        </h3>
        <p className="text-center mb-5">The fee structure for various courses conducted by the M.P. State Open School is shown in the table. Applications for admission registration should be submitted through the designated kiosk. If the fee is paid partially or not at all, the admission application will be considered invalid and rejected.

As per the current system, for admission to Open School (Traditional), the online application form must be filled out, and the fee must be submitted through the authorized AISECT Online Kiosk. The complete fee amount to be paid is provided in the table below. While applying, ensure that all information is correctly filled in, read the details carefully, and sign the form.</p>
        <table className="w-full border-collapse border border-gray-300 bg-white">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 px-4 py-2">Subject</th>
              <th className="border border-gray-300 px-4 py-2">High School (General)</th>
              <th className="border border-gray-300 px-4 py-2">BPL/SC/ST/Women/40%+ Disabled (High School)</th>
              <th className="border border-gray-300 px-4 py-2">Higher Secondary (General)</th>
              <th className="border border-gray-300 px-4 py-2">BPL/SC/ST/Women/40%+ Disabled (Higher Secondary)</th>
            </tr>
          </thead>
          <tbody>
            {feeData.map((item, index) => (
              <tr key={index} className="hover:bg-gray-100">
                <td className="border border-gray-300 px-4 py-2 font-semibold">{item.subject}</td>
                <td className="border border-gray-300 px-4 py-2">{item.highSchool}</td>
                <td className="border border-gray-300 px-4 py-2">{item.highSchoolBPL}</td>
                <td className="border border-gray-300 px-4 py-2">{item.higherSecondary}</td>
                <td className="border border-gray-300 px-4 py-2">{item.higherSecondaryBPL}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  
  export default FeeStructureTable;
