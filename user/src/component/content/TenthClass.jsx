import React from 'react'
import FeeStructureTable from './Feestucture'
import HighSchoolSubjectsTable from './HeighSchoolTbale'
const TenthClass = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold text-center text-red-600">
        कक्षा 10वीं
      </h1>
      <h1 className="text-xl font-bold text-center">
        पात्रता और आवश्यक दस्तावेज़
      </h1>
      <h1 className="text-lg text-center mb-6">
        एम.पी.एस.ओ.एस.ई.बी. परीक्षाओं में प्रवेश के लिए निम्नलिखित योग्यता और
        दस्तावेज़ आवश्यक हैं:
      </h1>

      {/* Eligibility Table */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-red-500 text-white">
              <th className="border border-gray-300 px-4 py-2 text-left">
                श्रेणी
              </th>
              <th className="border border-gray-300 px-4 py-2 text-left">
                विवरण
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-gray-100">
              <td className="border border-gray-300 px-4 py-2 font-semibold">
                न्यूनतम आयु
              </td>
              <td className="border border-gray-300 px-4 py-2">
                कोई प्रतिबंध नहीं
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2 font-semibold">
                अधिकतम आयु
              </td>
              <td className="border border-gray-300 px-4 py-2">
                कोई प्रतिबंध नहीं
              </td>
            </tr>
            <tr className="bg-gray-100">
              <td className="border border-gray-300 px-4 py-2 font-semibold">
                जन्म प्रमाण पत्र आवश्यक
              </td>
              <td className="border border-gray-300 px-4 py-2">
                - अंतिम अध्ययन किए गए विद्यालय से स्थानांतरण प्रमाण पत्र या
                कक्षा 5वीं, 8वीं या 10वीं की मूल अंक सूची।
                <br />
                - ग्राम पंचायत, नगर परिषद या निगम द्वारा जारी जन्म प्रमाण पत्र
                की प्रमाणित प्रति।
                <br />- 1989 से पहले जन्मे छात्रों के लिए, यदि उन्होंने किसी
                विद्यालय में प्रवेश नहीं लिया है, तो जन्म तिथि की सही जानकारी
                वाला शपथ पत्र आवश्यक होगा।
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2 font-semibold">
                न्यूनतम शैक्षणिक योग्यता
              </td>
              <td className="border border-gray-300 px-4 py-2">
                कक्षा 8वीं उत्तीर्ण
              </td>
            </tr>
            <tr className="bg-gray-100">
              <td className="border border-gray-300 px-4 py-2 font-semibold">
                अनुसूचित जाति/जनजाति के लिए शुल्क छूट
              </td>
              <td className="border border-gray-300 px-4 py-2">
                सक्षम प्राधिकारी द्वारा जारी जाति प्रमाण पत्र
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2 font-semibold">
                40% या अधिक दिव्यांग छात्रों के लिए शुल्क छूट
              </td>
              <td className="border border-gray-300 px-4 py-2">
                जिला चिकित्सा बोर्ड द्वारा जारी दिव्यांग प्रमाण पत्र
              </td>
            </tr>
            <tr className="bg-gray-100">
              <td className="border border-gray-300 px-4 py-2 font-semibold">
                बीपीएल (गरीबी रेखा से नीचे) कार्ड धारकों के लिए शुल्क छूट
              </td>
              <td className="border border-gray-300 px-4 py-2">
                जिला खाद्य नियंत्रक या मध्य प्रदेश सरकार के अधिकृत प्राधिकारी
                द्वारा जारी प्रमाण पत्र
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-xl font-bold text-center my-6 text-red-600">
        संचालित योजनाएँ
      </h2>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-red-500 text-white">
              <th className="border border-gray-300 px-4 py-2 text-left">
                योजना
              </th>
              <th className="border border-gray-300 px-4 py-2 text-left">
                आवश्यक दस्तावेज़
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-gray-100">
              <td className="border border-gray-300 px-4 py-2 font-semibold">
                सामान्य योजना
              </td>
              <td className="border border-gray-300 px-4 py-2">
                - राजपत्रित अधिकारी द्वारा प्रमाणित जन्म प्रमाण पत्र
                <br />- यदि औपचारिक शिक्षा प्राप्त की गई है, तो स्थानांतरण
                प्रमाण पत्र/मूल अंक सूची
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2 font-semibold">
                पूर्ण क्रेडिट योजना
              </td>
              <td className="border border-gray-300 px-4 py-2">
                - कक्षा 10वीं में अनुत्तीर्ण की मूल एवं प्रमाणित अंक सूची
              </td>
            </tr>
            <tr className="bg-gray-100">
              <td className="border border-gray-300 px-4 py-2 font-semibold">
                आंशिक क्रेडिट योजना
              </td>
              <td className="border border-gray-300 px-4 py-2">
                - किसी मान्यता प्राप्त बोर्ड से प्राप्त कक्षा 10वीं की प्रमाणित
                अंक सूची
              </td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2 font-semibold">
                अंक/ग्रेड सुधार योजना
              </td>
              <td className="border border-gray-300 px-4 py-2">
                - एमपी ओपन स्कूल से उत्तीर्ण कक्षा 10वीं की मूल अंक सूची
              </td>
            </tr>
            <tr className="bg-gray-100">
              <td className="border border-gray-300 px-4 py-2 font-semibold">
                पुनः प्रवेश योजना
              </td>
              <td className="border border-gray-300 px-4 py-2">
                - यदि 9 प्रयासों में उत्तीर्ण नहीं हुए हैं, तो पुनः प्रवेश
                आवश्यक
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <FeeStructureTable />
      <HighSchoolSubjectsTable />
    </div>
  )
}

export default TenthClass
