import React from "react";
import MenuItems from "./MenuItems";
import Darkmodeswitch from "./Darkmodeswitch";
import { AiFillHome } from "react-icons/ai";
import { BsFillInfoCircleFill } from "react-icons/bs";
import { MdDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";
export default function Header() {
  return (
    <div className="flex justify-between py-2 px-6 text-lg bg-violet-500">
      <div className="flex gap-4 ">
        <MenuItems title="home" address="/" Icon={AiFillHome} />
        <MenuItems title="About" address="/" Icon={BsFillInfoCircleFill} />
      </div>
      <div className="flex gap-4 items-center">
        <div className="flex">
          <MdDarkMode className=" text-2xl" />
          <CiLight className=" text-2xl" />
        </div>
        <div>
          <span className="text-lg bg-amber-500 px-2 py-1 rounded mr-1">
            RARE
          </span>
          <span className="hidden sm:inline text-sm ">Clone</span>
        </div>
      </div>
    </div>
  );
}
