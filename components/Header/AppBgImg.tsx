import React from "react";
import Image from "next/image";
import bgImage from "@/public/header_bg.jpg";

const AppBgImg = () => {
  return (
    <Image
      src={bgImage}
      width={1200}
      height={300}
      style={{
        objectFit: "cover",
        zIndex: -1,
      }}
      alt="Header Image"
    />
  );
};

export default AppBgImg;
