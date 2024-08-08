"use client";
import * as React from "react";
import { AlignRight, X } from "lucide-react";
import SideNav from "@/app/ui/navbar/sidenav";
import DesktopNav from "@/app/ui/navbar/desktop-nav";
import { NavigationMenuLink } from "../ui/navigation-menu";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [state, setState] = React.useState(false);

  const closeMobileMenu = () => {
    setState(false);
  };

  return (
    <nav className="bg-white w-full border-b md:border-0">
      <div className="items-center px-4 max-w-screen-xl mx-auto md:flex md:px-8">
        <div className="flex items-center justify-between py-3 md:py-3 md:block">
          {/* Desktop Navbar */}
          <DesktopNav />

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              className="text-slate-800 outline-none p-2 rounded-md focus:border-black-400 focus:border"
              onClick={() => setState(!state)}
            >
              {state ? <X /> : <AlignRight />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-50 md:hidden transition-opacity ${
          state ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={closeMobileMenu}
      >
        <div className="bg-[#262644] h-full w-64 transition-transform ease-in-out duration-300">
          <div className="p-0 text-[#bab3b3]">
            <SideNav />
          </div>
        </div>
      </div>
    </nav>
  );
}

export const ListItem = React.forwardRef<
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
