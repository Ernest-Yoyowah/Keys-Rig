import { useState } from "react"; // Import useState
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

const links = [
  { name: "Home", href: "/", icon: HomeIcon },
  { name: "Plugins", href: "/hub/plugins", icon: PuzzlePieceIcon },
  { name: "Keys Rig", href: "/hub/keysrig", icon: CubeIcon },
  {
    name: "Instrument Market",
    href: "/hub/instrumentMarket",
    icon: MusicalNoteIcon,
  },
  { name: "Blog", href: "/blog", icon: UserGroupIcon },
];

export default function NavLinks() {
  const pathname = usePathname();
  const [activeLink, setActiveLink] = useState(pathname); // Track active link

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
                "text-black": pathname === link.href,
              }
            )}
            // Set active link when link is clicked
            onClick={() => setActiveLink(link.href)}
          >
            {/* Apply color class based on active link */}
            <LinkIcon
              className={clsx("w-6", { "text-black": pathname === link.href })}
            />
            <p
              className={clsx("block", {
                "text-black": pathname === link.href,
              })}
            >
              {link.name}
            </p>
          </Link>
        );
      })}
    </>
  );
}
