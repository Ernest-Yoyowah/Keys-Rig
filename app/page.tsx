import About from "@/components/About/about";
import Header from "@/components/Header/header";
import Introductory from "@/components/Introductory/introductory";
import { Navbar } from "@/components/Navigation/navbar";
import "../styles/globals.css";
import AboutPage from "@/components/About/AboutPage";
import ArticlePage from "@/components/About/blogSection";
import CollaborationSection from "@/components/ui/CollaborationSection";

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between">
        <Navbar />
        <Header />
        <Introductory />
        <AboutPage />
        <About />
        <CollaborationSection />
        <ArticlePage />
      </main>
    </>
  );
}
