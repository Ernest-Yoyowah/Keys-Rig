import React from "react";

const articles = [
  {
    imageUrl: "article1.jpg",
    topic: "Topic 1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    articleLink: "/article1",
  },
  {
    imageUrl: "article2.jpg",
    topic: "Topic 2",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    articleLink: "/article2",
  },
  {
    imageUrl: "article3.jpg",
    topic: "Topic 3",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    articleLink: "/article3",
  },
];

// ArticleCard component
const ArticleCard: React.FC<{
  imageUrl: string;
  topic: string;
  description: string;
  articleLink: string;
}> = ({ imageUrl, topic, description, articleLink }) => {
  return (
    <div className="max-w-xs bg-white rounded-lg overflow-hidden shadow-lg mx-4 my-8">
      {/* Article image */}
      <img src={imageUrl} alt="Article" className="w-full h-64 object-cover" />

      {/* Article description */}
      <div className="p-4">
        {/* Article topic */}
        <h2 className="text-xl font-bold mb-2">{topic}</h2>
        {/* Article paragraph */}
        <p className="text-gray-700">{description}</p>
        {/* Article link */}
        <a href={articleLink} className="text-blue-500 mt-2 block">
          Read more
        </a>
      </div>
    </div>
  );
};

// ArticlePage component
const ArticlePage: React.FC = () => {
  return (
    <div className="flex justify-around">
      {/* Mapping through articles array and rendering each article card */}
      {articles.map((article, index) => (
        <ArticleCard
          key={index}
          imageUrl={article.imageUrl}
          topic={article.topic}
          description={article.description}
          articleLink={article.articleLink}
        />
      ))}
    </div>
  );
};

export default ArticlePage;
