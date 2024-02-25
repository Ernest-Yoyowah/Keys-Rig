"use client";

import * as React from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const [state, setState] = React.useState(false);

  const menus = [
    { title: "Home", path: "/" },
    { title: "Plugins", path: "/hub/plugins" },
    { title: "Keys Rig", path: "/hub/keysrig" },
    { title: "Contact Us", path: "/hub/your-path" },
  ];

  return (
    <nav className="bg-white w-full border-b md:border-0">
      <div className="items-center px-4 max-w-screen-xl mx-auto md:flex md:px-8">
        <div className="flex items-center justify-between py-3 md:py-5 md:block">
          <Link href="/" className="flex">
            <Image
              src="/logo.jpg"
              width={60}
              height={5}
              className="p-0 m-0"
              alt="Screenshots of the dashboard project showing desktop version"
            />
            <h1 className="text-2xl font-bold text-black-600 mt-3.5">
              Keyz Rig
            </h1>
          </Link>
          <div className="md:hidden">
            <button
              className="text-black-700 outline-none p-2  rounded-md focus:border-black-400 focus:border"
              onClick={() => setState(!state)}
            >
              <Menu />
            </button>
          </div>
        </div>
        <div
          className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
            state ? "block" : "hidden"
          }`}
        >
          <ul className="justify-center font-semibold items-center space-y-8 md:flex md:space-x-6 md:space-y-0">
            {menus.map((item, idx) => (
              <li key={idx} className="text-gray-600 hover:text-indigo-600">
                <Link href={item.path}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
