import Link from "next/link";
import { Button } from "../../../components/ui/button";
import { featuredPlugins } from "../../../app/lib/featuredPlugins";
import React from "react";

const Featured: React.FC = () => {
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
