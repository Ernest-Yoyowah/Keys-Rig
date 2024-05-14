import About from "@/containers/home-page/About/about";
import Header from "@/components/Header/header";
import Introductory from "@/components/Introductory/introductory";
import { Navbar } from "@/components/Navigation/navbar";
import "../styles/globals.css";
import { Suspense } from "react";
import Loading from "./blog/loading";
import AboutPage from "@/containers/home-page/About/AboutPage";
import FeatureSection from "@/components/ui/FeatureSection";
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
