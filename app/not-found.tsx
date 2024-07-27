import { Navbar } from "@/components/Navigation/navbar";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <div className="bg-gray-800 py-12 text-center text-white">
        <h1 className="text-3xl font-semibold">Not Found</h1>
        <div className="container mx-auto">
          <p className="my-4 sub-hero-text_2">
            Could not find requested resource
          </p>
          <Button className="bg-white text-black hover:bg-[#fffffff1] hover:text-gray-900 hover:border-white">
            <Link href="/">Return Home</Link>
          </Button>
        </div>
      </div>
    </>
  );
}
