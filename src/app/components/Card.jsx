import React from "react";

const Card = ({ title, poster, overview, releaseDate, count }) => {
  return (
    <div className=" rounded p-2">
      <img
        className="block w-full mb-2"
        src={`https://media.themoviedb.org/t/p${poster}`}
        alt="poster"
      />
      <div className="flex flex-col gap-2">
        <h1>{title}</h1>
        <div className="max-h-16 overflow-hidden text-sm">{overview}</div>
        <div className="flex justify-between">
          <span>{releaseDate}</span>
          <span>{count}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
