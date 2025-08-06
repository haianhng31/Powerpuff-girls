import React, { useState } from "react";
import axios from 'axios';

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
        locationId: "",
    });
    
    const handleChange = (e) => {
        const { name, value, type, files } = e.target;
        setFormData((prev) => ({
            ...prev,
        [name]: type === "file" ? files[0] : value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("http://localhost:8000/api/articles", formData);
            console.log("Article created:", res.data);
            // Optionally reset form
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
                locationId: "",
            });
        } catch (err) {
            console.error("Error submitting form:", err.response?.data || err.message);
        }
    };

    return (
            <form onSubmit={handleSubmit} class="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-xl space-y-4 mt-8">
                <h1 class="text-xl text-pink-800 mb-4 font-semibold">Have a recommendation? Put it here for others to discover it!</h1>
                <div>
                    <label className="block font-medium">Name</label>
                    <input
                        type="text"
                        name="title"
                        className="w-full border rounded-lg px-4 py-2"
                        value={formData.title}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label className="block font-medium">Type</label>
                    <select
                        name="type"
                        className="w-full border rounded-lg px-4 py-2"
                        value={formData.type}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Select type</option>
                        <option value="book">Book</option>
                        <option value="product">Product</option>
                        <option value="app">App</option>
                        <option value="place">Place</option>
                    </select>
                </div>
                <div>
                    <label className="block font-medium">Category</label>
                    <select
                        name="category"
                        className="w-full border rounded-lg px-4 py-2"
                        value={formData.category}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Select category</option>
                        <option value="health">Health</option>
                        <option value="travel">Travel</option>
                    </select>
                </div>
                <div>
                    <label className="block font-medium">Ranking (1-5)</label>
                    <select
                        name="ranking"
                        className="w-full border rounded-lg px-4 py-2"
                        value={formData.ranking}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Select ranking</option>
                        {[1, 2, 3, 4, 5].map((num) => (
                            <option key={num} value={num}>
                                {num}
                            </option>
                        ))}
                    </select>
                </div>
                <div>
                    <label className="block font-medium">Description</label>
                    <textarea
                        name="description"
                        rows="4"
                        className="w-full border rounded-lg px-4 py-2"
                        value={formData.description}
                        onChange={handleChange}
                        required
                    ></textarea>
                </div>
                <div>
                    <label className="block font-medium">Price ($)</label>
                    <input
                        type="number"
                        name="price"
                        className="w-full border rounded-lg px-4 py-2"
                        value={formData.price}
                        onChange={handleChange}
                        step="0.01"
                        required
                    />
                </div>
                <div>
                    <label className="block font-medium">Creator Name</label>
                    <input
                        type="text"
                        name="creatorName"
                        className="w-full border rounded-lg px-4 py-2"
                        value={formData.creatorName}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label className="block font-medium">Date Created</label>
                    <input
                        type="date"
                        name="date"
                        className="w-full border rounded-lg px-4 py-2"
                        value={formData.date}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label className="block font-medium">Optional Link</label>
                    <input
                        type="url"
                        name="link"
                        className="w-full border rounded-lg px-4 py-2"
                        value={formData.link}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label className="block font-medium">Optional Image URL</label>
                    <input
                        type="url"
                        name="imageUrl"
                        className="w-full border rounded-lg px-4 py-2"
                        value={formData.imageUrl}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label className="block font-medium">Optional Location</label>
                    <input
                        type="text"
                        name="locationId"
                        className="w-full border rounded-lg px-4 py-2"
                        value={formData.locationId}
                        onChange={handleChange}
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-pink-600 text-white py-2 px-4 rounded-lg hover:bg-pink-700"
                >
                    Submit
                </button>
            </form>
    )
}

export default ArticleForm;