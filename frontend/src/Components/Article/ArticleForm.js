import React, { useState } from "react";
import axios from "axios";
import { supabase } from "../../lib/supabaseClient";

const TYPE_OPTIONS = ["book", "product", "app", "place", "blog"];
const baseurl = process.env.REACT_APP_DEPLOY || "http://localhost:8000";

const ArticleForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    type: "",
    category: "",
    ranking: "",
    description: "",
    price: "",
    creatorName: "",
    date: "",
    imageUrl: "",
    link: "",
    location: "",
  });
  const [status, setStatus] = useState(null);

  const onChange = (e) => {
    const { name, value } = e.target;
    setFormData((v) => ({ ...v, [name]: value }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    const { data } = await supabase.auth.getSession();
    const token = data?.session?.access_token;
    if (!token) {
      setStatus("Please log in to submit.");
      return;
    }

    const rankingNum = Math.max(1, Math.min(5, Number(formData.ranking || 1)));

    const payload = {
      title: formData.title,
      type: formData.type,                 // must be one of TYPE_OPTIONS (lowercase)
      category: formData.category,
      ranking: rankingNum,
      description: formData.description,
      price: formData.price ? Number(formData.price) : undefined,
      creatorName: formData.creatorName,
      date: formData.date || new Date().toISOString().slice(0, 10),
      link: formData.link || undefined,
      imageUrl: formData.imageUrl || undefined,
      location: formData.location || undefined,
    };

    try {
      await axios.post(baseurl+"/api/articles", payload, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      setStatus("ok");
      setFormData({
        title: "",
        type: "",
        category: "",
        ranking: "",
        description: "",
        price: "",
        creatorName: "",
        date: "",
        imageUrl: "",
        link: "",
        location: "",
      });
    } catch (err) {
      const msg =
        err?.response?.data?.error ||
        err?.response?.data?.message ||
        err?.message ||
        "Something went wrong. Try again.";
      console.error("Submit failed:", err?.response?.data || err);
      setStatus(msg);
    }
  };

  return (
    <form onSubmit={onSubmit} className="space-y-3">
      <input
        name="title"
        value={formData.title}
        onChange={onChange}
        placeholder="Name"
        className="w-full border p-2 rounded"
        required
      />

      <select
        name="type"
        value={formData.type}
        onChange={onChange}
        className="w-full border p-2 rounded"
        required
      >
        <option value="" disabled>Select type</option>
        {TYPE_OPTIONS.map((opt) => (
          <option key={opt} value={opt}>{opt}</option>
        ))}
      </select>

      <input
        name="category"
        value={formData.category}
        onChange={onChange}
        placeholder="Category"
        className="w-full border p-2 rounded"
        required
      />

      <input
        name="ranking"
        type="number"
        min="1"
        max="5"
        value={formData.ranking}
        onChange={onChange}
        placeholder="Ranking (1-5)"
        className="w-full border p-2 rounded"
        required
      />

      <textarea
        name="description"
        value={formData.description}
        onChange={onChange}
        placeholder="Description"
        className="w-full border p-2 rounded"
        required
      />

      <input
        name="price"
        type="number"
        step="0.01"
        value={formData.price}
        onChange={onChange}
        placeholder="Price ($)"
        className="w-full border p-2 rounded"
      />

      <input
        name="creatorName"
        value={formData.creatorName}
        onChange={onChange}
        placeholder="Creator Name"
        className="w-full border p-2 rounded"
        required
      />

      <input
        name="date"
        type="date"
        value={formData.date}
        onChange={onChange}
        className="w-full border p-2 rounded"
        required
      />

      <input
        name="link"
        value={formData.link}
        onChange={onChange}
        placeholder="Optional Link"
        className="w-full border p-2 rounded"
      />

      <input
        name="imageUrl"
        value={formData.imageUrl}
        onChange={onChange}
        placeholder="Optional Image URL"
        className="w-full border p-2 rounded"
      />

      <input
        name="location"
        value={formData.location}
        onChange={onChange}
        placeholder="Optional Location"
        className="w-full border p-2 rounded"
      />

      <button
        type="submit"
        className="relative rounded-xl px-4 py-2 font-bold text-white bg-gradient-to-r from-pink-500 via-pink-400 to-pink-600 animate-shimmer bg-[length:200%_200%] shadow-lg"
      >
        Submit
      </button>

      {status === "loading" && <p>Submitting…</p>}
      {status === "ok" && <p className="text-green-600 text-sm">✨ Thanks! Your submission is pending approval.</p>}
      {status && status !== "loading" && status !== "ok" && (
        <p className="text-red-600 text-sm">{status}</p>
      )}
    </form>
  );
};

export default ArticleForm;