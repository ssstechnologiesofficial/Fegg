const ResultAdmitcardUrl = require("../model/resultAdmitcardUrl");

// Upload Result & Admit Card URL
exports.uploadResultAdmitUrls = async (req, res) => {
  try {
    const { resultUrl, admitCardUrl, liveStreamUrl } = req.body;

    const newEntry = new ResultAdmitcardUrl({
      resultUrl,
      admitCardUrl,
      liveStreamUrl,
    });
      await newEntry.save();
  
      res.status(201).json({ message: "URLs uploaded successfully", newEntry });
    } catch (error) {
      res.status(500).json({ message: "Internal Server Error", error });
    }
  };
  
  // PUT API - Update Result & Admit Card URLs by ID
  exports.updateResultAdmitUrls = async (req, res) => {
    try {
      const { id } = req.params;
      const { resultUrl, admitCardUrl, liveStreamUrl } = req.body;
  
      const updatedEntry = await ResultAdmitcardUrl.findByIdAndUpdate(
        id,
        { resultUrl, admitCardUrl, liveStreamUrl },
        { new: true }
      );
  
      if (!updatedEntry) {
        return res.status(404).json({ message: "Entry not found" });
      }
  
      res.status(200).json({ message: "URLs updated successfully", updatedEntry });
    } catch (error) {
      res.status(500).json({ message: "Error updating URLs", error });
    }
  };
  

// Fetch all results
exports.getResultAdmitcardurl = async (req, res) => {
  try {
    const results = await ResultAdmitcardUrl.find();
    res.status(200).json(results);
  } catch (error) {
    res.status(500).json({ message: "Error fetching results", error });
  }
};

// DELETE API - Delete Result & Admit Card URL by ID
exports.deleteResultAdmitUrl = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedEntry = await ResultAdmitcardUrl.findByIdAndDelete(id);

    if (!deletedEntry) {
      return res.status(404).json({ message: "Entry not found" });
    }

    res.status(200).json({ message: "Entry deleted successfully", deletedEntry });
  } catch (error) {
    res.status(500).json({ message: "Error deleting entry", error });
  }
};

