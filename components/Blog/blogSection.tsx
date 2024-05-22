import Link from "next/link";
import BlogCard from "@/components/ui/BlogCard";
import { Button } from "@/components/ui/button";
import { blogIntro } from "@/app/lib/blogData";

const BlogSection: React.FC = () => {
  return (
    <>
      <div>
        <div className="flex items-center justify-start md:max-w-2xl pt-20">
          <div className="w-16 h-0.5 bg-yellow-400 mr-4"></div>
          <p className="text-sm font-normal">Blog Posts</p>
        </div>
        <div>
          <h1 className="head-text_1 mb-0 text-left">Read Latest Blogs</h1>
        </div>
      </div>
      <div className="flex justify-around flex-col md:flex-row">
        {blogIntro.map((blog, index) => (
          <BlogCard
            key={index}
            imageUrl={blog.imageUrl}
            topic={blog.topic}
            description={blog.description}
            blogLink={blog.blogLink}
          />
        ))}
      </div>
      <div className="flex justify-center mt-0 mb-5">
        <Button variant="default">
          <Link href="/blog">Read All Blogs</Link>
        </Button>
      </div>
    </>
  );
};

export default BlogSection;
