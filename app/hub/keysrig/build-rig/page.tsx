import React from "react";

const GearPage = () => {
  return (
    <div className="relative h-96">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "https://worshipteamresources.com/wp-content/uploads/2021/11/1920x1080-KeyStudio-on-MacBook.png",
        }}
      ></div>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="container mx-auto my-auto text-white text-center relative z-10 py-16">
        <h1 className="text-3xl md:text-5xl font-semibold mt-20">
          The Ultimate Keyboard Utility Rig
        </h1>
      </div>
    </div>
  );
};

export default GearPage;
