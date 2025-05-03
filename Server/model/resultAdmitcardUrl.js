const mongoose = require("mongoose");

const resultAdmitSchema = new mongoose.Schema({

  resultUrl: { type: String, required: true },
  admitCardUrl: { type: String, required: true },
  liveStreamUrl: { type: String, required: false },
});

const ResultAdmitcardUrl = mongoose.model("ResultAdmitcardUrl", resultAdmitSchema);
module.exports = ResultAdmitcardUrl;
