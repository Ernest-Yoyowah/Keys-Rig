import { YoutubeEmbedProps } from "@/types/types";
import React from "react";

const YoutubeEmbed: React.FC<YoutubeEmbedProps> = ({ videoId, title }) => {
  return (
    <div className="max-w-2xl mx-auto">
      <div className="mt-10 md:h-[400px] aspect-w-16 aspect-h-9">
        <iframe
          width="900"
          height="500"
          src={`https://www.youtube.com/embed/${videoId}`}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          className="w-full h-full"
        />
      </div>
    </div>
  );
};

export default YoutubeEmbed;
