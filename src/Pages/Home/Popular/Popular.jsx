import axios from "axios";
import { useEffect, useState } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import { Link } from "react-router-dom";

const Popular = () => {
  const [popularMovie, setPopularMovie] = useState([]);
  const url =
    "https://api.themoviedb.org/3/movie/popular?api_key=65bcfb33d2eb703f7bb3511a48700d6f";
  // /f1AQhx6ZfGhPZFTVKgxG91PhEYc.jpg

  useEffect(() => {
    axios.get(url).then((res) => {
      console.log("bids data", res.data);
      setPopularMovie(res.data.results);
    });
  }, [url]);
  console.log(popularMovie);
  // const img = "https://media.themoviedb.org/t/p/w220_and_h330_face";
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 py-8">
      <div className="popular_movies px-10">
      <h2 className="text-center text-2xl font-bold">
        Popular Movies
      </h2>

      <div className="collapse">
        <input type="checkbox" className="peer" />
        <div className="collapse-title border font-bold">
          Sort
        </div>
        <div className="collapse-content">
          <p>Sort Result By</p>
          <select name="" className="text-black mt-4 w-full bg-[#C7CDD5] outline-none py-2 px-4 rounded-lg">
            <option className="bg-white text-black" value="hello">Title (A-Z)</option>
            <option className="bg-white text-black" value="hello">Popularity Ascending</option>
            <option className="bg-white text-black" value="hello">Rating Descending</option>
          </select>
        </div>
      </div>
        <button className="bg-[#01B4E4] text-white w-full rounded-full mt-20 text-bold py-3">Search</button>
      </div>

      <div className="col-span-3">
        <div className="grid grid-cols-1 px-4 md:grid-cols-5 gap-4">
          {popularMovie.map((popularMovie) => (
            <div key={popularMovie.id}>
            <Link to={`/singleMovie/${popularMovie.id}`}>

              <img
                className="w-full rounded-lg"
                src={`https://media.themoviedb.org/t/p/w220_and_h330_face${popularMovie.poster_path}`}
                alt="poster "
              />
              </Link>
              <div className="w-12 mt-[-22px] ml-3">
                <CircularProgressbar
                  value={Math.round(popularMovie.vote_average * 10)}
                  text={`${Math.round(popularMovie.vote_average * 10)}%`}
                  background={true}
                  pathColor={"red"}
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
              </div>
              <Link to={`/singleMovie/${popularMovie.id}`}>
                <h1 className="text-black font-bold">
                  {popularMovie.original_title}
                </h1>
              </Link>
              <p className="text-[rgba(0,0,0,.6)]">
                {popularMovie.release_date || popularMovie.first_air_date}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Popular;
