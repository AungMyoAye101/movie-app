"use client";

import { useEffect } from "react";

useEffect;

const error = ({ error, reset }) => {
  useEffect(() => {
    console.log(error);
  }, [error]);

  return (
    <div className="text-center text-lg mt-12 ">
      <h1>Something Worng.Please try again.</h1>
      <button onClick={() => reset()} className="hover:text-amber-400">
        Try again
      </button>
    </div>
  );
};

export default error;
