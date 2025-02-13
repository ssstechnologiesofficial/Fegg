const mocksetModel = require('../../model/practiceset/mocksetModel')
const TestResult = require('../../model/practiceset/resultModel')

exports.submitTest = async (req, res) => {
  console.log(req.body)
  try {
    const { mockSetId, answers, userName, learnerid } = req.body

    // Fetch the mock test along with the questions 
    const mockTest = await mocksetModel
      .findById(mockSetId)
      .populate('questions.questionId')
    if (!mockTest) {
      return res
        .status(404)
        .json({ success: false, message: 'Mock Test not found' })
    }

    let score = 0
    let correctAnswers = 0
    let wrongAnswers = 0

    // Evaluate answers
    mockTest.questions.forEach((question) => {
      const questionId = question.questionId._id.toString();
      const correctOption = question.questionId.options.find((option) => option.isCorrect);
    
      console.log("Question ID:", questionId);
      console.log("User Answer:", answers[questionId]);
      console.log("Correct Answer ID:", correctOption ? correctOption._id.toString() : "No Correct Option");
    
      if (correctOption && answers[questionId] === correctOption._id.toString()) {
        score += question.marks; // Add marks for correct answer
        correctAnswers++;
      } else {
        wrongAnswers++;
      }
    });
    

    const totalQuestions = mockTest.questions.length

    // Save the result, including the mockType
    const result = new TestResult({
      userName,
      learnerid,
      mockSetId,
      score,
      correctAnswers,
      wrongAnswers,
      totalQuestions,
    })
    console.log(result)
    await result.save()

    return res
      .status(200)
      .json({ success: true, message: 'Test submitted successfully', result })
  } catch (error) {
    console.error('Error submitting test:', error)
    res.status(500).json({ success: false, error: error.message })
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
