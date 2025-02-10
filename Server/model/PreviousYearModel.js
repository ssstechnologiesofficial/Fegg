const mongoose = require('mongoose')

const PreviousPaper = new mongoose.Schema(
  {
    sessionYear: {
      type: String,
      required: true,
    },
    sessionMonth: {
      type: String,
      required: true,
    },
    className: {
      type: String,
      required: true,
    },
    subject: {
      type: String,
      required: true,
    },
    language: {
      type: String,
      required: true,
    },
    file: {
      type: String, // Store the file URL after uploading
      required: true,
    },
  },
  { timestamps: true }
)

const PreviousPaperModel = mongoose.model('PreviousPaperModel', PreviousPaper)
module.exports = PreviousPaperModel
