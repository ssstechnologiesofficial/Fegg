const mocksetModel = require('../../model/practiceset/mocksetModel')
const TestResult = require('../../model/practiceset/resultModel')

exports.submitTest = async (req, res) => {
  try {
    const { mockSetId, learnerId, learnerName, correctAnswers, wrongAnswers, score } = req.body;

    // if (!mockSetId || !learnerId || !learnerName) {
    //   return res.status(400).json({ message: "All fields are required." });
    // }

    const newTestResult = new TestResult({
      mockSetId,
      learnerId,
      learnerName,
      correctAnswers,
      wrongAnswers,
      score,
    });

    await newTestResult.save();
    res.status(201).json({ message: "Test result submitted successfully!", testResult: newTestResult });
  } catch (error) {
    res.status(500).json({ message: "Error submitting test result.", error: error.message });
  }
}

exports.getTestResults = async (req, res) => {
  try {
    const { resultId } = req.params
    const testResult = await TestResult.findById(resultId)

    if (!testResult) {
      return res
        .status(404)
        .json({ success: false, message: 'Result not found' })
    }

    return res.status(200).json({ success: true, data: testResult })
  } catch (error) {
    console.error('Error fetching test result:', error)
    res.status(500).json({ success: false, message: 'Internal Server Error' })
  }
}
