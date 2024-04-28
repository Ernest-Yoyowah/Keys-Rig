import React from "react";

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
        <div className="max-w-2xl mx-auto">
          <div className="mt-10 md:h-[400px] aspect-w-16 aspect-h-9">
            <iframe
              width="900"
              height="500"
              src="https://www.youtube.com/embed/j09JDxQNyus"
              title="What Is a VST?"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
      </div>

      <div className="container mx-auto my-auto text-slate-800 md:text-center py-8">
        <div className="max-w-3xl mx-auto">
          <p className="paragraph-text">
            {aboutContent.additionalParagraphText}
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
