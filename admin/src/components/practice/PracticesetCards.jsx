import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaTrashAlt } from "react-icons/fa";
import SummaryApi from "../../common/SummaryAPI";

const PracticesetCards = () => {
  const [mockSets, setMockSets] = useState([]);

  useEffect(() => {
    fetchMockSets();
  }, []);

  const fetchMockSets = async () => {
    try {
      const response = await axios.get(SummaryApi.Getpracticeset.url);
      setMockSets(response.data.data);
    } catch (error) {
      console.error("Error fetching mock sets:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(SummaryApi.DeletePracticeset.url.replace(':id',id));
      setMockSets(mockSets.filter((mockSet) => mockSet._id !== id));
      alert("Mock Set deleted successfully");
    } catch (error) {
      console.error("Error deleting mock set:", error);
      alert("Failed to delete Mock Set");
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {mockSets.map((mockSet) => (
        <div key={mockSet._id} className="bg-white p-4 shadow-md rounded-md">
          <h2 className="text-lg font-semibold">Class: {mockSet.className}</h2>
          <p className="text-sm">Subject: {mockSet.subject?.name || "N/A"}</p>
          <p className="text-sm">Total Marks: {mockSet.totalMarks}</p>
          <p className="text-sm">Duration: {mockSet.duration} min</p>

          <button
            className="mt-2 bg-red-500 text-white px-4 py-2 rounded"
            onClick={() => handleDelete(mockSet._id)}
          >
            <FaTrashAlt />
          </button>
        </div>
      ))}
    </div>
  );
};

export default PracticesetCards;
