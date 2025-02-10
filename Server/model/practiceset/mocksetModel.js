// const mongoose = require("mongoose");

// const mockSetSchema = new mongoose.Schema({
//   className: { type: String, required: true },
//   subject: { type: mongoose.Schema.Types.ObjectId, ref: "Subject", required: true },
//   selectedChapters: [{ type: mongoose.Schema.Types.ObjectId, ref: "Chapter" }],
//   numQuestions: { type: Number, required: true },
//   totalMarks: { type: Number, required: true },
//   duration: { type: Number, required: true }, // Time duration in minutes
//   questions: [{ type: mongoose.Schema.Types.ObjectId, ref: "QuestionModel" ,marks: { type: Number },}],
// });

// module.exports = mongoose.model("MockSet", mockSetSchema);


const mongoose = require("mongoose");

const mockSetSchema = new mongoose.Schema({
  className: { type: String, required: true },
  subject: { type: mongoose.Schema.Types.ObjectId, ref: "Subject", required: true },
  selectedChapters: [{ type: mongoose.Schema.Types.ObjectId, ref: "Chapter" }],
  numQuestions: { type: Number, required: true },
  totalMarks: { type: Number, required: true },
  duration: { type: Number, required: true }, // Time duration in minutes
  questions: [
    {
      questionId: { type: mongoose.Schema.Types.ObjectId, ref: "QuestionModel" },
      className: { type: String, required: true },
      language: { type: String },
      questionText: { type: String, required: true },
      options: [
        {
          optionText: { type: String, required: true },
          isCorrect: { type: Boolean, default: false },
        },
      ],
      subject: { type: mongoose.Schema.Types.ObjectId, ref: "Subject" },
      chapter: { type: mongoose.Schema.Types.ObjectId, ref: "Chapter" },
      marks: { type: Number, required: true }, // Add marks for each question
    },
  ],
});

module.exports = mongoose.model("MockSet", mockSetSchema);
