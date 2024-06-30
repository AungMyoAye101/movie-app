import React from "react";

export default function Header() {
  return (
    <div className="flex justify-between py-2 px-6 text-lg bg-violet-500">
      <div className="flex gap-4 ">
        <div>Home</div>
        <div>About</div>
      </div>
      <div className="flex gap-4">
        <div>Dark</div>
        <div>Logo</div>
      </div>
    </div>
  );
}
