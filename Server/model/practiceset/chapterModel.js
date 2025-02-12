const mongoose = require("mongoose");

const chapterSchema = new mongoose.Schema({
  title: String,
  subject: { type: mongoose.Schema.Types.ObjectId, ref: "Subject" },
  className: String,
});

module.exports = mongoose.model("Chapter", chapterSchema);
