import React from "react";
import Image from "next/image";
import bgImage from "@/public/header_bg.jpg";

const AppBgImg = () => {
  return (
    <Image
      src={bgImage}
      placeholder="blur"
      fill
      sizes="100vw"
      style={{
        objectFit: "cover",
        zIndex: -1,
      }}
      alt="Header Image"
    />
  );
};

export default AppBgImg;
