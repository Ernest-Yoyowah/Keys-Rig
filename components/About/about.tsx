import React from "react";

const About: React.FC = () => {
  return (
    <>
      <div className="container mx-auto my-auto text-slate-800 md:text-center py-8 mt-10 ">
        <h1 className="text-3xl font-semibold mb-4">
          About Keys Rig Setup and VST Plugins
        </h1>
        <div className="max-w-3xl mx-auto">
          <p className="">
            Welcome to Keys Rig Setup and VST Plugins! We're your go-to resource
            for crafting the ultimate keyboard rig and exploring the world of
            virtual instruments and effects. Find expert advice on gear
            selection and discover a curated selection of VST plugins to fuel
            your creativity. Let's make music magic together.
          </p>
          <div className="embed-responsive mt-10">
            <iframe
              width="810"
              height="456"
              src="https://www.youtube.com/embed/I4pKBOxosrk"
              title="Worship Rig Tour - Piano &amp; Keys Gear | Sunday Keys App Setup"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
