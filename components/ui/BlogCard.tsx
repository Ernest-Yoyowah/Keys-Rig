import React from "react";

const BlogCard: React.FC<{
  imageUrl: string;
  topic: string;
  description: string;
  blogLink: string;
}> = ({ imageUrl, topic, description, blogLink }) => {
  return (
    <div className="max-w-xs bg-white rounded-lg overflow-hidden shadow-lg mx-4 my-8">
      {/* Blog image */}
      <img src={imageUrl} alt="Blog" className="w-full h-64 object-cover" />
      {/* Blog description */}
      <div className="p-4">
        {/* Blog topic */}
        <h2 className="head-text_3 mb-2">{topic}</h2>
        {/* Blog paragraph */}
        <p className="paragraph-text_3">{description}</p>
        {/* Blog link */}
        <a href={blogLink} className="link_text mt-2 block">
          Read more
        </a>
      </div>
    </div>
  );
};

export default BlogCard;
