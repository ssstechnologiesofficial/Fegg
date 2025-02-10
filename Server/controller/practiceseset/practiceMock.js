const mongoose = require("mongoose");
const mocksetModel = require("../../model/practiceset/mocksetModel");
const questionModel = require("../../model/practiceset/questionModel");
const subjectModel = require("../../model/practiceset/subjectModel");

// exports.createPracticeSet = async (req, res) => {
//     try {
//       const {
//         className,
//         subjectId,
//         selectedChapters,
//         numQuestions,
//         totalMarks,
//         duration,
//         selectedQuestions = [],
//       } = req.body;
  
//       // Ensure subjectId is a valid ObjectId
//       if (!mongoose.Types.ObjectId.isValid(subjectId)) {
//         return res.status(400).json({ success: false, message: "Invalid subject ID" });
//       }
  
//       // Validate Subject
//       const subject = await subjectModel.findById(subjectId);
//       if (!subject) {
//         return res.status(404).json({ success: false, message: "Subject not found" });
//       }
  
//       // Convert selectedChapters to ObjectId array
//       const chapterIds = selectedChapters.map(id => new mongoose.Types.ObjectId(id));
  
//       let questions = [];
//       const numQuestionsInt = parseInt(numQuestions);
  
//       if (numQuestionsInt > 0) {
//         // Fetch random questions based on selected chapters
//         questions = await questionModel.aggregate([
//           {
//             $match: {
//               subject: new mongoose.Types.ObjectId(subjectId), // Ensure matching with ObjectId
//               className,
//               chapter: { $in: chapterIds },
//             },
//           },
//           { $sample: { size: numQuestionsInt } },
//         ]);
  
//         // If not enough questions found
//         if (questions.length < numQuestionsInt) {
//           return res.status(400).json({
//             success: false,
//             message: `Only ${questions.length} questions are available in the selected chapters.`,
//           });
//         }
//       } else {
//         // Validate manually selected questions
//         const selectedQuestionIds = selectedQuestions.map(q => new mongoose.Types.ObjectId(q.questionId));
//         questions = await questionModel.find({ _id: { $in: selectedQuestionIds } });
  
//         if (questions.length !== selectedQuestionIds.length) {
//           return res.status(400).json({
//             success: false,
//             message: "Some selected questions were not found in the database.",
//           });
//         }
//       }
  
//       // Create Practice Set
//       const practiceSet = new mocksetModel({
//         className,
//         subject: new mongoose.Types.ObjectId(subjectId), // Ensure subject is stored as ObjectId
//         selectedChapters: chapterIds,
//         numQuestions: questions.length,
//         totalMarks,
//         duration,
//         questions: questions.map(q => q._id), // Store only ObjectIds in questions array
//       });
  
//       await practiceSet.save();
  
//       return res.status(201).json({ success: true, message: "Practice set created successfully", data: practiceSet });
//     } catch (error) {
//       console.error("Error creating practice set:", error);
//       res.status(500).json({ success: false, message: "Internal Server Error" });
//     }
//   };
  


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
  