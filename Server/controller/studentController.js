
const moment = require("moment");// assuming you have the Student model defined as shown earlier
const studentRegister = require("../model/studentRegister");


// Function to generate the learnerId
const generateLearnerId = async (classStudied) => {
  const currentDate = moment(); // Get the current date
  const year = currentDate.year().toString().slice(-2); // Last 2 digits of the year
  const month = currentDate.month() + 1; // Get current month (1-indexed)
  const day = currentDate.date(); // Get current day

  // Get the first 2 digits (class number) based on the class studied
  let classDigit = classStudied === "10" ? "1" : classStudied === "12" ? "2" : "0"; // You can expand this logic if needed

  // Generate the learnerId using the required format
  const datePart = `${year}${month.toString().padStart(2, "0")}${day.toString().padStart(2, "0")}`;
  const classPart = classDigit;

  const lastStudent = await studentRegister.findOne().sort({ learnerId: -1 }); // Find the last student to get the highest learnerId
  const serialNumber = lastStudent ? parseInt(lastStudent.learnerId.slice(-5)) + 1 : 1; // Increment the serial number by 1 for the next registration

  return `EG${datePart}${classPart}${serialNumber.toString().padStart(5, "0")}`;
};

// POST controller to register a new student
const registerStudent = async (req, res) => {
  try {
    const {
      firstName,
      middleName,
      lastName,
      fatherFirstName,
      fatherMiddleName,
      fatherLastName,
      motherFirstName,
      motherMiddleName,
      motherLastName,
      permanentAddress,
      block,
      village,
      district,
      dob,
      age,
      gender,
      religion,
      category,
      contactNo,
      sssmid,
      lastClassStudied,
      status,
    } = req.body;

    // Generate a unique learner ID
    const learnerId = await generateLearnerId(lastClassStudied);

    // Create a new student document
    const newStudent = new studentRegister({
      firstName,
      middleName,
      lastName,
      fatherFirstName,
      fatherMiddleName,
      fatherLastName,
      motherFirstName,
      motherMiddleName,
      motherLastName,
      permanentAddress,
      block,
      village,
      district,
      dob,
      age,
      gender,
      religion,
      category,
      contactNo,
      sssmid,
      learnerId, // Pass the generated learnerId
      lastClassStudied,
      status,
    });

    // Save the student to the database
    await newStudent.save();

    // Send response with the learner ID
    res.status(201).json({ message: "Registration successful!", learnerId });
  } catch (error) {
    console.error("Error during registration:", error);
    res.status(500).json({ message: "Registration failed. Please try again." });
  }
};


// Get all students
const getAllStudents = async (req, res) => {
    try {
      const students = await studentRegister.find();
      res.status(200).json(students);
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  };
  
  // Get a single student by SSSMID
  const getStudentById = async (req, res) => {
    try {
      const student = await studentRegister.findOne({ sssmid: req.params.sssmid });
      if (!student) {
        return res.status(404).json({ error: "Student not found" });
      }
      res.status(200).json(student);
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  };
  
  // Update student 
  const updateStudent = async (req, res) => {
    try {
      const updatedStudent = await studentRegister.findByIdAndUpdate(
        req.params.id, // Find student by ID
        { $set: req.body }, // Update with new data
        { new: true, runValidators: true } // Return updated document & validate fields
      );
  
      if (!updatedStudent) {
        return res.status(404).json({ error: "Student not found" });
      }
  
      res.status(200).json(updatedStudent);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  };
  
  // Delete student by SSSMID
  const deleteStudent = async (req, res) => {
    try {
      const deletedStudent = await studentRegister.findOneAndDelete(req.params.id );
      if (!deletedStudent) {
        return res.status(404).json({ error: "Student not found" });
      }
      res.status(200).json({ message: "Student deleted successfully" });
    } catch (error) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  };
  
  module.exports = {registerStudent, getAllStudents, getStudentById, updateStudent, deleteStudent };