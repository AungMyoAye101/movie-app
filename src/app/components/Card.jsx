import Image from "next/image";
import Link from "next/link";
import React from "react";

const Card = ({ id, title, poster, overview, releaseDate, count }) => {
  return (
    <div className=" card  ">
      <Link href={`/movie/${id}`}>
        <Image
          src={`https://image.tmdb.org/t/p/original/${poster}`}
          width={500}
          height={300}
          alt="posters"
          className="rounded-t-lg"
          style={{ maxWidth: "100%", aspectRatio: "1/1", objectFit: "fill" }}
        />
      </Link>
      <div className="card-body px-2">
        <h2 className="card-title truncate">{title}</h2>
        <div className="line-clamp-2 overflow-hidden text-sm">{overview}</div>
        <div className="flex justify-between">
          <span>{releaseDate}</span>
          <span>{count}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
