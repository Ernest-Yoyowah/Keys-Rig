import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const AboutVSTs: React.FC = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Fetch posts from Instagram API
    fetchInstagramPosts();
  }, []);

  const fetchInstagramPosts = async () => {
    try {
      // Fetch posts from Instagram API
      const response = await fetch(
        "https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,thumbnail_url&access_token=YOUR_ACCESS_TOKEN"
      );
      const data = await response.json();
      setPosts(data.data);
    } catch (error) {
      console.error("Error fetching Instagram posts:", error);
    }
  };

  return (
    <>
      {/* Your existing JSX code */}
      <div className="flex-1 bg-[#000000] text-primary-foreground p-8 flex flex-col justify-center skew-left">
        <h1 className="text-4xl font-bold mb-4 text-center">About VSTs</h1>
        <p className="text-lg mb-8 text-center">
          Find expert advice on gear selection and discover a curated selection
          of VST plugins to fuel your creativity. Let's make music magic
          together.
        </p>
        <div className="flex justify-center gap-3">
          <Button
            variant="default"
            className="bg-white text-[#191919] hover:bg-[#e5e5e5] hover:text-black"
          >
            <Link href="/hub/plugins">VST Plugins</Link>
          </Button>
          <Button
            variant="default"
            className="bg-white text-[#191919] hover:bg-[#e5e5e5] hover:text-black"
          >
            <Link href="/hub/keysrig/gear">Gear Needed</Link>
          </Button>
        </div>
      </div>
      {/* Display Instagram posts */}
      <div>
        <h2>Instagram Feed</h2>
        <div>
          {posts.map((post) => (
            <div key={post.id}>
              <img src={post.media_url} alt={post.caption} />
              <p>{post.caption}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AboutVSTs;
