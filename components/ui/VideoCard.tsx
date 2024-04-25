import { Video } from "@/types/types";
import React from "react";

const VideoCard: React.FC<{ video: Video }> = ({ video }) => {
  return (
    <div className="rounded-md overflow-hidden shadow-md">
      <iframe
        width="100%"
        height="240"
        src={video.url}
        title={video.name}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
      <div className="p-4">
        <h2 className="head-text_3 mb-2">{video.name}</h2>
      </div>
    </div>
  );
};

export default VideoCard;
