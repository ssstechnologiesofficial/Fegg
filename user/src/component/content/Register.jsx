



import React, { useState } from "react";
import axios from "axios";
import SummaryApi from "../../common/SummaryApi";

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    fatherFirstName: "",
    fatherMiddleName: "",
    fatherLastName: "",
    permanentAddress: "",
    block: "",
    village: "",
    district: "",
    tehsil: "",
    pincode: "",
    dob: "",
    age: "",
    gender: "",
    religion: "",
    category: "",
    contactNo: "",
    sssmid: "",
    lastClassStudied: "",
    applyFor: "",
    status: "",
  });

  // Data for districts, tehsils, and blocks
  const districtData = {
    Agarmalwa: {
      tehsils: ["Agar", "Badod", "Nalkheda", "Soyatkala", "Susner"],
      blocks: ["Agar", "Barod", "Nalkheda", "Susner"],
    },
    Alirajpur: {
      tehsils: ["Alirajpur", "Chandra Shekhar Azad Nagar", "Jobat", "Katthiwara", "Sondawa"],
      blocks: ["Alirajpur", "Bhabra", "Jobat", "Katthiwada", "Sondwa", "Udaigar"],
    },
    // Add more districts here as needed
  };

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => {
      const newData = { ...prevData, [name]: value };
      
      // When district changes, reset tehsil and block
      if (name === "district") {
        newData.tehsil = "";  // Reset tehsil
        newData.block = "";    // Reset block
      }

      return newData;
    });
  };

  // Handle date of birth change and calculate age
  const handleDobChange = (e) => {
    const dob = e.target.value;
    setFormData((prevData) => {
      const newData = { ...prevData, dob };

      // Calculate age based on DOB
      const age = calculateAge(dob);
      newData.age = age;

      return newData;
    });
  };

  // Function to calculate age based on DOB
  const calculateAge = (dob) => {
    const today = new Date();
    const birthDate = new Date(dob);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();

    // Adjust age if the birthday hasn't occurred yet this year
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }

    return age;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.status === "Fail" && formData.lastClassStudied === "5th") {
      alert("You are not eligible");
      return;
    }

    // Age validation: Student should be 18 or above
    if (formData.age < 18) {
      alert("You must be 18 years or older to register.");
      return;
    }

    try {
      const response = await axios.post("http://localhost:8006/api/register", formData); // replace with your API URL
      if (response.status === 200) {
        alert("Registration successful");
      }
    } catch (error) {
      console.error("There was an error during registration:", error);
      alert("Registration failed. Please try again.");
    }
  };

  const districtOptions = Object.keys(districtData);

  const tehsilOptions = formData.district ? districtData[formData.district]?.tehsils : [];
  const blockOptions = formData.district ? districtData[formData.district]?.blocks : [];

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center p-4">
    <div className="bg-white p-6 border border-[#fe0000] rounded-xl border-r-4 border-b-4 shadow-lg w-full max-w-4xl">
      <h1 className="text-2xl font-bold text-center mb-6">STUDENT REGISTRATION</h1>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div className="grid grid-cols-3 gap-4">
          <label className="block">First Name <span className="text-red-500">*</span>
            <input type="text" name="firstName" placeholder="Enter First Name" className="w-full border rounded p-2" onChange={handleChange} required />
          </label>
          <label className="block">Middle Name
            <input type="text" name="middleName" placeholder="Enter Middle Name" className="w-full border rounded p-2" onChange={handleChange} />
          </label>
          <label className="block">Last Name <span className="text-red-500">*</span>
            <input type="text" name="lastName" placeholder="Enter Last Name" className="w-full border rounded p-2" onChange={handleChange} required />
          </label>
        </div>
        
        <div className="grid grid-cols-3 gap-4">
          <label className="block">Father's First Name <span className="text-red-500">*</span>
            <input type="text" name="fatherFirstName" placeholder="Enter Father's First Name" className="w-full border rounded p-2" onChange={handleChange} required />
          </label>
          <label className="block">Father's Middle Name
            <input type="text" name="fatherMiddleName" placeholder="Enter Father's Middle Name" className="w-full border rounded p-2" onChange={handleChange} />
          </label>
          <label className="block">Father's Last Name <span className="text-red-500">*</span>
            <input type="text" name="fatherLastName" placeholder="Enter Father's Last Name" className="w-full border rounded p-2" onChange={handleChange} required />
          </label>
        </div>
  
        <label className="block">Permanent Address <span className="text-red-500">*</span>
          <input type="text" name="permanentAddress" placeholder="Enter Permanent Address" className="w-full border rounded p-2" onChange={handleChange} required />
        </label>
        
        <div className="grid grid-cols-3 gap-4">
            <label className="block">District <span className="text-red-500">*</span>
              <select name="district" className="w-full border rounded p-2" onChange={handleChange} required>
                <option value="">Select District</option>
                {districtOptions.map((district) => (
                  <option key={district} value={district}>{district}</option>
                ))}
              </select>
            </label>
            <label className="block">Tehsil / Sub-District <span className="text-red-500">*</span>
              <select name="tehsil" className="w-full border rounded p-2" onChange={handleChange} required>
                <option value="">Select Tehsil</option>
                {tehsilOptions.map((tehsil) => (
                  <option key={tehsil} value={tehsil}>{tehsil}</option>
                ))}
              </select>
            </label>
            <label className="block">Block <span className="text-red-500">*</span>
              <select name="block" className="w-full border rounded p-2" onChange={handleChange} required>
                <option value="">Select Block</option>
                {blockOptions.map((block) => (
                  <option key={block} value={block}>{block}</option>
                ))}
              </select>
            </label>
            <label className="block">Village
              <input type="number" name="village" className="w-full border rounded p-2" onChange={handleChange} required />
            </label>
            <label className="block">Pincode <span className="text-red-500">*</span>
              <input type="number" name="pincode" className="w-full border rounded p-2" onChange={handleChange} required />
            </label>
          </div>
        
         {/* DOB and Age calculation */}
         <div className="grid grid-cols-3 gap-4">
            <label className="block">Date of Birth <span className="text-red-500">*</span>
              <input type="date" name="dob" className="w-full border rounded p-2" onChange={handleDobChange} required />
            </label>
            <label className="block">Age <span className="text-red-500">*</span>
              <input type="number" name="age" value={formData.age} className="w-full border rounded p-2" readOnly />
            </label>
            <label className="block">Gender <span className="text-red-500">*</span>
              <select name="gender" className="w-full border rounded p-2" onChange={handleChange} required>
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Others">Others</option>
              </select>
            </label>
          </div>
        
        <div className="grid grid-cols-3 gap-4">
          <label className="block">Religion <span className="text-red-500">*</span>
            <select name="religion" className="w-full border rounded p-2" onChange={handleChange} required>
              <option value="">Select Category</option>
              <option value="Hindu">Hindu</option>
              <option value="Muslim">Muslim</option>
              <option value="Buddhist">Buddhist</option>
              <option value="Christian">Christian</option>
              <option value="Jewish">Jewish</option>
              <option value="Parsi">Parsi</option>
              <option value="Sikh">Sikh</option>
              <option value="Jain">Jain</option>
              <option value="Others">Others</option>
            </select>
          </label>
          <label className="block">Category <span className="text-red-500">*</span>
            <select name="category" className="w-full border rounded p-2" onChange={handleChange} required>
              <option value="">Select Category</option>
              <option value="General">General</option>
              <option value="SC">SC</option>
              <option value="ST">ST</option>
              <option value="OBC">OBC</option>
              <option value="OBC">EWS</option>
            </select>
          </label>
          <label className="block">Contact No <span className="text-red-500">*</span>
            <input type="text" name="contactNo" placeholder="Enter Contact No" className="w-full border rounded p-2" onChange={handleChange} required />
          </label>
        </div>
        <div className="grid grid-cols-3 gap-4">
            <label className="block">
              SSSM ID <span className="text-red-500">*</span>
              <input
                type="number"
                name="sssmid"
                placeholder="Enter 9 digit samagra id"
                className="w-full border rounded p-2"
                onChange={handleChange}
                required
              />
            </label>
            <label className="block">Last Class Studied <span className="text-red-500">*</span>
              <select name="lastClassStudied" className="w-full border rounded p-2" onChange={handleChange} required>
                <option value="">Select Last Class Studied</option>
                <option value="10th">10th</option>
                <option value="9th">9th</option>
                <option value="8th">8th</option>
                <option value="7th">7th</option>
                <option value="6th">6th</option>
                <option value="5th">5th</option>
              </select>
            </label>
           
            <label className="block">
              Status <span className="text-red-500">*</span>
              <select
                name="status"
                className="w-full border rounded p-2"
                onChange={handleChange}
                required
              >
                <option value="">Status (Pass/Fail)</option>
                <option value="Pass">Pass</option>
                <option value="Fail">Fail</option>
              </select>
            </label>
            <label className="block">Student Applying For <span className="text-red-500">*</span>
              <select name="applyFor" className="w-full border rounded p-2" onChange={handleChange} required>
                <option value="">Select Option</option>
                <option value="New Student">New Student</option>
                <option value="TOC">TOC</option>
                <option value="SYC">SYC</option>
              </select>
            </label>
          </div>
        <div className="flex justify-center gap-4">
          <button type="reset" className="bg-red-500 text-white px-6 py-2 rounded-lg shadow hover:bg-red-600">CLEAR</button>
          <button type="submit" className="bg-green-500 text-white px-6 py-2 rounded-lg shadow hover:bg-green-600">SUBMIT</button>
        </div>
      </form>
    </div>
  </div>
  
  );
};

export default Register;
