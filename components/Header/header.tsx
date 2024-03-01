import React from "react";
import AppBgImg from "./AppBgImg";

const Header = () => {
  return (
    <div className="">
      <div className="w-max absolute p-10 m-20 left-20 ">
        <h1 className="text-white font-bold text-5xl">Welcome to Keys Rig</h1>
        <p className="text-white font-bold text-2xl">
          Step into a world where creativity knows no bounds...
        </p>
      </div>
      <AppBgImg />
    </div>
  );
};

export default Header;
