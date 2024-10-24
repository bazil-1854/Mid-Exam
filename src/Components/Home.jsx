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

      <section className="py-[200px] md:py-[110px] h-screen w-full flex flex-col justify-center items-center text-white shadow-lg gradient-background">
        <div className="flex sm:flex-row flex-col font-extrabold text-[40px] sm:text-[65px] md:text-[75px]" >
          <p className="text-gray-400 "> Watch Movies</p>
          <p className="text-white mt-[-18px] sm:mt-[0px] mx-auto sm:ml-[15px]">&</p>
        </div>
        <div className="mt-[-22px] lg:mt-[-15px] flex sm:flex-row flex-col font-extrabold text-[40px] sm:text-[65px] md:text-[75px]">Dramas</div>

        <p className="px-[10px] text-sm md:text-md sm:block hidden text-center font-bold text-gray-200 mt-[5px]">
          Watch Movies, dramas and Films Online Seamlessly
        </p>

        <div onClick={() => { navigate("/search-movies") }} className='w-[95%] mt-[18px] md:w-[70%] lg:w-[55%] flex justify-center mx-[5px] mb-[25px] p-[4px]'>
          <div onClick={() => { navigate("/search-movies") }} className='w-[90%] sm:w-[85%] flex items-center p-[8px] border-2 border-white rounded-lg bg-white text-gray-800 font-medium'>
            <IoIosSearch onClick={() => { navigate("/search-movies") }} className='text-gray-900 ml-[10px] mr-[25px]' size={28} />
            <p onClick={() => { navigate("/search-movies") }}>
              Search Gadget By Name !!
            </p>
          </div>
        </div>
      </section>

      <div className='border-b-[3px] xl:px-[25px] flex flex-col justify-center items-center flex-wrap border-gray-400 pb-[35px]'>
        <h1 className='pl-[4px] font-[800] text-[28px]'>Movie List</h1>
        <div className="grid xl xl:grid-cols-4 w-full lg:grid-cols-3 md-grid-cols-2 grid-cols-1">
          {movies.map(movie => (
            <div key={movie.id}
              className="mt-[10px]"
              onClick={() => navigate(`/movie-detail/${movie.id}`)}
            >
              <img src={movie.cover} alt={movie.name} className='rounded-md' />
              <h2 className='font-[500]'>{movie.name}</h2>
              <p>genre: {movie.genre}</p>
              <p className={`${movie.type === "Action" ? 'bg-red-600' : 'bg-green-700'} text-white text-center py-[2px] mt-[5px] rounded-lg w-[80px]`}>{movie.type}</p>
            </div>
          ))}
        </div>
      </div>




      <div className='border-b-[3px] border-gray-400 flex flex-col justify-center items-center flex-wrap pb-[35px]'>
        <h1 className='pl-[4px] font-[800] text-[28px]'>Action List</h1>
        <div className="grid xl xl:grid-cols-4 w-full lg:grid-cols-3 md-grid-cols-2 grid-cols-1">
          {filteredMovies.map(movie => (
            <div key={movie.id}
              className="mt-[10px]"
              onClick={() => navigate(`/movie-detail/${movie.id}`)}
            >
              <img src={movie.cover} alt={movie.name} className='rounded-md' />
              <h2 className='font-[500]'>{movie.name}</h2>
              <p>genre: {movie.genre}</p>
              <p className={`${movie.type === "Action" ? 'bg-red-600' : 'bg-green-700'} text-white text-center py-[2px] mt-[5px] rounded-lg w-[80px]`}>{movie.type}</p>
            </div>
          ))}
        </div>
      </div>

      <div className='border-b-[3px] border-gray-400 flex flex-col justify-center items-center flex-wrap pb-[35px]'>
        <h1 className='pl-[4px] font-[800] text-[28px]'>Cartoon List</h1>
        <div className="grid xl xl:grid-cols-4 w-full lg:grid-cols-3 md-grid-cols-2 grid-cols-1">
          {filterTrending.map(movie => (
            <div key={movie.id}
              className="mt-[10px]"
              onClick={() => navigate(`/movie-detail/${movie.id}`)}
            >
              <img src={movie.cover} alt={movie.name} className='rounded-md' />
              <h2 className='font-[500]'>{movie.name}</h2>
              <p>genre: {movie.genre}</p>
              <p className={`${movie.type === "Action" ? 'bg-red-600' : 'bg-green-700'} text-white text-center py-[2px] mt-[5px] rounded-lg w-[80px]`}>{movie.type}</p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default Home;
