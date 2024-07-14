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
    <form className="flex  max-w-lg mx-auto p-2 gap-1" onSubmit={handelChange}>
      <input
        type="text"
        className="input input-bordered w-full flex-1 bg-transparent border-gray-500"
        placeholder="Search"
        onChange={(e) => setsearch(e.target.value)}
      />

      <button className="btn btn-ghost text-gray-900  dark:text-gray-100 ">
        Enter
      </button>
    </form>
  );
};

export default SearchBox;
