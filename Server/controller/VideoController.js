const VideoUpload = require('../model/VideoUploadModel')

// Get all uploaded videos
exports.getVideos = async (req, res) => {
  try {
    const { className } = req.query
    const query = className ? { className } : {}
    const videos = await VideoUpload.find(query)
    res.status(200).json(videos)
  } catch (error) {
    res.status(500).json({ message: 'Error fetching videos', error })
  }
}

// Upload a new video
exports.uploadVideo = async (req, res) => {
  try {
    const newVideo = new VideoUpload(req.body)
    await newVideo.save()
    res.status(201).json(newVideo)
  } catch (error) {
    res.status(400).json({ message: 'Error uploading video', error })
  }
}

// Update an existing video
exports.updateVideo = async (req, res) => {
  try {
    const updatedVideo = await VideoUpload.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    )
    if (!updatedVideo) {
      return res.status(404).json({ message: 'Video not found' })
    }
    res.status(200).json(updatedVideo)
  } catch (error) {
    res.status(400).json({ message: 'Error updating video', error })
  }
}

// Delete a video
exports.deleteVideo = async (req, res) => {
  try {
    const deletedVideo = await VideoUpload.findByIdAndDelete(req.params.id)
    if (!deletedVideo) {
      return res.status(404).json({ message: 'Video not found' })
    }
    res.status(200).json({ message: 'Video deleted successfully' })
  } catch (error) {
    res.status(500).json({ message: 'Error deleting video', error })
  }
}
