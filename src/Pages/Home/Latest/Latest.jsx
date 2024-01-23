

import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Latest = () => {
  const [trendingMovie, setTrendingMovie] = useState([]);
  const url =
    "https://api.themoviedb.org/3/trailer/movie?api_key=65bcfb33d2eb703f7bb3511a48700d6f";
  // /f1AQhx6ZfGhPZFTVKgxG91PhEYc.jpg
  // 65bcfb33d2eb703f7bb3511a48700d6f
  // https://api.themoviedb.org/3/trending/movie/day?language=en-US
  // https://api.themoviedb.org/3/movie/latest
  // https://api.themoviedb.org/3/discover/movie?api_key=65bcfb33d2eb703f7bb3511a48700d6f&sort_by=release_date.desc


  useEffect(() => {
    axios.get(url).then((res) => {
      console.log("bids data", res.data);
      setTrendingMovie(res.data.results);
    });
  }, [url]);
  console.log(trendingMovie, "latest movie");
  return (
    <div className="my-10 px-10">
      <div className="flex items-center">
        <h1 className="text-2xl font-bold"> Latest Trailers</h1>
      </div>
      <div className="flex gap-4 px-4 pt-4 w-full overflow-x-auto">
        {trendingMovie.map((popularMovie) => (
          <div className="border border-red-500 min-w-40 mb-10" key={popularMovie.id}>
            <img
              className="w-full"
              src={`https://media.themoviedb.org/t/p/w220_and_h330_face${popularMovie.poster_path}`}
              alt="poster "
            />
            <Link to={`/singleMovie/${popularMovie.id}`}>
              <h1>{popularMovie.original_title}</h1>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Latest;
