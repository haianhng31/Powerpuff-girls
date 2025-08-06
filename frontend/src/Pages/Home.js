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
    <div className="min-h-screen bg-gray-100 p-8 space-y-6">
      {articles.length === 0 ? (
        <p className="text-center text-gray-600">No articles found.</p>
      ) : (
        articles.map((article) => (
          <ArticleCard key={article._id} article={article} />
        ))
      )}
    </div>
  );
};

export default Home;
