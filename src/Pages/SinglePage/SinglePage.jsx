import { CircularProgressbar } from "react-circular-progressbar";
import { useLoaderData } from "react-router-dom";
import { FaBookmark, FaHeart, FaList, FaPlay, FaStar } from "react-icons/fa";

const SinglePage = () => {
  const singleMovie = useLoaderData();

  return (
    <div className="grid grid-cols-4 py-8 px-10 items-center">
      <div>
        <img
          src={`https://media.themoviedb.org/t/p/w220_and_h330_face${singleMovie.backdrop_path}`}
          alt=""
          className="rounded-lg h-96 w-64 backdrop-blur-md bg-white"
        />
      </div>
      <div className="col-span-3">
        <h1 className="text-3xl text-black font-bold mt-[-20px]">
          {singleMovie.title || singleMovie.name}
        </h1>
        {/* genere  */}
        <div className="genere flex">
          {singleMovie.genres?.map((category) => (
            <p key={category.id} className="text-black pr-1">
              {category?.name},
            </p>
          ))}
        </div>
        <div className="flex items-center py-3 gap-6">
          <div className="w-12 hover:scale-125 transition ease-in-out delay-150 hover:cursor-pointer">
            <CircularProgressbar
              value={Math.round(singleMovie.vote_average * 10)}
              text={`${Math.round(singleMovie.vote_average * 10)}%`}
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
          <span className="ml-[-15px] font-bold">
            User <br /> Score
          </span>
          <div className="list bg-[#032541] p-4 rounded-full text-white hover:cursor-pointer">
            <FaList />
          </div>
          <div className="list bg-[#032541] p-4 rounded-full text-white hover:cursor-pointer">
            <FaHeart />
          </div>
          <div className="list bg-[#032541] p-4 rounded-full text-white hover:cursor-pointer">
            <FaBookmark />
          </div>
          <div className="list bg-[#032541] p-4 rounded-full text-white hover:cursor-pointer">
            <FaStar />
          </div>
          <div className="list flex items-center gap-2 hover:cursor-pointer">
            <FaPlay />
            <p>Play Trailer</p>
          </div>
        </div>
        {/* overview */}
        <div className="overview">
          <p>{singleMovie.tagline}</p>
          <h2 className="text-2xl font-bold py-2">Overview</h2>
          <p>{singleMovie.overview}</p>
        </div>
      </div>
    </div>
  );
};

export default SinglePage;
