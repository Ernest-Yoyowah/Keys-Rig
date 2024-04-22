import React from "react";
import { NextPage } from "next";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Keys Rig",
};

const BlogPage: NextPage = () => {
  return (
    <div>
      {/* Header Section */}
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
      <div className="container px-28 py-8 flex flex-col md:flex-row">
        {/* Large Blog Post */}
        <div className="bg-white overflow-hidden shadow-lg mb-0 h-4/6 md:mb-0 md:w-1/2 md:mr-8">
          <img
            className="w-full h-64 object-cover"
            src="https://media.gettyimages.com/id/1352603244/photo/shot-of-an-unrecognizable-businessman-working-on-his-laptop-in-the-office.jpg?s=612x612&w=gi&k=20&c=P5z85b4Wg80UO19u2YvRAbmpwxqWyyImihiMb6gWp8I="
            alt="Blog Post"
          />
          <div className="p-6">
            <h2 className="text-xl font-semibold mb-2">
              Large Blog Post Title
            </h2>
            <p className="text-gray-600 mb-2">By John Doe</p>
            <p className="text-gray-600 mb-2">Published on April 22, 2024</p>
            <p className="text-gray-800">
              This is an example blog post excerpt for the large blog post.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              sit amet lorem eu mauris fermentum malesuada. Aliquam posuere
              auctor justo, ac sagittis enim interdum in.
            </p>
            <a
              href="#"
              className="text-blue-500 inline-block mt-4 hover:underline"
            >
              Read More
            </a>
          </div>
        </div>

        {/* Small Blog Posts */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:w-[70%]">
          {[...Array(4)].map((_, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-lg"
            >
              <img
                className="w-full h-32 object-cover"
                src="https://www.searchenginejournal.com/wp-content/uploads/2020/08/7-ways-a-blog-can-help-your-business-right-now-5f3c06b9eb24e-1280x720.png"
                alt="Blog Post"
              />
              <div className="p-6">
                <h2 className="text-lg font-semibold mb-2">
                  Small Blog Post Title
                </h2>
                <p className="text-gray-600 mb-2">By John Doe</p>
                <p className="text-gray-600 mb-2">
                  Published on April 22, 2024
                </p>
                <p className="text-gray-800">
                  This is an example blog post excerpt for the small blog posts.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <a
                  href="#"
                  className="text-blue-500 inline-block mt-4 hover:underline"
                >
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
