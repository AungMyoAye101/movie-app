import React from "react";
import Image from "next/image";
const MoviePage = async ({ params }) => {
  const movieId = params.id;
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}
    ?api_key=${process.env.API_key}`
  );
  const result = await res.json();

  return (
    <div>
      <Image
        src={`https://image.tmdb.org/t/p/original/${result.poster_path}`}
        width={400}
        height={300}
        alt="posters"
        className="rounded"
      />
    </div>
  );
};

export default MoviePage;
