import About from "@/containers/home-page/About/about";
import Header from "@/containers/home-page/Header/header";
import Introductory from "@/containers/home-page/Introductory/introductory";
import { Navbar } from "@/components/Navigation/navbar";
import "../styles/globals.css";
import AboutPage from "@/containers/home-page/About/AboutPage";
import ArticlePage from "@/containers/home-page/About/article";
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
