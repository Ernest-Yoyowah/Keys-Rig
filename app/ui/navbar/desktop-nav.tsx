import React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import Image from "next/image";
import { Icons } from "@/components/icons";
import { instrumentMarketComponents, keysRigComponents } from "./nav-links";
import { ListItem } from "@/components/Navigation/navbar";

const DesktopNav = () => {
  return (
    <NavigationMenu>
      <Link href="/" className="flex md:mr-48 ">
        <Image
          src="/logo.jpg"
          width={60}
          height={5}
          alt="Screenshots of the dashboard project showing desktop version"
        />
        <h1 className="text-1xl font-bold text-slate-800 mt-1">Keyz Rig</h1>
      </Link>

      <div className="hidden md:flex">
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
                <ListItem href="/hub/plugins/featured" title="Featured Plugins">
                  Upgrade your music production setup with exciting new virtual
                  instruments
                </ListItem>
                <ListItem href="/hub/plugins/installation" title="Installation">
                  How to install and setup your vst plugins.
                </ListItem>
                <ListItem href="/hub/plugins/top" title="Most Used plugins">
                  There are hundreds of free VSTs online, and finding good ones
                  takes time.
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
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[780px] ">
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
            <Link href="/blog" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Blog
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          {/* <ModeToggle /> */}
        </NavigationMenuList>
      </div>
    </NavigationMenu>
  );
};

export default DesktopNav;
