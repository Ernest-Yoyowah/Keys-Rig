import "@/styles/globals.css";
import About from "@/components/About/about";
import Header from "@/components/Header/header";
import Introductory from "@/components/Introductory/introductory";
import { Navbar } from "@/components/Navigation/navbar";
import BlogSection from "@/components/Blog/blogSection";
import AboutVSTs from "@/components/About/aboutVSTs";
import CollaborationSection from "@/components/ui/CollaborationSection";

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between">
        <Navbar />
        <Header />
        <Introductory />
        {/* <AboutVSTs /> */}
        <About />
        <CollaborationSection />
        <BlogSection />
      </main>
    </>
  );
}
