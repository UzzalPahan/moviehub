const Banner = () => {
  return (
    <>
      <div className="py-20 w-full px-10 bg-[#028AC2]">
        <div className="text-white">
          <h1 className="text-5xl font-bold">Welcome</h1>
          <p className="text-3xl">
            Millions of movies, TV shows and people to discover. Explore now.
          </p>
        </div>

        <div className="join pt-10 w-full">
          <input
            className="w-full outline-none border input-bordered rounded-full join-item pl-4"
            placeholder="Search for a movie, tv show, person....."
          />
          <button className="btn join-item rounded-full bg-[#19CFB4] text-black">
            Search
          </button>
        </div>
      </div>

      <div className="bg-[#133A4C] px-10 py-8">
        <div className="text-white">
          <h1 className="text-6xl font-bold leading-tight text-[#81C1BA]">Thats a <br />
Wrap 2023</h1>
          <p className="pt-3">
          The best (and worst) of the year from TMDB.
          </p>
          <button className="border-2 border-white mt-6 py-2 px-4 font-bold rounded-full">check it out</button>
        </div>
      </div>
    </>
  );
};

export default Banner;
