import React from "react";
import NavBarItem from "./NavBarItem";
import SearchBox from "./SearchBox";

function NavBar() {
  return (
    <div className="flex justify-between items-center max-w-full">
      <div className="flex ">
        <NavBarItem title="Trending" param="fetchTrending " />
        <NavBarItem title="Top Rated" param="fetchTopRated" />
      </div>
      <SearchBox />
    </div>
  );
}

export default NavBar;
