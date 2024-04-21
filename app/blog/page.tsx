// pages/blog.tsx

import React from "react";
import { NextPage } from "next";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Keys Rig",
};

const BlogPage: NextPage = () => {
  return (
    <div>
      <div className="bg-gray-800 py-12 text-center text-white">
        <div className="container mx-auto">
          <h1 className="text-3xl md:text-5xl font-semibold">
            Welcome to the Blog
          </h1>
          <p className="mt-4 text-lg">
            Explore insightful articles and resources about keyboard rigs and
            music production.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg overflow-hidden shadow-lg">
            <img
              className="w-full h-48 object-cover"
              src="https://www.jimquesta.com/wp-content/uploads/2021/06/Key-Rig.jpg"
              alt="Blog Post"
            />
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2">
                Sample Blog Post Title
              </h2>
              <p className="text-gray-600 mb-2">By John Doe</p>
              <p className="text-gray-600 mb-2">Published on April 22, 2024</p>
              <p className="text-gray-800">
                This is an example blog post excerpt. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit. Nullam sit amet lorem eu
                mauris fermentum malesuada. Aliquam posuere auctor justo, ac
                sagittis enim interdum in.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
