import React, { useEffect, useState } from "react";
import axios from "axios";

const AdminDashboard = () => {
  const [unapprovedArticles, setUnapprovedArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch unapproved articles on load
  useEffect(() => {
    const fetchUnapproved = async () => {
      try {
        const res = await axios.get("http://localhost:8000/api/articles/all"); // Custom route for admins
        const unapproved = res.data.filter(article => article.approved === false);
        setUnapprovedArticles(unapproved);
        setLoading(false);
      } catch (err) {
        console.error("Failed to fetch articles", err);
        setLoading(false);
      }
    };
    fetchUnapproved();
  }, []);

  const handleApprove = async (id) => {
    try {
      await axios.patch(`http://localhost:8000/api/articles/admin/${id}`);
      setUnapprovedArticles(prev => prev.filter(article => article._id !== id));
    } catch (err) {
      console.error("Failed to approve article", err);
    }
  };

  if (loading) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="max-w-4xl mx-auto p-6 mt-10">
      <h1 className="text-2xl font-bold text-pink-700 mb-6">Admin Dashboard - Approve Submissions</h1>
      {unapprovedArticles.length === 0 ? (
        <p>No unapproved articles</p>
      ) : (
        <ul className="space-y-6">
          {unapprovedArticles.map((article) => (
            <li key={article._id} className="border p-4 rounded-lg shadow">
              <h2 className="text-lg font-semibold">{article.title}</h2>
              <p className="text-sm text-gray-600 mb-2">{article.description}</p>
              <button
                onClick={() => handleApprove(article._id)}
                className="bg-green-600 text-white py-1 px-3 rounded hover:bg-green-700"
              >
                Approve
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AdminDashboard;