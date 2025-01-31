const mongoose = require('mongoose')

const ebookSchema = new mongoose.Schema(
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
    Volume: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
)

const Ebook = mongoose.model('Ebook', ebookSchema)
module.exports = Ebook
