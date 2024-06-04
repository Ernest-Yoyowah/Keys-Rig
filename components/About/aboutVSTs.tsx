import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const AboutVSTs: React.FC = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    // Fetch images from Unsplash API
    fetchImages();
  }, []);

  const fetchImages = async () => {
    try {
      // Fetch images from Unsplash API
      const response = await fetch(
        "https://api.unsplash.com/photos/random?count=5&client_id=YOUR_UNSPLASH_CLIENT_ID"
      );
      const data = await response.json();
      setImages(data);
    } catch (error) {
      console.error("Error fetching images:", error);
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
      {/* Display images */}
      <div>
        <h2>Test Images</h2>
        <div>
          {images.map((image) => (
            <div key={image.id}>
              <img src={image.urls.small} alt={image.alt_description} />
              <p>{image.alt_description}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AboutVSTs;
