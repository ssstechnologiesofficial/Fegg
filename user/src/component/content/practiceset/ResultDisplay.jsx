import { useEffect, useState } from "react";

const ResultDisplay = ({ resultId }) => {
  const [testResult, setTestResult] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTestResult = async () => {
      try {
        const response = await fetch(`http://localhost:8006/api/test-result/${resultId}`);
        if (!response.ok) {
          throw new Error("Failed to fetch test result");
        }
        const data = await response.json();
        setTestResult(data.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTestResult();
  }, [resultId]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!testResult) return <p>No result found.</p>;

  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg p-6">
      <h2 className="text-xl font-bold mb-4">Test Result</h2>
      <p><strong>Name:</strong> {testResult.userName}</p>
      <p><strong>Phone:</strong> {testResult.userPhone}</p>
      <p><strong>Total Questions:</strong> {testResult.totalQuestions}</p>
      <p><strong>Correct Answers:</strong> {testResult.correctAnswers}</p>
      <p><strong>Wrong Answers:</strong> {testResult.wrongAnswers}</p>
      <p><strong>Score:</strong> {testResult.score}</p>
      <h3 className="mt-4 font-semibold">Your Answers:</h3>
      <ul className="list-disc pl-4">
        {Object.entries(testResult.answers).map(([questionId, answer]) => (
          <li key={questionId}>
            <strong>Q{questionId}:</strong> {answer}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ResultDisplay;

