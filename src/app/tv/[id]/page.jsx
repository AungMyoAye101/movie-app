import React from "react";
import Image from "next/image";
const SeriesPage = async ({ params }) => {
  const movieId = params.id;
  const res = await fetch(
    `https://api.themoviedb.org/3/tv/${movieId}
    ?api_key=${process.env.API_key}`
  );
  const movie = await res.json();
  console.log(movie);
  return (
    <div className="w-full flex flex-col gap-2 md:flex-row  justify-between items-center px-2">
      <Image
        src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
        width={500}
        height={300}
        alt="posters"
        className="rounded-lg"
        style={{ maxWidth: "100%" }}
      />
      <div className="card-body">
        <h2 className="card-title">{movie.title || movie.original_name}</h2>
        <p>{movie.overview}</p>
        <p>
          <span>Released date :</span>
          {movie.release_date || movie.first_air_date}
        </p>
        <p>
          <span>Rating :</span>
          {movie.vote_count}
        </p>
        <p>Authour : {movie.created_by[0].name}</p>      <Image
        src={`https://image.tmdb.org/t/p/original/${movie.created_by[0].profile_path}`}
        width={500}
        height={300}
        alt="posters"
        className="rounded-lg"
        style={{ maxWidth: "100%" }}
      />

      </div>
    </div>
  );
};

export default SeriesPage;
