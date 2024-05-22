import React from "react";
import YoutubeEmbed from "@/components/ui/YoutubeEmbed";

const aboutContent = {
  headText: "Rig Gear & Setup",
  paragraphText:
    "Discover the tools to elevate your music production to new heights. Whether you're sculpting lush synth textures, shaping dynamic drum beats, or adding the perfect finishing touch with audio effects, our handpicked collection has something for every musician and producer.",
};

const About: React.FC = () => {
  return (
    <>
      <div className="container mx-auto my-auto text-[#242424] md:text-center py-8 mt-10 ">
        <h1 className="head-text_1 mb-4">{aboutContent.headText}</h1>
        <div className="max-w-3xl mx-auto">
          <p className="paragraph-text">{aboutContent.paragraphText}</p>
        </div>
        <div>
          <YoutubeEmbed
            videoId="LMoaiV4utSE"
            title="Epic Worship Rig Tour - Piano & Keys Gear Setup"
          />
        </div>
      </div>
    </>
  );
};

export default About;
