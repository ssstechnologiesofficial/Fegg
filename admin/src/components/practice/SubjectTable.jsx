import { useState, useEffect } from "react";
import axios from "axios";
import SummaryApi from "../../common/SummaryAPI";

const SubjectsTable = () => {
  const [subjects, setSubjects] = useState([]);
  const [filteredSubjects, setFilteredSubjects] = useState([]);
  const [selectedClass, setSelectedClass] = useState("all");
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");
  const [editSubject, setEditSubject] = useState(null); // Store subject to edit
  const [updatedData, setUpdatedData] = useState({ name: "", class: "" });
  // Pagination State
  const [currentPage, setCurrentPage] = useState(1);
  const subjectsPerPage = 5;

  useEffect(() => {
    fetchSubjects();
  }, []);

  const fetchSubjects = async () => {
    try {
      const response = await axios.get(SummaryApi.getSubjects.url);
      setSubjects(response.data);
      setFilteredSubjects(response.data);
      setLoading(false);
    } catch (error) {
      setMessage("Failed to fetch subjects");
      setLoading(false);
    }
  };

  // Handle Filtering by Class
  const handleFilterChange = (e) => {
    const selected = e.target.value;
    setSelectedClass(selected);

    if (selected === "all") {
      setFilteredSubjects(subjects);
    } else {
      setFilteredSubjects(subjects.filter((subject) => subject.class === selected));
    }
    setCurrentPage(1); // Reset to first page after filtering
  };

  // Delete Subject
  const handleDelete = async (id) => {
    try {
      await axios.delete(SummaryApi.DeleteSubjects.url.replace(":id", id));
      setMessage("Subject deleted successfully");
      fetchSubjects(); // Refresh the list after deletion
    } catch (error) {
      setMessage("Failed to delete subject");
    }
  };

  // Pagination Logic
  const indexOfLastSubject = currentPage * subjectsPerPage;
  const indexOfFirstSubject = indexOfLastSubject - subjectsPerPage;
  const currentSubjects = filteredSubjects.slice(indexOfFirstSubject, indexOfLastSubject);

  // Next Page
  const nextPage = () => {
    if (currentPage < Math.ceil(filteredSubjects.length / subjectsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  // Previous Page
  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
 // Handle Edit Click
 const handleEditClick = (subject) => {
  setEditSubject(subject._id);
  setUpdatedData({ name: subject.name, class: subject.class });
};

// Handle Update Subject
const handleUpdate = async () => {
  try {
    await axios.put(SummaryApi.updateSubject.url.replace(":id", editSubject), updatedData);
    setMessage("Subject updated successfully");
    setEditSubject(null); // Close edit mode
    fetchSubjects(); // Refresh list
  } catch (error) {
    setMessage("Failed to update subject");
  }
};
  return (
    <div className="mx-auto bg-white shadow-lg rounded-lg p-6 mt-4">
      <h2 className="text-xl font-semibold mb-4 text-center">Subjects List</h2>

      {message && <p className="text-red-600 text-center">{message}</p>}

      {/* Filter Dropdown */}
      <div className="mb-4 flex justify-end">
        <select
          value={selectedClass}
          onChange={handleFilterChange}
          className="px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-red-300"
        >
          <option value="all">All Classes</option>
          <option value="10">Class 10</option>
          <option value="12">Class 12</option>
        </select>
      </div>

      {loading ? (
        <p className="text-center">Loading...</p>
      ) : (
        <>
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-primary text-white">
                <th className="border px-4 py-2">S.No.</th>
                <th className="border px-4 py-2">Subject Name</th>
                <th className="border px-4 py-2">Class</th>
                <th className="border px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
            {filteredSubjects.map((subject, i) => (
              <tr key={subject._id} className="text-center">
                <td className="border px-4 py-2">{i + 1}</td>
                <td className="border px-4 py-2">
                  {editSubject === subject._id ? (
                    <input
                      type="text"
                      value={updatedData.name}
                      onChange={(e) => setUpdatedData({ ...updatedData, name: e.target.value })}
                      className="border px-2 py-1"
                    />
                  ) : (
                    subject.name
                  )}
                </td>
                <td className="border px-4 py-2">
                  {editSubject === subject._id ? (
                    <select
                      value={updatedData.class}
                      onChange={(e) => setUpdatedData({ ...updatedData, class: e.target.value })}
                      className="border px-2 py-1"
                    >
                      <option value="10">Class 10</option>
                      <option value="12">Class 12</option>
                    </select>
                  ) : (
                    subject.class
                  )}
                </td>
                <td className="border px-4 py-2">
                  {editSubject === subject._id ? (
                    <button onClick={handleUpdate} className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-700 transition">
                      Save
                    </button>
                  ) : (<>
                    <button onClick={() => handleEditClick(subject)} className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-700 transition">
                      Edit
                    </button>
                    <button
                    onClick={() => handleDelete(subject._id)}
                    className="bg-primary text-white px-3 py-1 rounded hover:bg-red-700 transition"
                  >
                    Delete
                  </button> </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
          </table>

          {/* Pagination Controls */}
          <div className="flex justify-between mt-4">
            <button
              onClick={prevPage}
              disabled={currentPage === 1}
              className={`px-4 py-2 rounded ${
                currentPage === 1 ? "bg-gray-300 cursor-not-allowed" : "bg-blue-500 text-white hover:bg-blue-700"
              }`}
            >
              Previous
            </button>
            <span className="text-lg font-semibold">{currentPage}</span>
            <button
              onClick={nextPage}
              disabled={currentPage >= Math.ceil(filteredSubjects.length / subjectsPerPage)}
              className={`px-4 py-2 rounded ${
                currentPage >= Math.ceil(filteredSubjects.length / subjectsPerPage)
                  ? "bg-gray-300 cursor-not-allowed"
                  : "bg-blue-500 text-white hover:bg-blue-700"
              }`}
            >
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default SubjectsTable;
