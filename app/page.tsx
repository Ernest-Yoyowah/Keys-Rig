import Header from "@/components/Header/header";
import Navbar from "@/components/Navigation/navbar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Navbar />
      {/* <Header /> */}
    </main>
  );
}
