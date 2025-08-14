import ArticleCard from "../Components/Article/ArticleCard";
import { useEffect, useState } from "react";

const Home = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch("http://localhost:8000/api/articles");
        console.log(response);
        if (!response.ok) throw new Error("Failed to fetch articles");
        const data = await response.json();
        setArticles(data);
      } catch (error) {
        console.error("Error fetching articles:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  if (loading) return <p className="text-center mt-10">Loading articles...</p>;

  return (
    <div className="min-h-screen bg-gray-100 px-6 py-10">
      {/* Intro section */}
      <div className="max-w-4xl mx-auto text-center mb-10">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Curated Recommendations for Women
        </h1>
        <p className="text-gray-600 leading-relaxed">
          Explore hand-picked books, products, and apps designed to empower women in 
          their health, wellness, and travel journeys. Whether you're looking for 
          wellness resources, inspiring reads, or tools to make your travels easier, 
          you'll find them here.
        </p>
      </div>

      {/* Articles section */}
      {articles.length === 0 ? (
        <p className="text-center text-gray-600">No articles found.</p>
      ) : (
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {articles.map((article) => (
            <ArticleCard key={article._id} article={article} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
