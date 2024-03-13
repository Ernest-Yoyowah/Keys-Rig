import NavLinks from "@/app/ui/navbar/nav-links";

export default function SideNav() {
  return (
    <div className="flex h-full flex-col px-3 py-4">
      <div className="block grow flex-row justify-between space-x-0 space-y-2">
        <NavLinks />
        <div className=" h-auto w-full grow rounded-md bg-gray-50 "></div>
      </div>
    </div>
  );
}
