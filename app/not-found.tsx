import { Navbar } from "@/components/Navigation/navbar";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex flex-col items-center">
      <Navbar />
      <div className="py-20">
        <h2>Not Found</h2>
        <p>Could not find requested resource</p>
        <Link href="/">Return Home</Link>
      </div>
    </main>
  );
}
