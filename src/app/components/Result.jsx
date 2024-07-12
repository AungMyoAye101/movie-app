import React from "react";
import Card from "./Card";

const Result = ({ results }) => {
  return (
    <div>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
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