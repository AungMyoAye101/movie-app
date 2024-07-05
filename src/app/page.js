"use client";
import { useEffect } from "react";

const API_KEY = process.env.API_KEY;
export default function Home({ searchParams }) {
  useEffect(() => {
    const genre = searchParams.genre || "fetchTrending";
    const res = fetch(
      `https://www.themoviedb.org/3${
        genre === "fetchTopRated" ? "/movie/top_rated" : "/trending/all/week"
      }?api_key=${API_KEY}&language=en-US&pg=1`
    );
    console.log(res.json());
  }, []);

  // if (!res.ok) {
  //   console.log("erroor");
  // }
  // const result = data.results;
  // console.log(result);
  return <div>dd</div>;
}
