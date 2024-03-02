"use client";

import * as React from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { ModeToggle } from "../ModeToggler/modeToggler";

export default function Navbar() {
  const [state, setState] = React.useState(false);
  const pathname = usePathname();

  const menus = [
    { title: "Home", path: "/" },
    { title: "Plugins", path: "/hub/plugins" },
    { title: "Keys Rig", path: "/hub/keysrig" },
    { title: "Producer Tech Tips", path: "/hub/producerTech" },
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
              alt="Screenshots of the dashboard project showing desktop version"
            />
            <h1 className="text-1xl font-bold text-slate-800 mt-1">Keyz Rig</h1>
          </Link>
          <div className="md:hidden">
            <button
              className="text-slate-800 outline-none p-2  rounded-md focus:border-black-400 focus:border"
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
              <li key={idx} className="text-gray-600 hover:text-sky-700">
                <Link
                  href={item.path}
                  className={clsx(
                    "flex h-[38px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-0 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-0 md:px-3",
                    {
                      "bg-sky-100 text-blue-600": pathname === item.path,
                    }
                  )}
                >
                  {item.title}
                </Link>
              </li>
            ))}
            {/* <ModeToggle /> */}
          </ul>
        </div>
      </div>
    </nav>
  );
}
