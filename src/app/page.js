const API_KEY = process.env.API_KEY;
import React from "react";
import Card from "./components/Card";
import { revalidatePath } from "next/cache";
import Result from "./components/Result";

const Home = async ({ searchParams }) => {
  const genre = searchParams.genre || "fetchTrending";

  const res = await fetch(
    `https://api.themoviedb.org/3${
      genre === "fetchTopRated" ? "/movie/top_rated" : "/trending/all/week"
    }?api_key=${API_KEY}`,
    { next: { revalidate: 10000 } }
  );

  const results = await res.json();

  return (
    <div>
      <Result results={results.results} />
    </div>
  );
};
export default Home;
