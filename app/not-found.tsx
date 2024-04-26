import { Navbar } from "@/components/Navigation/navbar";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <div className="bg-gray-800 py-12 text-center text-white">
        <div className="container mx-auto">
          <h1 className="hero-text_2">Not Found</h1>
          <p className="my-4 sub-hero-text_2">
            Could not find requested resource
          </p>
          <Button>
            <Link href="/">Return Home</Link>
          </Button>
        </div>
      </div>
    </>
  );
}
