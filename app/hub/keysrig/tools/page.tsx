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
      <div>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur
          fugit dolorum hic vitae qui rem aspernatur quis! Ullam placeat ipsa
          necessitatibus at quidem, porro temporibus totam atque repellendus,
          earum optio!
        </p>
      </div>
    </>
  );
};

export default GearPage;
