import React from "react";
import YoutubeEmbed from "../ui/YoutubeEmbed";
import ExpansionItem from "../ui/ExpansionItem";

const aboutContent = {
  headText: "VST Plugins",
  paragraphText:
    "Discover the tools to elevate your music production to new heights. Whether you're sculpting lush synth textures, shaping dynamic drum beats, or adding the perfect finishing touch with audio effects, our handpicked collection has something for every musician and producer.",
  additionalParagraphText:
    "Welcome to Keys Rig Setup and VST Plugins! We're your go-to resource for crafting the ultimate keyboard rig and exploring the world of virtual instruments and effects. Find expert advice on gear selection and discover a curated selection of VST plugins to fuel your creativity. Let's make music magic together.",
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
          <YoutubeEmbed videoId="j09JDxQNyus" title="What Is a VST?" />
          {/* <ExpansionItem
            title="Epic Worship Rig Tour"
            description="Dive into a world of curated sounds with Datsunn, our Expansion connoisseur. Discover his hand-picked favorites and watch him quickly create some beats from scratch with his top selections."
            videoId="LMoaiV4utSE"
            youtubeTitle="Something"
            key={0}
          /> */}
        </div>
      </div>

      <div className="container mx-auto my-auto text-slate-800 md:text-center py-0">
        <div className="max-w-3xl mx-auto">
          <p className="paragraph-text">
            {/* {aboutContent.additionalParagraphText} */}
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
