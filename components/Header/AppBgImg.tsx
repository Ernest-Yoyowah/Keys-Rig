import React from "react";
import Image from "next/image";
import bgImage from "@/public/header_bg.png";

const AppBgImg: React.FC = () => {
  return (
    <div style={{ width: "100%", height: "100vh", overflow: "hidden" }}>
      <Image
        src="https://thumbs.dreamstime.com/b/smiling-young-black-girl-listening-to-music-headset-closeup-portrait-happy-wireless-closed-eyes-excited-kid-enjoying-214569394.jpg"
        placeholder="blur"
        quality={100}
        fill
        sizes="100vw"
        style={{
          objectFit: "cover",
          zIndex: -1,
          filter: "brightness(60%)",
        }}
        alt="Header Image"
      />
    </div>
  );
};

export default AppBgImg;
