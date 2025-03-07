const session = require('../model/SessionModel')

const updateSession = async (req, res) => {
  try {
    const { year, month } = req.body
    const newSession = new session({ year, month })
    await newSession.save()
    res.status(201).json(newSession)
  } catch (error) {
    res.status(500).json({ error: 'Failed to add session' })
  }
}

const Getsession = async (req, res) => {
  try {
    const sessions = await session.find()
    res.status(200).json(sessions)
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch sessions' })
  }
}

module.exports = { updateSession, Getsession }
