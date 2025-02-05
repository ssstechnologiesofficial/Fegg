
const moment = require("moment");// assuming you have the Student model defined as shown earlier
const studentRegister = require("../model/studentRegister");
// Function to generate the learnerId
const generateLearnerId = async (lastClassStudied) => {
  const currentDate = new Date();
  const year = currentDate.getFullYear().toString().slice(2); // Last two digits of year
  const month = ("0" + (currentDate.getMonth() + 1)).slice(-2); // Two digits of month
  const date = ("0" + currentDate.getDate()).slice(-2); // Two digits of date
  const classDigit = lastClassStudied === "10th" ? "2" : "1"; // Class representation

  // Count students registered on the same date
  const studentCount = await Student.countDocuments({
    createdAt: {
      $gte: new Date(currentDate.setHours(0, 0, 0, 0)),
      $lt: new Date(currentDate.setHours(23, 59, 59, 999)),
    },
  });

  const count = ("00000" + (studentCount + 1)).slice(-5); // Five-digit counter

  return `EG${year}${month}${date}${classDigit}${count}`;
};

// POST controller to register a new student
const registerStudent = async (req, res) => {
  
  try {
    const { lastClassStudied, ...studentData } = req.body;

    if (!lastClassStudied) {
      return res.status(400).json({ error: "Last class studied is required" });
    }

    const learnerId = await generateLearnerId(lastClassStudied);

    const newStudent = new studentRegister({ ...studentData, lastClassStudied, learnerId });
    await newStudent.save();

    res.status(201).json({ message: "Student registered successfully", learnerId });
  } catch (error) {
    res.status(500).json({ error: error.message });
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