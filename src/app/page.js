const API_KEY = process.env.API_KEY;
import React from "react";

const Home = async () => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`
  );
  const result = await res.json();

  return (
    <div>
      <ul>
        {result.results.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};
export default Home;
