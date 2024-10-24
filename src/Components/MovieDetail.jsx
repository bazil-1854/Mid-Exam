import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import movies from '../data';
import { FavuoriteThemeContext } from '../ContextProvider';

const MovieDetail = () => {
    const { id } = useParams();
    const [movieDetails, setMovieDetails] = useState(movies);


    const { addToCart } = useContext(FavuoriteThemeContext);
    useEffect(() => {
        let movie; 
        //movie = movieDetails.filter(moviedet => moviedet.id === id);
        movie = movies[id - 1];
        //console.log(movieDetails);
        setMovieDetails(movie);
        //console.log(id);
       //console.log(movie);
    }, []);

    return (
        <div className='pt-[70px]'>
            <div className="movie-card">
                <img src={movieDetails.cover} alt="" />
                <h2>{movieDetails.name}</h2>
                <p>genre: {movieDetails.genre}</p>
                <p>{movieDetails.type}</p>
                <p>Status: {movieDetails.type ? 'Active' : 'Inactive'}</p>
                <button
                    onClick={() => addToCart(movieDetails)}
                    className="bg-yellow-700 text-white px-3 py-1 rounded hover:bg-blue-600 transition"
                >
                    Add to Favourites
                </button>
            </div>
        </div>
    )
}

export default MovieDetail
