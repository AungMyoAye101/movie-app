import Result from "@/app/components/Result";
import React from "react";

const SearchPage = async ({ params }) => {
  const searchText = params.searchText;
  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&query=${searchText}&language=en-US&page=1&include_adult=false`
  );
  const data = await res.json();
  const results = data.results;
  console.log(results);
  return;
  <div>
    {results &&
      results.length === <h1 className="text-center pt-6">No results found</h1>}
    {results && <Result results={results} />}
  </div>;
};

export default SearchPage;