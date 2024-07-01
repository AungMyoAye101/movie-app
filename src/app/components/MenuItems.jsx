import React from "react";
import Link from "next/link";

export default function MenuItems({ title, address, Icon }) {
  return (
    <Link href={address} className="hover:text-amber-400 hover:underline">
      <Icon className="text-2xl sm:hidden" />
      <p className="uppercase text-lg hidden sm:inline">{title}</p>
    </Link>
  );
}
