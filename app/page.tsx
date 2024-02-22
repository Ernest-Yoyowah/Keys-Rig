import Image from "next/image";
import { lusitana } from "./ui/fonts";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p
          className={`${lusitana.className} text-xl text-white-800 md:text-3xl md:leading-normal`}
        >
          <strong>Welcome to Keys Rig.</strong> This is the Ultimate VST Hub
        </p>
      </div>
    </main>
  );
}
