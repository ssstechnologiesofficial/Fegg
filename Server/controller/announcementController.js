const Announcement = require("../model/announcementModel");


// Create a new announcement
 const createAnnouncement = async (req, res) => {
  try {
    const { date, title, description } = req.body;
    console.log("description", description)
    const newAnnouncement = new Announcement({ date, title, description });
    await newAnnouncement.save();
    res.status(201).json({ message: "Announcement created successfully", newAnnouncement });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all announcements
 const getAllAnnouncements = async (req, res) => {
  try {
    const announcements = await Announcement.find().sort({ createdAt: -1 });
    res.status(200).json(announcements);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a single announcement by ID
const getAnnouncementById = async (req, res) => {
  try {
    const announcement = await Announcement.findById(req.params.id);
    if (!announcement) {
      return res.status(404).json({ message: "Announcement not found" });
    }
    res.status(200).json(announcement);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update an announcement
 const updateAnnouncement = async (req, res) => {
  try {
    const { date, title, description } = req.body;
    const updatedAnnouncement = await Announcement.findByIdAndUpdate(
      req.params.id,
      { date, title, description },
      { new: true }
    );

    if (!updatedAnnouncement) {
      return res.status(404).json({ message: "Announcement not found" });
    }

    res.status(200).json({ message: "Announcement updated successfully", updatedAnnouncement });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete an announcement
 const deleteAnnouncement = async (req, res) => {
  try {
    const deletedAnnouncement = await Announcement.findByIdAndDelete(req.params.id);

    if (!deletedAnnouncement) {
      return res.status(404).json({ message: "Announcement not found" });
    }

    res.status(200).json({ message: "Announcement deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
module.exports = {
    createAnnouncement, getAllAnnouncements, getAnnouncementById,updateAnnouncement, deleteAnnouncement
  };
  