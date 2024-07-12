import Image from "next/image";
import Link from "next/link";
import React from "react";

const Card = ({ id, title, poster, overview, releaseDate, count }) => {
  return (
    <div className=" card  bg-slate-100 dark:bg-gray-800 shadow-xl ">
      <Link href={`/movie/${id}`}>
        <Image
          src={`https://image.tmdb.org/t/p/original/${poster}`}
          width={500}
          height={500}
          layout="fixed"
          alt="posters"
          style={{ maxWidth: "100%", height: "auto", objectFit: "contain" }}
        />
      </Link>
      <div className="card-body">
        <h2 className="card-title truncate">{title}</h2>
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
