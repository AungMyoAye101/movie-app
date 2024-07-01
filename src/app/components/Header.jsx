import React from "react";
import MenuItems from "./MenuItems";
import { AiFillHome } from "react-icons/ai";
import { BsFillInfoCircleFill } from "react-icons/bs";
export default function Header() {
  return (
    <div className="flex justify-between py-2 px-6 text-lg bg-violet-500">
      <div className="flex gap-4 ">
        <MenuItems title="home" address="/" Icon={AiFillHome} />
        <MenuItems title="About" address="/" Icon={BsFillInfoCircleFill} />
      </div>
      <div className="flex gap-4">
        <MenuItems title="Dark" address="/" Icon={AiFillHome} />
        <MenuItems title="Logo" address="/" Icon={BsFillInfoCircleFill} />
      </div>
    </div>
  );
}
