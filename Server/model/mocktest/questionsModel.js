const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
  subjectId: { type: mongoose.Schema.Types.ObjectId, ref: 'Subject', required: true },
  questionText: { type: String, required: true },
  language: { type: String,  },
  classMock: { type: String,  },
  options: [
    {
      optionText: { type: String, required: true },
      isCorrect: { type: Boolean, default: false },
    },
  ],
  createdAt: { type: Date, default: Date.now },
});

const Question = mongoose.model('Question', questionSchema);

module.exports = Question;
