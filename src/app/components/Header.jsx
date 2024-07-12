import React from "react";
import Darkmodeswitch from "./Darkmodeswitch";

import { IoHomeSharp } from "react-icons/io5";
import { FaInfoCircle } from "react-icons/fa";
import Link from "next/link";

export default function Header() {
  return (
    <div className="flex justify-between px-4 py-1 items-center max-w-6xl  mx-auto">
      <div className="flex items-center gap-3">
        <Link href={"/"}>
          <h1 className="hidden sm:block text-xl ">Home</h1>
          <IoHomeSharp className="text-lg sm:hidden" />
        </Link>

        <Link href={"/about"}>
          <h1 className="hidden sm:block text-xl bold">About</h1>
          <FaInfoCircle className="text-lg sm:hidden" />
        </Link>
      </div>

      <div className="flex items-center gap-3">
        <Darkmodeswitch className="text-lg" />
        <div>
          <span className="bg-amber-500 px-2 text-xl rounded">Rare</span>
          <span className="hidden sm:inline text-lg">Clone</span>
        </div>
      </div>
    </div>
  );
}
