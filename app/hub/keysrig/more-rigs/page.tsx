import React from "react";
import { Metadata } from "next";
import VideoCard from "@/components/ui/VideoCard";
import { rigTour } from "@/app/lib/rigTourVideos";

export const metadata: Metadata = {
  title: "Other Rigs - view more rigs from other musicians",
};

const MoreRigPage = () => {
  return (
    <div>
      <div className="relative bg-black h-[300px]">
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src="https://www.youtube.com/embed/YOUR_VIDEO_ID_HERE?autoplay=1&mute=1&controls=0&loop=1&playlist=LMoaiV4utSE"
          frameBorder="0"
          allowFullScreen
          allow="autoplay; encrypted-media"
        ></iframe>
        <div className="absolute inset-0 bg-black opacity-75"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="hero-text_2 mb-4">
              View More Rigs from Other Musicians
            </h1>
            <p className="sub-hero-text_2">
              Explore amazing keyboard rig setups from top musicians!
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto py-8">
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {rigTour.map((video, index) => (
            <VideoCard key={index} video={video} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MoreRigPage;
