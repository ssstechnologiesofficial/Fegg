import React from "react";
import logo from "../../assets/logo.png";

const LogoSection = () => (
  <div className="flex items-center space-x-4">
    <div className="w-20 h-20 rounded-full">
      <img src={logo} alt="Logo" />
    </div>
    <div>
      <h1 className="text-lg font-bold text-gray-800">ABC State Open School</h1>
      <p className="text-sm text-gray-500">(एबीसी स्टेट ओपन स्कूल)</p>
    </div>
  </div>
);

export default LogoSection;
