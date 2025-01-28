import React from "react";

const Register = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center p-4">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-4xl">
        <h1 className="text-2xl font-bold text-center mb-6">STUDENT REGISTRATION</h1>

        <form className="space-y-4">
          <div className="grid grid-cols-3 gap-4">
            {/* Student's Name */}
            <div className="col-span-3">
              <label className="block font-medium">Student First Name *</label>
              <input type="text" placeholder="Eg. Ved" className="w-full border rounded p-2" />
            </div>
            <div>
              <label className="block font-medium">Middle Name</label>
              <input type="text" placeholder="Eg. Prakash" className="w-full border rounded p-2" />
            </div>
            <div>
              <label className="block font-medium">Last Name *</label>
              <input type="text" placeholder="Eg. Mishra" className="w-full border rounded p-2" />
            </div>
          </div>

          {/* Parent's Names */}
          <div className="grid grid-cols-3 gap-4">
            <div className="col-span-3">
              <label className="block font-medium">Father's First Name *</label>
              <input type="text" placeholder="Eg. Prakash" className="w-full border rounded p-2" />
            </div>
            <div>
              <label className="block font-medium">Middle Name</label>
              <input type="text" placeholder="Eg. Prakash" className="w-full border rounded p-2" />
            </div>
            <div>
              <label className="block font-medium">Last Name *</label>
              <input type="text" placeholder="Eg. Mishra" className="w-full border rounded p-2" />
            </div>
          </div>

          {/* Mother's Names */}
          <div className="grid grid-cols-3 gap-4">
            <div className="col-span-3">
              <label className="block font-medium">Mother's First Name *</label>
              <input type="text" placeholder="Eg. Laxmi" className="w-full border rounded p-2" />
            </div>
            <div>
              <label className="block font-medium">Middle Name</label>
              <input type="text" placeholder="-" className="w-full border rounded p-2" />
            </div>
            <div>
              <label className="block font-medium">Last Name *</label>
              <input type="text" placeholder="Eg. Mishra" className="w-full border rounded p-2" />
            </div>
          </div>

          {/* Permanent Address */}
          <div>
            <label className="block font-medium">Permanent Address *</label>
            <input
              type="text"
              placeholder="House no. 12, Shwetamber Gali..."
              className="w-full border rounded p-2"
            />
          </div>

          {/* Additional Details */}
          <div className="grid grid-cols-3 gap-4">
            <div>
              <label className="block font-medium">Block</label>
              <input type="text" placeholder="Dakshin Phulera" className="w-full border rounded p-2" />
            </div>
            <div>
              <label className="block font-medium">Village</label>
              <input type="text" placeholder="Phulera" className="w-full border rounded p-2" />
            </div>
            <div>
              <label className="block font-medium">District</label>
              <input type="text" placeholder="Vidisha" className="w-full border rounded p-2" />
            </div>
          </div>

          {/* DOB and Gender */}
          <div className="grid grid-cols-3 gap-4">
            <div>
              <label className="block font-medium">Date of Birth *</label>
              <input type="date" className="w-full border rounded p-2" />
            </div>
            <div>
              <label className="block font-medium">Age on Date</label>
              <input type="number" placeholder="16" className="w-full border rounded p-2" />
            </div>
            <div>
              <label className="block font-medium">Gender *</label>
              <select className="w-full border rounded p-2">
                <option>Male</option>
                <option>Female</option>
              </select>
            </div>
          </div>

          {/* Other Details */}
          <div className="grid grid-cols-3 gap-4">
            <div>
              <label className="block font-medium">Religion</label>
              <input type="text" placeholder="Hindu" className="w-full border rounded p-2" />
            </div>
            <div>
              <label className="block font-medium">Social Category</label>
              <select className="w-full border rounded p-2">
                <option>General</option>
                <option>SC</option>
                <option>ST</option>
                <option>OBC</option>
              </select>
            </div>
            <div>
              <label className="block font-medium">Contact No *</label>
              <input
                type="text"
                placeholder="9424456596"
                className="w-full border rounded p-2"
              />
            </div>
          </div>

          {/* Submit Buttons */}
          <div className="flex justify-center gap-4">
            <button
              type="reset"
              className="bg-red-500 text-white px-6 py-2 rounded-lg shadow hover:bg-red-600"
            >
              CLEAR
            </button>
            <button
              type="submit"
              className="bg-green-500 text-white px-6 py-2 rounded-lg shadow hover:bg-green-600"
            >
              SUBMIT
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
