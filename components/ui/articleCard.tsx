import React from "react";

export const articles = [
  {
    imageUrl:
      "https://cdn.pixabay.com/photo/2020/04/15/14/45/microphone-5046876_1280.jpg",
    topic: "Large Blog Post Title 1",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    articleLink: "/article1",
  },
  {
    imageUrl:
      "https://e0.pxfuel.com/wallpapers/737/423/desktop-wallpaper-px-recording-studio-background-music-studio.jpg",
    topic: "Large Blog Post Title 2",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    articleLink: "/article2",
  },
  {
    imageUrl:
      "https://static4.depositphotos.com/1022999/351/i/450/depositphotos_3515999-Music-studio-set.jpg",
    topic: "Large Blog Post Title 3",
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
        <h2 className="head-text_3 mb-2">{topic}</h2>
        {/* Article paragraph */}
        <p className="paragraph-text_3">{description}</p>
        {/* Article link */}
        <a href={articleLink} className="link_text mt-2 block">
          Read more
        </a>
      </div>
    </div>
  );
};

export default ArticleCard;
