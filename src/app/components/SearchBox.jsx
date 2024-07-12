"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";

const SearchBox = () => {
  const [search, setsearch] = useState("");
  const router = useRouter();
  const handelChange = (e) => {
    e.preventDefault();
    router.push(`/search/${search}`);
  };
  return (
    <form className="flex justify-between px-10" onSubmit={handelChange}>
      <input
        type="text"
        placeholder="Search with text..."
        className="w-full py-2 bg-transparent outline-none rounded m-4"
        onChange={(e) => setsearch(e.target.value)}
      />
      <button
        className="text-amber-500 disabled:text-gray-300"
        disabled={search === ""}
      >
        Enter
      </button>
    </form>
  );
};

export default SearchBox;
