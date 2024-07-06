const API_KEY = process.env.API_KEY;
import React from "react";
import Card from "./components/Card";

const Home = async () => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`
  );
  const result = await res.json();

  return (
    <div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {result.results.map((item) => (
          <Card
            key={item.id}
            title={item.title}
            poster={item.poster_path}
            overview={item.overview}
            count={item.vote_count}
            releaseDate={item.release_date}
          />
        ))}
      </div>
    </div>
  );
};
export default Home;
