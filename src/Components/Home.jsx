import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import movies from '../data';

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

      <div className="bg-red-400 grid xl xl:grid-cols-4 ">
        {filteredMovies.map(movie => (
          <div key={movie.id}
           className="movie-card"
          onClick={() => navigate(`/movie-detail/${movie.id}`)}
          >
            <img src={movie.cover} alt="" />
            <h2>{movie.name}</h2>
            <p>genre: {movie.genre}</p>
            <p>{movie.type}</p>
            <p>Status: {movie.type ? 'Active' : 'Inactive'}</p>
          </div>
        ))}
      </div>

      <div className="bg-yellow-400">
        {filterTrending.map(movie => (
          <div 
          onClick={() => navigate(`/movie-detail/${movie.id}`)}
          key={movie.id} className="movie-card">
            <img src={movie.cover} alt="" />
            <h2>{movie.name}</h2>
            <p>genre: {movie.genre}</p>
            <p>{movie.type}</p>
            <p>Status: {movie.type ? 'Active' : 'Inactive'}</p>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Home;
 