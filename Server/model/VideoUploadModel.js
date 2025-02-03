const mongoose = require('mongoose')

const videoUploadSchema = new mongoose.Schema(
  {
    sessionYear: {
      type: String,
      required: true,
      enum: ['2023-2024', '2024-2025', '2025-2026'],
    },
    sessionMonth: {
      type: String,
      required: true,
      enum: ['April-October', 'November-March'],
    },
    className: {
      type: String,
      required: true,
      enum: ['10', '12'],
    },
    subject: {
      type: String,
      required: true,
    },
    chapterName: {
      type: String,
      required: true,
    },
    language: {
      type: String,
      required: true,
      enum: ['English', 'Hindi'],
    },
    youtubeLink: {
      type: String,
      required: true,
      validate: {
        validator: function (v) {
          return /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.?be)\/.+$/.test(v)
        },
        message: 'Invalid YouTube link',
      },
    },
  },
  { timestamps: true }
)

const VideoUpload = mongoose.model('VideoUpload', videoUploadSchema)

module.exports = VideoUpload
