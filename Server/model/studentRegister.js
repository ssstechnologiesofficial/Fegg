const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true },
    middleName: { type: String },
    lastName: { type: String, required: true },
    fatherFirstName: { type: String, required: true },
    fatherMiddleName: { type: String },
    fatherLastName: { type: String, required: true },
    motherFirstName: { type: String },
    motherMiddleName: { type: String },
    motherLastName: { type: String },
    permanentAddress: { type: String, required: true },
    block: { type: String },
    village: { type: String },
    district: { type: String },
    dob: { type: Date, required: true },
    age: { type: Number, required: true },
    gender: { type: String, enum: ["Male", "Female"], required: true },
    religion: { type: String },
    category: { type: String, enum: ["General", "SC", "ST", "OBC"], required: true },
    contactNo: { type: String, required: true, unique: true },
    sssmid: { type: Number, required: true,validate: {
      validator: function(v) {
        return /^\d{9}$/.test(v.toString()); 
      },
      message: props => `${props.value} is not a valid 9-digit number!`
    } },
    learnerId: { type: String, unique: true, required: true },
    lastClassStudied: { type: String, required: true },
    status: { type: String, enum: ["Pass", "Fail"], required: true },
  },
  { timestamps: true }
);

const studentRegister = mongoose.model("Students", studentSchema);
module.exports =studentRegister;