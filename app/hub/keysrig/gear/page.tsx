import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Gear - Choosing which gear to buy when building your keyboard rig can be overwhelming",
};

const gearItems = [
  {
    name: "Laptop",
    image:
      "https://a.storyblok.com/f/152284/1080x720/186635879f/m2-macbook-air.png",
  },
  {
    name: "Keyboard",
    image:
      "https://static.toiimg.com/thumb/resizemode-4,width-1200,height-900,msid-81228233/81228233.jpg",
  },
  {
    name: "Keyboard Stand",
    image:
      "https://americansongwriter.com/wp-content/uploads/2023/01/midi-stands.jpg?resize=300%2C300",
  },
  {
    name: "MIDI Controller",
    image:
      "https://www.native-instruments.com/typo3temp/pics/img-ce-seamless-crop-right-seo-keyboards-landing-page-03-a-series-1a48b1a58237ffed9187a9dc719660bc-m@2x.jpg",
  },
  {
    name: "Laptop Stand",
    image:
      "https://headliner-la.com/wp-content/uploads/2022/03/Digistand-Pro-Header-Image-1940x900-1.jpg",
  },
  {
    name: "Audio Interface",
    image:
      "https://splice.com/blog/wp-content/uploads/2023/02/0223-Best-audio-interfaces-in-2023-BlogPost.jpg",
  },
  {
    name: "Nano Controller",
    image:
      "https://preview.free3d.com/img/2013/02/2145880837097261029/uw93fgil.jpg",
  },
  {
    name: "Sustain Pedal",
    image:
      "https://www-konga-com-res.cloudinary.com/w_400,f_auto,fl_lossy,dpr_3.0,q_auto/media/catalog/product/C/h/Cherub-Keyboard-Sustain-Pedal---Piano-Style-8080273_1.jpg",
  },
  {
    name: "Headphones",
    image:
      "https://www.magneticmag.com/.image/ar_16:9%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cg_faces:center%2Cq_auto:good%2Cw_620/MTk3MDg2NTUyNTAzOTUyNDY3/1.jpg",
  },
  {
    name: "USB Hubs",
    image:
      "https://cdn.shopify.com/s/files/1/0552/4206/4048/files/ankerhub2_480x480.jpg?v=1654881487",
  },
  {
    name: "MIDI Cables",
    image:
      "https://media.karousell.com/media/photos/products/2020/6/24/usb_midi_interface_cable__digi_1592999718_8a47d99d_progressive",
  },
  {
    name: "Additional Cables",
    image:
      "https://cdn-gajed.nitrocdn.com/xnFRynGphiHZVmaFQUenqaOUuQKzUTfS/assets/images/optimized/rev-72f06e6/cdn.digitaldjtips.com/app/uploads/2017/06/09132731/cables-back-digital-dj-tips-1204x642.jpg",
  },
];

const textContent = {
  title: "Gear & Software",
  subtitle:
    "One of the hardest parts of being a worship keys player is choosing which gear to buy when building your keyboard rig.",
};

const GearPage = () => {
  return (
    <>
      <div className="relative h-96">
        <img
          className="absolute inset-0 w-full h-full object-cover"
          src="https://americansongwriter.com/wp-content/uploads/2023/01/midi-stands.jpg?fit=2000%2C800"
          alt="Header Background"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 flex items-center justify-center text-white">
          <div className="text-center max-w-4xl md:p-0 px-5">
            <h1 className="hero-text_2 mb-4">{textContent.title}</h1>
            <p className="sub-hero-text_2">{textContent.subtitle}</p>
          </div>
        </div>
      </div>
      <div className="md:mx-auto px-5 my-auto text-slate-800 md:text-center py-8">
        <div className="max-w-3xl mx-auto">
          {/* Display gear items */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            {gearItems.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-lg overflow-hidden shadow-lg"
              >
                <img
                  className="w-full h-48 object-cover"
                  src={item.image}
                  alt={item.name}
                />
                <div className="p-6">
                  <h2 className="text-lg font-semibold mb-2">{item.name}</h2>
                  <a
                    href="#"
                    className="text-blue-500 inline-block mt-4 hover:underline"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default GearPage;
