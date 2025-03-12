import React from "react";

const TermsAndConditions = () => {
  return (
    <div className=" text-gray-900 p-6 sm:p-10 lg:p-16">
      <div className="max-w-4xl mx-auto bg-white p-6 sm:p-10 shadow-lg rounded-lg border-2 border-red-500">
        <h1 className="text-3xl sm:text-4xl font-bold text-red-600 text-center mb-6">
          नियम और शर्तें
        </h1>
        <p className="mb-4">
          इस साइट का उपयोग एजुकेट गर्ल्स द्वारा निम्नलिखित नियमों और शर्तों के अधीन प्रदान किया जाता है:
        </p>
        <ul className="list-decimal list-inside space-y-4 text-gray-700">
          <li>
            आपकी पहली बार साइट का उपयोग करने की तारीख से ये नियम और शर्तें लागू होती हैं।
          </li>
          <li>
            एजुकेट गर्ल्स को कभी भी ऑनलाइन परिवर्तन पोस्ट करके इन शर्तों और नियमों को बदलने का अधिकार है।
          </li>
          <li>
            आप इस साइट का उपयोग केवल कानूनी उद्देश्यों के लिए करने के लिए सहमत हैं।
          </li>
          <li>
            यह साइट "जैसा है" के आधार पर प्रदान की जाती है, बिना किसी प्रतिनिधित्व या समर्थन के।
          </li>
          <li>
            एजुकेट गर्ल्स यह गारंटी नहीं देता कि यह साइट त्रुटि मुक्त होगी।
          </li>
        </ul>
        <h2 className="text-2xl font-semibold text-red-600 mt-6">कॉपीराइट प्रतिबंध</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>इस साइट की किसी भी सामग्री का व्यावसायिक उपयोग बिना अनुमति के प्रतिबंधित है।</li>
          <li>दस्तावेज़ों की केवल व्यक्तिगत उपयोग के लिए प्रतिलिपि बनाई जा सकती है।</li>
          <li>एजुकेट गर्ल्स बाहरी इंटरनेट साइटों की सामग्री के लिए जिम्मेदार नहीं है।</li>
        </ul>
        <h2 className="text-2xl font-semibold text-red-600 mt-6">रद्दीकरण और धनवापसी नीति</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>एक बार दान किया गया धन वापस नहीं किया जा सकता।</li>
          <li>विशेष परिस्थितियों में समीक्षा की जा सकती है।</li>
          <li>सभी दान आयकर अधिनियम की धारा 80G के तहत कर कटौती के लिए पात्र होंगे।</li>
        </ul>
        <h2 className="text-2xl font-semibold text-red-600 mt-6">संपर्क करें</h2>
        <p className="text-gray-700">
          यदि आपको हमारी गोपनीयता नीति या कॉपीराइट प्रतिबंधों के बारे में कोई चिंता है, तो कृपया हमसे संपर्क करें:
        </p>
        <p className="mt-2 font-semibold text-red-600">info@educategirls.in | +91-22-26303555</p>
      </div>
    </div>
  );
};

export default TermsAndConditions;
