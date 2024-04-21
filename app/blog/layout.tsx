import { Navbar } from "@/components/Navigation/navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="">
      <div className="">
        <Navbar />
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-0">{children}</div>
    </div>
  );
}
