import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SummaryApi from "../../../common/SummaryApi";

const Crad10th = () => {
  const [mockTests, setMockTests] = useState([]);
  const navigate = useNavigate(); // For navigation

  useEffect(() => {
    const fetchMockTests = async () => {
      try {
        const response = await fetch(SummaryApi.getPracticeCards.url);
        const data = await response.json();
        console.log("API Response:", data);

        if (data.success) {
          const filteredTests = data.data.filter((test) => test.className === "10");
          setMockTests(filteredTests);
        }
      } catch (error) {
        console.error("Error fetching mock tests:", error);
      }
    };

    fetchMockTests();
  }, []);

  const handleStartTest = (mockSetId) => {
    navigate(`/start-test/${mockSetId}`); 
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-xl font-bold mb-4">Class 10th Practice Mock Tests</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {mockTests.map((test) => (
          <div key={test._id} className="bg-white shadow-lg p-4 rounded-lg border">
            <h3 className="text-lg font-semibold">Subject: {test.subject?.name || "Unknown Subject"}</h3>
            <p className="text-sm">Total Marks: {test.totalMarks}</p>
            <p className="text-sm">Duration: {test.duration} mins</p>
            <p className="text-sm">Number of Questions: {test.numQuestions}</p>
            <button
              onClick={() => handleStartTest(test._id)}
              className="mt-2 bg-blue-500 text-white px-4 py-2 rounded"
            >
              Start Test
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Crad10th;
