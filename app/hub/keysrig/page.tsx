import React from "react";
import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Link } from "lucide-react";
import Image from "next/image";
import ExpansionItem from "@/components/ui/ExpansionItem";

export const metadata: Metadata = {
  title: "Worship Rig Setup | Keys Rig",
};

const Rig: React.FC = () => {
  const expansions = [
    {
      title: "Datsunn’s favorite Expansions",
      description:
        "Dive into a world of curated sounds with Datsunn, our Expansion connoisseur. Discover his hand-picked favorites and watch him quickly create some beats from scratch with his top selections.",
      youtubeLink:
        "//www.youtube.com/embed/gb48bvtbFRk?showinfo=1&amp;rel=0&amp;hd=1&amp;cc_lang_pref=en&amp;cc_load_policy=1",
      imageUrl: "/vid_1.jpg",
    },
    {
      title: "YohanJim’s favorite Expansions",
      description:
        "Dive into a world of curated sounds with Datsunn, our Expansion connoisseur. Discover his hand-picked favorites and watch him quickly create some beats from scratch with his top selections.",
      youtubeLink:
        "//www.youtube.com/embed/gb48bvtbFRk?showinfo=1&amp;rel=0&amp;hd=1&amp;cc_lang_pref=en&amp;cc_load_policy=1",
      imageUrl: "/vid_1.jpg",
    },
    {
      title: "Jonh Mike’s favorite Expansions",
      description:
        "Dive into a world of curated sounds with Datsunn, our Expansion connoisseur. Discover his hand-picked favorites and watch him quickly create some beats from scratch with his top selections.",
      youtubeLink:
        "//www.youtube.com/embed/gb48bvtbFRk?showinfo=1&amp;rel=0&amp;hd=1&amp;cc_lang_pref=en&amp;cc_load_policy=1",
      imageUrl: "/vid_1.jpg",
    },
  ];

  return (
    <div className="bg-[#172D44]">
      <div className="text-[#f5f5f5] md:flex md:justify-center md:items-center p-5 md:p-0 ">
        <div className=" ">
          <div className="max-w-5xl md:pb-6 md:pt-0 md:text-center space-y-10">
            <h1 className="text-2xl md:text-4xl font-bold mt-7 md:mt-20 text-left	md:text-center">
              Piano & Keys Gear Setup
            </h1>
            <p className="pb-0 pt-0 text-left	md:text-center">
              Unlock the full potential of your musical expression with our
              comprehensive guide to piano and keys gear setup. Whether you're a
              seasoned pianist or a budding keyboardist, crafting the perfect
              setup is essential for unleashing your creativity. Dive into our
              expert recommendations for MIDI controllers, stage pianos,
              synthesizers, and more, tailored to suit your playing style and
              musical preferences.
            </p>

            <p className="p-0 md:p-5 text-left	md:text-center">
              <span className="text-lg font-bold">Explore Gear Selection:</span>{" "}
              Choose from a wide range of keyboards, MIDI controllers, and
              accessories to create your ideal setup.
            </p>

            <Button
              variant="default"
              className="bg-white text-black border-white rounded-none font-semibold hover:bg-[#d1d5db] hover:text-black hover:border-white"
            >
              View Gear Options
            </Button>
          </div>
        </div>
      </div>
      <div className="">
        <img
          src="/setupImg.jpg"
          alt="worhip rig setup image"
          style={{ minWidth: "100%", minHeight: "50vh", objectFit: "cover" }}
        />
      </div>
      <div className="text-[#f5f5f5] flex justify-center items-center p-5 md:p-0">
        <div className="max-w-5xl pb-6 p-0 md:pt-0 md:text-center space-y-5 md:space-y-10">
          <h1 className="text-2xl md:text-4xl font-bold md:mt-20 text-left	md:text-center">
            Build your own bundle
          </h1>
          <p className="pb-0 pt-0 text-left	md:text-center">
            Click below to check out all the Expansions on offer, pick the nine
            you love the most, and simply add them to your basket to create your
            own personalized bundle. The discounted price will be applied
            automatically, for a saving of over 75%.
          </p>
          <Link to="/hub/keysrig/tools">
            <Button
              variant="default"
              className="bg-white text-black border-white rounded-none font-semibold hover:bg-[#d1d5db]  hover:text-black hover:border-white"
            >
              Choose your Expansions
            </Button>
          </Link>
        </div>
      </div>
      <img
        src="/setupImg_2.jpg"
        alt="worhip rig setup image"
        style={{ minWidth: "90%", minHeight: "30vh", objectFit: "cover" }}
      />

      <div id="c1017229" className="p-1 md:p-20">
        <div className="container">
          {expansions.map((expansion, index) => (
            <div
              key={index}
              className={`grid grid-cols-1 md:grid-cols-2 gap-4 md:my-48 my-5 ${
                index % 2 === 0 ? "" : "md:grid-flow-col-reverse"
              }`}
            >
              {index % 2 === 0 ? (
                <>
                  <div className="col-text md:w-96">
                    <ExpansionItem {...expansion} />
                  </div>
                  <div className="col-image">
                    <div className="image-container">
                      <img
                        src={expansion.imageUrl}
                        alt="worship rig setup image"
                        style={{
                          minWidth: "90%",
                          minHeight: "30vh",
                          objectFit: "cover",
                        }}
                      />
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="col-image">
                    <div className="image-container">
                      <img
                        src={expansion.imageUrl}
                        alt="worship rig setup image"
                        style={{
                          minWidth: "90%",
                          minHeight: "30vh",
                          objectFit: "cover",
                        }}
                      />
                    </div>
                  </div>
                  <div className="col-text md:w-96">
                    <ExpansionItem {...expansion} />
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Rig;
