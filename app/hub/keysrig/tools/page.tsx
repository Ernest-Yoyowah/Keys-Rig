import React from "react";

const GearPage = () => {
  return (
    <>
      <div className="relative h-96">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url("https://multitracks.blob.core.windows.net/public/images/products/sounds/ssp-video-bg.png")',
          }}
        ></div>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container mx-auto my-auto text-white text-center relative py-16">
          <h1 className="text-3xl md:text-5xl font-semibold mt-20">
            Keys Rig Rundown: Gear & Software
          </h1>
        </div>
      </div>
      <div className="mx-auto my-auto text-slate-800 md:text-center py-8">
        <div className="max-w-3xl mx-auto">
          <p>
            One of the hardest parts of being a worship keys player is choosing
            which gear to buy when building your keyboard rig.
          </p>

          <br />
          <p>
            Knowing what keys gear is right for you and how it works together
            will benefit your playing, as well as the entire sound of the band!
          </p>

          <br />
          <p>
            In this 2 part video series, Keith Duell breaks down his keyboard
            rig in full detail!
          </p>

          <br />
          <p>
            Keith has been performing in live worship bands and in the studio as
            a keyboardist for many years. In this series, he will break down all
            of the hardware and software required to achieve full, rich keys and
            synth sounds. Watch now!
          </p>
        </div>
      </div>
    </>
  );
};

export default GearPage;
