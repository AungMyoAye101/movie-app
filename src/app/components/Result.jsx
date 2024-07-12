import React from "react";
import Card from "./Card";

const Result = ({ results }) => {
  return (
    <div>
      <div className=" sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 max-w-6xl mx-auto py-4 gap-4">
        {results.map((item) => (
          <Card
            key={item.id}
            id={item.id}
            title={item.original_name ? item.original_name : item.title}
            poster={item.poster_path ? item.poster_path : item.backdrop_path}
            overview={item.overview}
            count={item.vote_count}
            releaseDate={
              item.release_date ? item.release_date : item.first_air_date
            }
          />
        ))}
      </div>
    </div>
  );
};

export default Result;
