"use client";
import {
  UserGroupIcon,
  HomeIcon,
  CubeIcon,
  MusicalNoteIcon,
  PuzzlePieceIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { useState } from "react";

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: "Home", href: "/", icon: HomeIcon },
  {
    name: "Plugins",
    href: "/hub/plugins",
    icon: PuzzlePieceIcon,
  },
  { name: "Keys Rig", href: "/hub/keysrig", icon: CubeIcon }, // Use CubeIcon for "Keys Rig"

  {
    name: "Instrument Market",
    href: "/hub/instrumentMarket",
    icon: MusicalNoteIcon, // Use MusicNoteIcon for "Instrument Market"
  },
  { name: "Blog", href: "/blog", icon: UserGroupIcon },
];

export type KeysRigComponent = {
  title: string;
  href: string;
  description: string;
};

export type InstrumentMarketComponent = {
  title: string;
  href: string;
  description: string;
};

export const keysRigComponents: KeysRigComponent[] = [
  {
    title: "Keys Rig",
    href: "/hub/keysrig",
    description: "Explore our main keyboard setup.",
  },
  {
    title: "Build your own Keys Rig",
    href: "/hub/keysrig/build-rig",
    description: "Required cables for connecting the main keyboard rig.",
  },
  {
    title: "Gear & Cables Needed ",
    href: "/hub/keysrig/gear",
    description:
      "Knowing what keys gear is right for you and how it works together will benefit your playing, as well as the entire sound of the band!.",
  },
  {
    title: "Keys Rig Rundown",
    href: "/hub/keysrig/more-rigs",
    description: "Discover other rig setup from other keys musicians.",
  },
  // {
  //   title: "Tools Needed (Auxiliary Keys)",
  //   href: "/hub/keysrig/aux/tools",
  //   description:
  //     "Essential tools required for setting up the auxiliary keyboard rig.",
  // },
  // {
  //   title: "Cables Needed (Auxiliary Keys)",
  //   href: "/hub/keysrig/aux/cables",
  //   description: "Required cables for connecting the auxiliary keyboard rig.",
  // },
];

export const instrumentMarketComponents: InstrumentMarketComponent[] = [
  {
    title: "Buy and Sell Instruments",
    href: "/hub/instrumentMarket",
    description: "Explore the instrument market for buying, selling, and more.",
  },
  {
    title: "Repair and Rental Services",
    href: "/hub/instrumentMarket/repair-rental",
    description:
      "Find repair and rental services for your musical instruments.",
  },
  {
    title: "Sound Engineering",
    href: "/hub/instrumentMarket/sound-engineering",
    description:
      "Get assistance with sound engineering for your musical projects.",
  },
  {
    title: "Meet Instrumentalists",
    href: "/hub/instrumentMarket/meet-instrumentalists",
    description:
      "Connect with other instrumentalists and collaborate on musical projects.",
  },
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              `flex h-[48px] grow items-center gap-2 rounded-md p-3 text-sm font-medium hover:bg-white hover:text-black  md:p-2 md:px-3`,
              {
                " text-[#FFF]": pathname === link.href,
              }
            )}
          >
            <LinkIcon
              className={clsx("w-6", { "text-[#fff]": pathname === link.href })}
            />

            <p className="block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
