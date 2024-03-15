import Link from "next/link";
import { Button } from "../ui/button";

const Featured: React.FC = () => {
  // Sample data for featured plugins
  const featuredPlugins = [
    {
      id: 1,
      name: "KOMPLETE bundles",
      imageUrl:
        "https://www.native-instruments.com/typo3temp/pics/img-tile-homepage-featured-products-instruments-effects-v2-35a4943fb72aea8760100c5f46195f25-d.jpg",
    },
    {
      id: 2,
      name: "Instruments & effects",
      imageUrl:
        "https://www.native-instruments.com/typo3temp/pics/img-tile-homepage-featured-products-instruments-effects-v2-35a4943fb72aea8760100c5f46195f25-d.jpg",
    },
    {
      id: 3,
      name: "KOMPLETE Start",
      imageUrl:
        "https://www.native-instruments.com/typo3temp/pics/img-tile-homepage-featured-product-komplete-start-fa06377ce049d5595e5873ee6d887884-d.jpg",
    },
    {
      id: 4,
      name: "Keyboards",
      imageUrl:
        "https://www.native-instruments.com/typo3temp/pics/img-tile-homepage-featured-products-keyboards-new-b6471e1742981e62ac330935c622a9fd-d.jpg",
    },
    {
      id: 5,
      name: "MASCHINE MIKRO",
      imageUrl:
        "https://www.native-instruments.com/typo3temp/pics/img-tile-homepage-featured-products-maschine-mikro-c32c78b972397c06d08141c32b2b6538-d.jpg",
    },
    {
      id: 6,
      name: "MASCHINE",
      imageUrl:
        "https://www.native-instruments.com/typo3temp/pics/img-tile-homepage-featured-product-maschine-7cb485d1643c2050365288a7f396c29a-d.jpg",
    },
    {
      id: 7,
      name: "TRAKTOR PRO 3",
      imageUrl:
        "https://www.native-instruments.com/typo3temp/pics/img-tile-homepage-featured-products-traktor-pro-3-4a0b01f10c05402823243baea2fa2fd3-d.jpg",
    },
    {
      id: 8,
      name: "DJ products",
      imageUrl:
        "https://www.native-instruments.com/typo3temp/pics/img-tile-homepage-featured-products-dj-products-d6ac3274a7ef577ce74ab25ad991ee4d-d.jpg",
    },
    {
      id: 9,
      name: "KONTAKT 7",
      imageUrl:
        "https://www.native-instruments.com/typo3temp/pics/img-tile-homepage-featured-products-kontakt-7-2-4f3a319d293692e1fa1d6fe06dcf7792-d.jpg",
    },
  ];

  return (
    <div className="text-image theme-default ce-3-pf text-left cols-3 cols-tiles md:p-20">
      <div id="plugins" className="container">
        <div className="row-text">
          <div className="flex justify-between items-center">
            <div className="md:text-3xl font-semibold text-slate-800">
              <h2>Featured Plugins</h2>
            </div>
            <div className="text-right">
              <Button>
                <Link href="/hub/plugins" className="btn btn-cta">
                  See all PlugIns
                </Link>
              </Button>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap">
          {featuredPlugins.map((plugin) => (
            <div key={plugin.id} className="w-full sm:w-1/2 md:w-1/3 p-4">
              <div className="col-container">
                <div className="col-image">
                  <Link
                    href={`/en/catalog/${plugin.name
                      .toLowerCase()
                      .replace(/ /g, "-")}/`}
                  >
                    <div className="image-container">
                      <img
                        src={plugin.imageUrl}
                        alt={plugin.name}
                        className="w-full h-auto"
                      />
                      <div className="image-caption text-left">
                        <h4 className="plugin-name">{plugin.name}</h4>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Featured;
