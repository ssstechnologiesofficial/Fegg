const mongoose = require('mongoose')

const testResultSchema = new mongoose.Schema({
  userName: { type: String, required: true },
  learnerid: { type: String, required: true },
  mockSetId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'MockSet',
    required: true,
  },
  // mocktype: { type: String, required: true },
  score: { type: Number, required: true },
  correctAnswers: { type: Number, required: true },
  wrongAnswers: { type: Number, required: true },
  totalQuestions: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now },
})

const TestResult = mongoose.model('TestResult', testResultSchema)

module.exports = TestResult
