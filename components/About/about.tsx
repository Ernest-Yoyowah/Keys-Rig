import React from "react";

const About: React.FC = () => {
  return (
    <>
      <div className="container mx-auto my-auto text-[#242424] md:text-center py-8 mt-10 ">
        <h1 className="text-3xl font-semibold mb-4">VST Plugins</h1>
        <div className="max-w-3xl mx-auto">
          <p className="text-md">
            Discover the tools to elevate your music production to new heights.
            Whether you're sculpting lush synth textures, shaping dynamic drum
            beats, or adding the perfect finishing touch with audio effects, our
            handpicked collection has something for every musician and producer.
            Let your creativity flow freely as you harness the power of these
            plugins to shape your unique sound and inspire your next musical
            masterpiece.
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          <div className="mt-10 md:h-[456px] aspect-w-16 aspect-h-9">
            <iframe
              width="1067"
              height="600"
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

      <div className="container mx-auto my-auto text-slate-800 md:text-center py-8 mt-10 ">
        <h1 className="text-3xl font-semibold mb-4">
          Keys Rig Setup and VST Plugins
        </h1>
        <div className="max-w-3xl mx-auto">
          <p className="">
            Welcome to Keys Rig Setup and VST Plugins! We're your go-to resource
            for crafting the ultimate keyboard rig and exploring the world of
            virtual instruments and effects. Find expert advice on gear
            selection and discover a curated selection of VST plugins to fuel
            your creativity. Let's make music magic together.
          </p>
          <div className="mt-10 md:h-[456px] aspect-w-16 aspect-h-9">
            <iframe
              width="810"
              height="456"
              src="https://www.youtube.com/embed/I4pKBOxosrk"
              title="Worship Rig Tour - Piano &amp; Keys Gear | Sunday Keys App Setup"
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
          <p className="">
            Welcome to Keys Rig Setup and VST Plugins! We're your go-to resource
            for crafting the ultimate keyboard rig and exploring the world of
            virtual instruments and effects. Find expert advice on gear
            selection and discover a curated selection of VST plugins to fuel
            your creativity. Let's make music magic together.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
