import React from "react";
import logo from "../../assets/logo.png";
import logo1 from "../../../public/mpsos_logo.png";

const LogoSection = () => (
  <div className="flex justify-between items-center w-full">
    <div className="flex items-center space-x-4">
      <div className="w-20 h-20 rounded-full">
        <img src={logo} alt="Logo" />
      </div>
      <div>
        <h1 className="text-lg font-bold text-gray-800">
          Foundation to Educate Girls Globally
        </h1>
        <p className="text-sm text-gray-500">(एबीसी स्टेट ओपन स्कूल)</p>
      </div>
    </div>

    {/* Second Logo at the right end */}
    <div className="rounded-full flex justify-end">
      <img src={logo1} alt="Second Logo" className="object-contain w-60" />
    </div>
  </div>
);

export default LogoSection;
