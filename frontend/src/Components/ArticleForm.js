import React, { useState } from "react";

const ArticleForm = () => {
    const [formData, setFormData] = useState({
        title: "",
        type: "",
        category: "",
        ranking: "",
        description: "",
        price: "",
        creator: "",
        dateCreated: "",
        link: "",
        image: null,
    });
    
    const handleChange = (e) => {
        const { name, value, type, files } = e.target;
        setFormData((prev) => ({
            ...prev,
        [name]: type === "file" ? files[0] : value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Submitted:", formData);
        // add submit logic (e.g. POST request)
    };

    return (
            <form onSubmit={handleSubmit} class="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-xl space-y-4 mt-8">
                <h1 class="text-xl text-pink-800 mb-4 font-semibold">Have a recommendation? Put it here for others to discover it!</h1>
                <div>
                    <label className="block font-medium">Name</label>
                    <input
                        type="text"
                        name="name"
                        className="w-full border rounded-lg px-4 py-2"
                        value={formData.name}
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
                        name="creator"
                        className="w-full border rounded-lg px-4 py-2"
                        value={formData.creator}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label className="block font-medium">Date Created</label>
                    <input
                        type="date"
                        name="dateCreated"
                        className="w-full border rounded-lg px-4 py-2"
                        value={formData.dateCreated}
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
                    <label className="block font-medium">Optional Image</label>
                    <input
                        type="file"
                        name="image"
                        accept="image/*"
                        className="w-full"
                        onChange={handleChange}
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
                >
                    Submit
                </button>
            </form>
    )
}

export default ArticleForm;