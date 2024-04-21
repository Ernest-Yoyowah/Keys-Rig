import { Navbar } from "@/components/Navigation/navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="">
        <Navbar />
      </div>
      <div>{children}</div>
    </>
  );
}
