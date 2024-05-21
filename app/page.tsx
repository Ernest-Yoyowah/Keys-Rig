import "@/styles/globals.css";
import About from "@/containers/home-page/about-section/about";
import Header from "@/components/Header/header";
import Introductory from "@/containers/home-page/Introductory/introductory";
import { Navbar } from "@/components/Navigation/navbar";
import BlogSection from "@/containers/home-page/blog-section/blogSection";
import AboutVSTs from "@/containers/home-page/about-section/aboutVSTs";
import CollaborationSection from "@/components/ui/CollaborationSection";

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between">
        <Navbar />
        <Header />
        <Introductory />
        <AboutVSTs />
        <About />
        <CollaborationSection />
        <BlogSection />
      </main>
    </>
  );
}
