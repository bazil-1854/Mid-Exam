import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import movies from '../data';
import { IoIosSearch } from 'react-icons/io';

const Home = () => {
  const navigate = useNavigate();
  const filter = 'all';
  const [filteredMovies, setfilteredMovies] = useState(movies);
  const [filterTrending, setfilterTrending] = useState(movies);


  useEffect(() => {
    let newfilteredMovies, actionMovies;
    newfilteredMovies = movies.filter(movie => movie.type === "Action");
    actionMovies = movies.filter(movie => movie.type === "Cartoons");

    setfilteredMovies(newfilteredMovies);
    setfilterTrending(actionMovies);

    //console.log(`Filtered Movies:`, newfilteredMovies);
  }, [filter]);

  return (
    <div className="pt-[70px]">

      <section className=" h-screen w-full flex flex-col justify-center items-center text-white shadow-lg gradient-background">
        <div className="mt-[-72px] lg:mt-[-85px] flex sm:flex-row flex-col font-extrabold text-[40px] sm:text-[65px] md:text-[75px]" >
          <p className="text-gray-400 "> Discover Gadgets</p>
          <p className="text-white mt-[-18px] sm:mt-[0px] mx-auto sm:ml-[15px]">&</p>
        </div>
        <div className="mt-[-22px] lg:mt-[-15px] flex sm:flex-row flex-col font-extrabold text-[40px] sm:text-[65px] md:text-[75px]">Publish Reviews</div>

        <p className="px-[10px] text-sm md:text-md sm:block hidden text-center font-bold text-gray-200 mt-[5px]">
          Watch Movies, dramas and Films Online Seamlessly
        </p>
        <p className="px-[10px] sm:block hidden text-sm md:text-md text-center font-bold text-gray-200 ">
          TechVenture !! ultimate destination for the latest gadgets and their specifications.
        </p>


        <p className="px-[10px] sm:hidden block text-[15px] mt-[25px] text-center font-bold text-gray-200 ">
          Discover the future of technology with our expert reviews and in-depth analyses.
          TechVenture !! ultimate destination for the latest gadgets and their specifications.
        </p>

        <div onClick={() => { navigate("/search-movies") }} className='w-[95%] md:w-[70%] lg:w-[55%]  mt-[15px] flex justify-center mx-[5px] mb-[25px] p-[4px]'>
          <div onClick={() => { navigate("/search-movies") }} className='w-[90%] sm:w-[85%] flex items-center p-[8px] border-2 border-white rounded-lg bg-white text-gray-800 font-medium'
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 2, ease: "easeInOut" }}
          >
            <IoIosSearch onClick={() => { navigate("/search-movies") }} className='text-gray-900 ml-[10px] mr-[25px]' size={28} />
            <p onClick={() => { navigate("/search-movies") }}>
              Search Gadget By Name !!
            </p>
          </div>
        </div>
      </section>
 
      <div className='border-b-[3px] xl:px-[25px]  border-gray-400 pb-[35px]'>
        <h1>Action Movies</h1>
        <div className="grid xl xl:grid-cols-4 lg:grid-cols-2 grid-cols-1">
        {movies.map(movie => (
          <div key={movie.id}
            className="movie-card"
            onClick={() => navigate(`/movie-detail/${movie.id}`)}
          >
            <img src={movie.cover} alt={movie.name} className='rounded-md' />
            <h2 className='font-[500]'>{movie.name}</h2>
            <p>genre: {movie.genre}</p>
            <p>{movie.type}</p> 
          </div>
        ))}
        </div> 
      </div>


      <div className='border-b-[3px] border-gray-400 pb-[35px]'>
        <h1>Action Movies</h1>
        <div className="grid xl xl:grid-cols-4 lg:grid-cols-2 grid-cols-1">
          {filteredMovies.map(movie => (
            <div key={movie.id}
              className="movie-card"
              onClick={() => navigate(`/movie-detail/${movie.id}`)}
            >
              <img src={movie.cover} alt={movie.name} />
              <h2>{movie.name}</h2>
              <p>genre: {movie.genre}</p>
              <p>{movie.type}</p> 
            </div>
          ))}
        </div> 
      </div>

      <div className='border-b-[3px] border-gray-400 pb-[35px]'>
        <h1>Action Movies</h1>
        <div className="grid xl xl:grid-cols-4 lg:grid-cols-2 grid-cols-1">
         {filterTrending.map(movie => (
          <div
            onClick={() => navigate(`/movie-detail/${movie.id}`)}
            key={movie.id} className="movie-card">
            <img src={movie.cover} alt={movie.name} />
            <h2>{movie.name}</h2>
            <p>genre: {movie.genre}</p>
            <p>{movie.type}</p> 
          </div>
        ))}
        </div> 
      </div>

    </div>
  );
};

export default Home;
