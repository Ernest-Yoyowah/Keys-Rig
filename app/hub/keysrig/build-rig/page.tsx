import React from "react";

const BuildRigPage = () => {
  return (
    <div className="relative h-96">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            'url("https://cdn.shopify.com/s/files/1/0552/4206/4048/t/4/assets/sundaykeysinsiders_vH5y.jpg?v=1631290429638")',
        }}
      ></div>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="container mx-auto my-auto text-white text-center relative py-16">
        <h1 className="text-3xl md:text-5xl font-semibold mt-20">
          The Ultimate Keyboard Utility Rig
        </h1>
      </div>
    </div>
  );
};

export default BuildRigPage;
