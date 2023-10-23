import Link from "next/link";

export const Sidebar = () => {
  return (
    <>
      <div className="bg-gray-400 flex flex-col h-full">
        <aside className="">
          <Link href="/documentacion/navbar">Navbar</Link>
        </aside>
      </div>
    </>
  );
};
