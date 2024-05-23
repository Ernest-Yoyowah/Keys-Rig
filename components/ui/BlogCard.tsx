import Link from "next/link";
import React from "react";

const BlogCard: React.FC<{
  imageUrl: string;
  topic: string;
  description: string;
  blogLink: string;
}> = ({ imageUrl, topic, description, blogLink }) => {
  return (
    <div className="max-w-xs bg-white rounded-lg overflow-hidden shadow-lg mx-4 my-8">
      <img src={imageUrl} alt="Blog" className="w-full h-64 object-cover" />
      <div className="p-4">
        <h2 className="head-text_3 mb-2">{topic}</h2>
        <p className="paragraph-text_3">{description}</p>
        <Link href={blogLink} className="link_text mt-2 block">
          Read more
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
