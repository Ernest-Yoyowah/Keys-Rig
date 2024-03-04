import React from "react";
import AppBgImg from "./AppBgImg";
import { Button } from "../ui/button";
import Link from "next/link";

const Header = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="absolute text-center m-0">
        <h1 className="text-white font-bold text-4xl md:text-5xl lg:text-7xl ">
          Welcome to Keys Rig
        </h1>
        <p className="text-white font-bold text-2xl md:text-1xl lg:text-2xl ">
          Step into a world where creativity knows no bounds...
        </p>
        <br />
        <div className="space-x-2">
          <Button
            variant="secondary"
            className="bg-white text-black hover:bg-black hover:text-white hover:border-black"
          >
            <Link href="/hub/plugins">Featured Plugins</Link>
          </Button>
          <Button
            variant="default"
            className="bg-black text-white border border-white hover:bg-white hover:text-black hover:border-white"
          >
            <Link href="/hub/keysrig">Key Rig</Link>
          </Button>
        </div>
        <br />
        <br />
      </div>
      <AppBgImg />
    </div>
  );
};

export default Header;
