import React, { useState } from "react";
import axios from "axios";

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
    dob: "",
    age: "",
    gender: "",
    religion: "",
    category: "",
    contactNo: "",
    sssmid: "",
    lastClassStudied: "",
    status: ""
  });

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

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
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center p-4">
    <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-4xl">
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
          <label className="block">Block
            <input type="text" name="block" placeholder="Enter Block" className="w-full border rounded p-2" onChange={handleChange} />
          </label>
          <label className="block">Village
            <input type="text" name="village" placeholder="Enter Village" className="w-full border rounded p-2" onChange={handleChange} />
          </label>
          <label className="block">District
            <input type="text" name="district" placeholder="Enter District" className="w-full border rounded p-2" onChange={handleChange} />
          </label>
        </div>
        
        <div className="grid grid-cols-3 gap-4">
          <label className="block">Date of Birth <span className="text-red-500">*</span>
            <input type="date" name="dob" className="w-full border rounded p-2" onChange={handleChange} required />
          </label>
          <label className="block">Age <span className="text-red-500">*</span>
            <input type="number" name="age" placeholder="Enter Age" className="w-full border rounded p-2" onChange={handleChange} required />
          </label>
          <label className="block">Gender <span className="text-red-500">*</span>
            <select name="gender" className="w-full border rounded p-2" onChange={handleChange} required>
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </label>
        </div>
        
        <div className="grid grid-cols-3 gap-4">
          <label className="block">Religion
            <input type="text" name="religion" placeholder="Enter Religion" className="w-full border rounded p-2" onChange={handleChange} />
          </label>
          <label className="block">Category <span className="text-red-500">*</span>
            <select name="category" className="w-full border rounded p-2" onChange={handleChange} required>
              <option value="">Select Category</option>
              <option value="General">General</option>
              <option value="SC">SC</option>
              <option value="ST">ST</option>
              <option value="OBC">OBC</option>
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
                className="w-full border rounded p-2"
                onChange={handleChange}
                required
              />
            </label>
            <label className="block">
              Last Class Studied <span className="text-red-500">*</span>
              <input
                type="text"
                name="lastClassStudied"
                className="w-full border rounded p-2"
                onChange={handleChange}
                required
              />
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
