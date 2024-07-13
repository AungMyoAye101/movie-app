import React from "react";
import Darkmodeswitch from "./Darkmodeswitch";

import { IoHomeSharp } from "react-icons/io5";
import { FaInfoCircle } from "react-icons/fa";
import Link from "next/link";

export default function Header() {
  return (
    <div className="navbar bg-transparent">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">Rare</a>
      </div>
      <div className="flex-none">
        <Darkmodeswitch />
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <Link href={"/about"}>About</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
