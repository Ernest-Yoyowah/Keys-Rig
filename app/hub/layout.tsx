import { Navbar } from "@/components/Navigation/navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="">
      <div className="">
        <Navbar />
      </div>
      <div className="">{children}</div>
    </div>
  );
}
