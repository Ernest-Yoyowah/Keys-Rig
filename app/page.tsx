import Image from "next/image";
import { lusitana } from "./ui/fonts";
import { ModeToggle } from "@/components/ModeToggler/modeToggler";

import { CardDemo } from "@/components/Header/CardDemo";
import Navbar from "@/components/Navigation/navbar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Navbar />
      <ModeToggle />
    </main>
  );
}
