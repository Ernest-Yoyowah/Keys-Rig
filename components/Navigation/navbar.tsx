"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { Icons } from "@/components/icons";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import { ModeToggle } from "../ModeToggler/modeToggler";
import Image from "next/image";

const keysRigComponents: {
  title: string;
  href: string;
  description: string;
}[] = [
  {
    title: "Main Keys",
    href: "/hub/keysrig/main",
    description: "Explore our main keyboard setup.",
  },
  {
    title: "Tools Needed (Main Keys)",
    href: "/hub/keysrig/main/tools",
    description:
      "Essential tools required for setting up the main keyboard rig.",
  },
  {
    title: "Cables Needed (Main Keys)",
    href: "/hub/keysrig/main/cables",
    description: "Required cables for connecting the main keyboard rig.",
  },
  {
    title: "Auxiliary Keys",
    href: "/hub/keysrig/aux/",
    description: "Discover our auxiliary keyboard setup.",
  },
  {
    title: "Tools Needed (Auxiliary Keys)",
    href: "/hub/keysrig/aux/tools",
    description:
      "Essential tools required for setting up the auxiliary keyboard rig.",
  },
  {
    title: "Cables Needed (Auxiliary Keys)",
    href: "/hub/keysrig/aux/cables",
    description: "Required cables for connecting the auxiliary keyboard rig.",
  },
];

const instrumentMarketComponents: {
  title: string;
  href: string;
  description: string;
}[] = [
  {
    title: "Buy and Sell Instruments",
    href: "/hub/instrumentMarket/buy-sell",
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

export function Navbar() {
  return (
    <nav className="bg-white w-full border-b md:border-0">
      <div className="max-w-screen-xl mx-auto md:flex md:px-8">
        <div className="flex md:py-5 md:block">
          <NavigationMenu>
            <Link href="/" className="flex mr-10 ">
              <Image
                src="/logo.jpg"
                width={60}
                height={5}
                alt="Screenshots of the dashboard project showing desktop version"
              />
              <h1 className="text-1xl font-bold text-slate-800 mt-1">
                Keyz Rig
              </h1>
            </Link>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="/" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Home
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Plugins</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <Link
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                          href="/hub/plugins"
                        >
                          <Icons.logo className="h-6 w-6" />
                          <div className="mb-2 mt-4 text-lg font-medium">
                            vst plugins
                          </div>
                          <p className="text-sm leading-tight text-muted-foreground">
                            Vst plugins crafted to elevate your music production
                            experience.
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <ListItem
                      href="/hub/plugins/featured"
                      title="Featured Plugins"
                    >
                      Upgrade your music production setup with exciting new
                      virtual instruments
                    </ListItem>
                    <ListItem
                      href="/hub/plugins/installation"
                      title="Installation"
                    >
                      How to install and setup your vst plugins.
                    </ListItem>
                    <ListItem href="/hub/plugins/top" title="Most Used plugins">
                      There are hundreds of free VSTs online, and finding good
                      ones takes time.
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Keys Rig</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                    {keysRigComponents.map((component) => (
                      <ListItem
                        key={component.title}
                        title={component.title}
                        href={component.href}
                      >
                        {component.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Instrument Market</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                    {instrumentMarketComponents.map((component) => (
                      <ListItem
                        key={component.title}
                        title={component.title}
                        href={component.href}
                      >
                        {component.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/docs" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    About
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              {/* <ModeToggle /> */}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
    </nav>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
