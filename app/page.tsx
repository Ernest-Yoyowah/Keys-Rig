import About from "@/containers/home-page/about-section/about";
import Header from "@/components/Header/header";
import Introductory from "@/components/Introductory/introductory";
import { Navbar } from "@/components/Navigation/navbar";
import "@/styles/globals.css";
import AboutPage from "@/containers/home-page/about-section/AboutPage";
import BlogSection from "@/containers/home-page/blog-section/blogSection";
import CollaborationSection from "@/components/ui/CollaborationSection";
import VSTs from "@/containers/plugins-page/VstPlugins/vstPlugins";

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between">
        <Navbar />
        <Header />
        <Introductory />
        <AboutPage />
        <About />
        {/* <VSTs /> */}
        <CollaborationSection />
        <BlogSection />
      </main>
    </>
  );
}
