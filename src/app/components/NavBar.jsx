import React from "react";
import NavBarItem from "./NavBarItem";

function NavBar() {
  return (
    <div className="flex dark:bg-gray-600 bg-amber-100 p-4 text-lg justify-center gap-6 ">
      <NavBarItem title="Trending" param="fetchingTrending " />
      <NavBarItem title="Top Rated" param="fetchingTopRated" />
    </div>
  );
}

export default NavBar;
