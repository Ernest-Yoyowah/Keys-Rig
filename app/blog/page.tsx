import React from "react";
import { NextPage } from "next";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Keys Rig",
};

const BlogPage: NextPage = () => {
  return (
    <div className="container mx-auto py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white rounded-lg overflow-hidden shadow-lg">
          <img
            className="w-full h-48 object-cover"
            src="https://via.placeholder.com/800x400"
            alt="Blog Post"
          />
          <div className="p-6">
            <h2 className="text-xl font-semibold mb-2">
              Sample Blog Post Title
            </h2>
            <p className="text-gray-600 mb-2">By John Doe</p>
            <p className="text-gray-600 mb-2">Published on April 22, 2024</p>
            <p className="text-gray-800">
              This is an example blog post excerpt. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Nullam sit amet lorem eu mauris
              fermentum malesuada. Aliquam posuere auctor justo, ac sagittis
              enim interdum in.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
