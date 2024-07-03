import Link from "next/link";
import React from "react";

const SubHeader = () => {
  return (
    <header className="border-b h-12 flex items-center sticky top-16 z-50 bg-white">
      <ul className="flex items-center gap-3 container mx-auto md:max-w-7xl">
        <li className="cursor-pointer text-zinc-700 capitalize">
          <Link href="#" className="hover:underline decoration-[#1dbf73]">
            Graphics & Design
          </Link>
        </li>
        <li className="cursor-pointer text-zinc-700 capitalize hover:underline decoration-[#1dbf73]">
          <Link href="#">Programming & Tech</Link>
        </li>
      </ul>
    </header>
  );
};

export default SubHeader;
