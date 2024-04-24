import About from "@/components/About/about";
import Header from "@/components/Header/header";
import Hero from "@/components/Hero/hero";
import Introductory from "@/components/Introductory/introductory";
import { Navbar } from "@/components/Navigation/navbar";
import "../styles/globals.css";
import { Suspense } from "react";
import Loading from "./loading";

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between">
        <Navbar />
        <Header />
        {/* <Hero /> */}
        <Introductory />
        <About />
      </main>
    </>
  );
}
