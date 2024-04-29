import React, { Suspense } from "react";
import { NextPage } from "next";
import { Metadata } from "next";
import Loading from "./loading";
import { largeBlogData } from "../lib/blogData";
import { smallBlogData } from "../lib/blogData";

export const metadata: Metadata = {
  title:
    "Blog - Explore insightful articles and resources about keyboard rigs and music production on Keys Rig.",
};

const BlogPage: NextPage = () => {
  return (
    <div>
      {/* Header Section */}
      <div className="bg-gray-800 py-12 text-center text-white">
        <div className="container mx-auto">
          <h1 className="hero-text_2">Welcome to the Blog</h1>
          <p className="mt-4 sub-hero-text_2">
            Explore insightful articles and resources about keyboard rigs and
            music production.
          </p>
        </div>
      </div>

      <Suspense fallback={<Loading />}>
        {/* Main Content */}
        <div className="container md:px-28 px-5 py-8 flex flex-col md:flex-row">
          {/* Large Blog Posts */}
          <div className="md:w-1/2 md:mr-8">
            {largeBlogData.map((blog, index) => (
              <div
                key={index}
                className="bg-white rounded-md overflow-hidden shadow-lg mb-8"
              >
                <img
                  className="w-full h-64 object-cover"
                  src={blog.image}
                  alt="Blog Post"
                />
                <div className="p-6">
                  <h2 className="head-text_2 mb-3">{blog.title}</h2>
                  <p className="paragraph mb-2">By {blog.author}</p>
                  <p className="paragraph mb-2">Published on {blog.date}</p>
                  <p className="paragraph-text_2">{blog.excerpt}</p>
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

          {/* Small Blog Posts */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:w-[70%] h-[50%]">
            {smallBlogData.map((blog, index) => (
              <div
                key={index}
                className="bg-white rounded-md overflow-hidden shadow-lg"
              >
                <img
                  className="w-full h-32 object-cover"
                  src={blog.image}
                  alt="Blog Post"
                />
                <div className="p-6">
                  <h2 className="head-text_3 mb-2">{blog.title}</h2>
                  <p className="paragraph-text_2 mb-2">By {blog.author}</p>
                  <p className="paragraph-text_2 mb-2">
                    Published on {blog.date}
                  </p>
                  <p className="paragraph-text_3">{blog.excerpt}</p>
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
      </Suspense>
    </div>
  );
};

export default BlogPage;
