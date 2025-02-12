import { useEffect, useState } from "react";
import axios from "axios";
import SummaryApi from "../../common/SummaryAPI";

const QuestionTable = () => {
  const [questions, setQuestions] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [editData, setEditData] = useState({});
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetchQuestions();
  }, []);

  // Fetch Questions
  const fetchQuestions = async () => {
    try {
      const response = await axios.get(SummaryApi.Getquestion.url);
      setQuestions(response.data);
    } catch (error) {
      console.error("Error fetching questions:", error);
    }
  };

  // Handle Delete
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this question?")) return;
    try {
      await axios.delete(SummaryApi.Question.url.replace(":id",id));
      setMessage("Question deleted successfully!");
      fetchQuestions();
    } catch (error) {
      setMessage("Failed to delete question.");
    }
  };

  // Handle Edit Click
  const handleEdit = (question) => {
    setEditingId(question._id);
    setEditData({
      questionText: question.questionText,
      language: question.language,
    });
  };

  // Handle Save Edited Question
  const handleSave = async (id) => {
    try {
      await axios.put(SummaryApi.Question.url.replace(":id",id), editData);
      setMessage("Question updated successfully!");
      setEditingId(null);
      fetchQuestions();
    } catch (error) {
      setMessage("Failed to update question.");
    }
  };

  return (
    <div className="mt-6">
      {message && <p className="text-center text-red-500">{message}</p>}

      <table className="w-full border-collapse border border-gray-200">
        <thead>
          <tr className="bg-primary text-white">
            <th className="border p-2">S.No.</th>
            <th className="border p-2">Question</th>
            <th className="border p-2">Language</th>
            <th className="border p-2">Subject</th>
            <th className="border p-2">CLass</th>
            <th className="border p-2">Chapter</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {questions.length > 0 ? (
            questions.map((question, i) => (
              <tr key={question._id} className="text-center">
                <td className="border p-2">{i + 1}</td>
                <td className="border p-2">
                  {editingId === question._id ? (
                    <input
                      type="text"
                      value={editData.questionText}
                      onChange={(e) => setEditData({ ...editData, questionText: e.target.value })}
                      className="border p-1"
                    />
                  ) : (
                    question.questionText
                  )}
                </td>
                <td className="border p-2">
                  {editingId === question._id ? (
                    <input
                      type="text"
                      value={editData.language}
                      onChange={(e) => setEditData({ ...editData, language: e.target.value })}
                      className="border p-1"
                    />
                  ) : (
                    question.language
                  )}
                </td>
                <td className="border p-2">{question.subject?.name || "N/A"}</td>
                <td className="border p-2">{question.subject?.class || "N/A"}</td>
                <td className="border p-2">{question.chapter?.title || "N/A"}</td>
                <td className="border p-2">
                  {editingId === question._id ? (
                    <button
                      className="bg-green-500 text-white px-3 py-1 rounded mr-2"
                      onClick={() => handleSave(question._id)}
                    >
                      Save
                    </button>
                  ) : (
                    <button
                      className="bg-yellow-500 text-white px-3 py-1 rounded mr-2"
                      onClick={() => handleEdit(question)}
                    >
                      Edit
                    </button>
                  )}
                  <button
                    className="bg-primary text-white px-3 py-1 rounded"
                    onClick={() => handleDelete(question._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6" className="text-center py-4">
                No questions found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default QuestionTable;
