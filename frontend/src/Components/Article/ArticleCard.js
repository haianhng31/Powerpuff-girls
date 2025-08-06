import React from "react";

const ArticleCard = ({ article }) => {
  const {
    type,
    category,
    title,
    ranking,
    description,
    price,
    creatorName,
    date,
    imageUrl,
    link,
  } = article;

  return (
    <div className="max-w-xl mx-auto rounded-2xl shadow-md overflow-hidden border p-6 bg-white space-y-4">
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-60 object-cover rounded-lg"
      />
      <div className="space-y-2">
        <h2 className="text-2xl font-bold">{title}</h2>
        <p className="text-sm text-gray-600">
          {type.toUpperCase()} • {category}
        </p>
        <p className="text-gray-800">{description}</p>
        <p className="text-sm text-gray-500">
          Created by <strong>{creatorName}</strong> on{" "}
          {new Date(date).toLocaleDateString()}
        </p>
        <div className="flex justify-between items-center mt-2">
          <span className="text-lg font-semibold text-green-600">
            ${price.toFixed(2)}
          </span>
          <span className="text-yellow-500 font-medium">⭐ {ranking}/5</span>
        </div>
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-3 text-blue-600 hover:underline"
          >
            Learn more →
          </a>
        )}
      </div>
    </div>
  );
};

export default ArticleCard;
