import React from "react";
import logo from "../../assets/logo.png";
import logo1 from "../../assets/MPSOSLogo.png";

const LogoSection = () => (
  <div className="flex justify-between items-center w-full">
    {/* Left Side - First Logo and Text */}
    <div className="flex items-center space-x-4">
      <div className="w-20 h-20 rounded-full">
        <img src={logo} alt="Logo" />
      </div>
      <div>
        <h1 className="text-lg font-bold text-gray-800">
          Foundation to Educate Girls Globally
        </h1>
        {/* <p className="text-sm text-gray-500">(एबीसी स्टेट ओपन स्कूल)</p> */}
      </div>
    </div>

    {/* Right Side - Second Logo and Text (Vertically Aligned) */}
    <div className="flex  items-center space-y-2">
      <div className="text-end">
        <h1 className="text-md font-bold text-gray-800">
          मध्य प्रदेश राज्य मुक्त स्कूल शिक्षा बोर्ड
        </h1>
        <p className="text-md font-bold text-gray-800">प्रदेश शासन, स्कूल शिक्षा विभाग</p>
      </div>
      <div className="w-20 h-20 rounded-full">
        <img src={logo1} alt="Second Logo" className="object-contain" />
      </div>
    </div>
  </div>
);

export default LogoSection;
