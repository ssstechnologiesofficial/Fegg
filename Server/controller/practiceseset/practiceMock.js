const mongoose = require("mongoose");
const mocksetModel = require("../../model/practiceset/mocksetModel");
const questionModel = require("../../model/practiceset/questionModel");
const subjectModel = require("../../model/practiceset/subjectModel");



exports.createPracticeSet = async (req, res) => {
    try {
      const {
        className,
        subjectId,
        selectedChapters,
        numQuestions,
        totalMarks,
        duration,
        selectedQuestions = [],
      } = req.body;
  
      if (!mongoose.Types.ObjectId.isValid(subjectId)) {
        return res.status(400).json({ success: false, message: "Invalid subject ID" });
      }
  
      const subject = await subjectModel.findById(subjectId);
      if (!subject) {
        return res.status(404).json({ success: false, message: "Subject not found" });
      }
  
      const chapterIds = selectedChapters.map(id => new mongoose.Types.ObjectId(id));
      let questions = [];
      const numQuestionsInt = parseInt(numQuestions);
  
      if (numQuestionsInt > 0) {
        questions = await questionModel.aggregate([
          {
            $match: {
              subject: new mongoose.Types.ObjectId(subjectId),
              className,
              chapter: { $in: chapterIds },
            },
          },
          { $sample: { size: numQuestionsInt } },
        ]);
  
        if (questions.length < numQuestionsInt) {
          return res.status(400).json({
            success: false,
            message: `Only ${questions.length} questions are available in the selected chapters.`,
          });
        }
      } else {
        const selectedQuestionIds = selectedQuestions.map(q => new mongoose.Types.ObjectId(q.questionId));
        questions = await questionModel.find({ _id: { $in: selectedQuestionIds } });
  
        if (questions.length !== selectedQuestionIds.length) {
          return res.status(400).json({
            success: false,
            message: "Some selected questions were not found in the database.",
          });
        }
      }
  
      // Transform question data to include full details and marks
      const formattedQuestions = questions.map(q => ({
        questionId: q._id,
        className: q.className,
        language: q.language,
        questionText: q.questionText,
        options: q.options,
        subject: q.subject,
        chapter: q.chapter,
        marks: selectedQuestions.find(sq => sq.questionId === q._id.toString())?.marks || 1, // Default marks if not provided
      }));
  
      // Create Practice Set
      const practiceSet = new mocksetModel({
        className,
        subject: new mongoose.Types.ObjectId(subjectId),
        selectedChapters: chapterIds,
        numQuestions: questions.length,
        totalMarks,
        duration,
        questions: formattedQuestions,
      });
  
      await practiceSet.save();
  
      return res.status(201).json({ success: true, message: "Practice set created successfully", data: practiceSet });
    } catch (error) {
      console.error("Error creating practice set:", error);
      res.status(500).json({ success: false, message: "Internal Server Error" });
    }
  };
  

//   get 
  exports.getAllMockSets = async (req, res) => {
    try {
      const mockSets = await mocksetModel.find().populate("subject").populate("questions.questionId");
      res.status(200).json({ success: true, data: mockSets });
    } catch (error) {
      console.error("Error fetching mock sets:", error);
      res.status(500).json({ success: false, message: "Internal Server Error" });
    }
  };
  
  // DELETE a Mock Set by ID
  exports.deleteMockSet = async (req, res) => {
    try {
      const { id } = req.params;
      const deletedMockSet = await mocksetModel.findByIdAndDelete(id);
  
      if (!deletedMockSet) {
        return res.status(404).json({ success: false, message: "Mock Set not found" });
      }
  
      res.status(200).json({ success: true, message: "Mock Set deleted successfully" });
    } catch (error) {
      console.error("Error deleting mock set:", error);
      res.status(500).json({ success: false, message: "Internal Server Error" });
    }
  };