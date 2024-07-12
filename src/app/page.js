const API_KEY = process.env.API_KEY;
import React from "react";
import Card from "./components/Card";
import { revalidatePath } from "next/cache";

const Home = async ({ searchParams }) => {
  const genre = searchParams.genre || "fetchTrending";

  const res = await fetch(
    `https://api.themoviedb.org/3${
      genre === "fetchTopRated" ? "/movie/top_rated" : "/trending/all/week"
    }?api_key=${API_KEY}`,
    { next: { revalidate: 10000 } }
  );

  const result = await res.json();
  return (
    <div>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {result.results.map((item) => (
          <Card
            key={item.id}
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
export default Home;
