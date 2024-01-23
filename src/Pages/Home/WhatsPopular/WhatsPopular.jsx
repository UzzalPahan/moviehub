import axios from "axios";
import { useEffect, useState } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import { Link } from "react-router-dom";

const WhatsPopular = () => {
  const [trendingMovie, setTrendingMovie] = useState([]);
  const url =
    `https://api.themoviedb.org/3/tv/popular?api_key=${import.meta.env.VITE_API_KEY}`;
  // /f1AQhx6ZfGhPZFTVKgxG91PhEYc.jpg
  // https://api.themoviedb.org/3/trending/movie/day?language=en-US
  // console.log(import.meta.env.VITE_API_KEY, 'API KEYSSSSSSSSSS');

  useEffect(() => {
    axios.get(url).then((res) => {
      console.log("bids data", res.data);
      setTrendingMovie(res.data.results);
    });
  }, [url]);
  console.log(trendingMovie, "trending movie");
  return (
    <div className="my-10 px-10">
      <div className="flex items-center">
        <h1 className="text-2xl font-bold">Whats Popular</h1>
      </div>
      <div className="flex gap-4 px-4 pt-4 w-full overflow-x-auto">
        {trendingMovie.map((popularMovie) => (
          <div className=" min-w-40 mb-10" key={popularMovie.id}>
            <Link to={`/singleMovie/${popularMovie.id}`}>
            <img
              className="w-full rounded-lg"
              src={`https://media.themoviedb.org/t/p/w220_and_h330_face${popularMovie.poster_path || popularMovie.backdrop_path}`}
              alt="poster "
            />
            </Link>
            <div className="w-12 mt-[-22px] ml-3">
              <CircularProgressbar
                value={Math.round(popularMovie.vote_average * 10)}
                text={`${Math.round(popularMovie.vote_average * 10)}%`}
                background={true}
                styles={{
                  // Rotation of path and trail, in number of turns (0-1)
                  rotation: 0.25,

                  // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                  // Text size
                  text: {
                    // Text color
                    fill: "#fff",
                    // Text size
                    fontSize: "1.8rem",
                  },
                  background: {
                    fill: "#081C22",
                  },

                }}
              />
              ;
            </div>
            <Link to={`/singleMovie/${popularMovie.id}`}>
              <h1 className=" mt-[-20px] font-bold">{popularMovie.original_title || popularMovie.name}</h1>
            </Link>
            <p className="text-[rgba(0,0,0,.6)]">
                {popularMovie.release_date || popularMovie.first_air_date}
              </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhatsPopular;
