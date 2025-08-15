import ArticleCard from "../Components/Article/ArticleCard";
import { useEffect, useState } from "react";

const Home = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch("http://localhost:8000/api/articles");
        if (!response.ok) throw new Error("Failed to fetch articles");
        const data = await response.json();

        // Only get blogs
        const blogPosts = data.filter(article => article.type === "blog");

        // Sort newest first
        blogPosts.sort((a, b) => new Date(b.date) - new Date(a.date));

        setBlogs(blogPosts);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading) return <p className="text-center mt-10">Loading blogs...</p>;

  // Categories
  const mostRecent = blogs.slice(0, 2);
  const womensHealth = blogs.filter(blog => blog.category === "health");
  const womensTraveling = blogs.filter(blog => blog.category === "travel");

  return (
    <div className="min-h-screen bg-pink-100 px-6 py-10">
      {/* Intro */}
      <div className="max-w-4xl mx-auto text-center mb-10">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Women’s Health & Travel Blog
        </h1>
        <p className="text-gray-600 leading-relaxed">
          Discover tips, stories, and insights for women who want to live
          healthier, travel smarter, and feel empowered.
        </p>
      </div>

      {/* Most Recent Section */}
      {mostRecent.length > 0 && (
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Most Recent</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {mostRecent.map(blog => (
              <ArticleCard key={blog._id} article={blog} />
            ))}
          </div>
        </section>
      )}

      {/* Women's Health Section */}
      {womensHealth.length > 0 && (
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Women’s Health</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {womensHealth.map(blog => (
              <ArticleCard key={blog._id} article={blog} />
            ))}
          </div>
        </section>
      )}

      {/* Women's Traveling Section */}
      {womensTraveling.length > 0 && (
        <section>
          <h2 className="text-2xl font-semibold mb-4">Women’s Traveling</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {womensTraveling.map(blog => (
              <ArticleCard key={blog._id} article={blog} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default Home;
