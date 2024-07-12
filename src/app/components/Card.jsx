import Image from "next/image";
import Link from "next/link";
import React from "react";

const Card = ({ id, title, poster, overview, releaseDate, count }) => {
  return (
    <div className=" rounded max-w-72 mx-auto mt-4 shadow">
      <Link href={`/movie/${id}`}>
        <Image
          src={`https://image.tmdb.org/t/p/original/${poster}`}
          width={400}
          height={300}
          alt="posters"
          className="rounded"
        />
      </Link>
      <div className="flex flex-col gap-2 p-2">
        <h1 className="truncate text-xl bold">{title}</h1>
        <div className="line-clamp-3 overflow-hidden text-sm">{overview}</div>
        <div className="flex justify-between">
          <span>{releaseDate}</span>
          <span>{count}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
