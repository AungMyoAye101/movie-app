"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React from "react";

export default function NavBarItem({ title, param }) {
  const searchParams = useSearchParams();
  const genre = searchParams.get("genre");

  return (
    <div>
      <Link
        className={`hover:text-amber-500 text-lg `}
        href={`/?genre=${param}`}
      >
        {title}
      </Link>
    </div>
  );
}
