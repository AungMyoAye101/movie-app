import React from "react";
import Darkmodeswitch from "./Darkmodeswitch";

import { IoHomeSharp } from "react-icons/io5";
import { FaInfoCircle } from "react-icons/fa";

export default function Header() {
  return (
    <div className="flex gap-2 mb-8">
      <IoHomeSharp />
      <FaInfoCircle />
      <Darkmodeswitch />
    </div>
  );
}
