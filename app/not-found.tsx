import { Navbar } from "@/components/Navigation/navbar";
import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <Navbar />
      Not Found Could not find requested resource
      <Link href="/">Return Home</Link>
    </>
  );
}
