import React, { useContext } from 'react'
import { FavuoriteThemeContext } from '../ContextProvider';

const Favourite = () => {
  const { movie, removeFromCart } = useContext(FavuoriteThemeContext);

  return (
    <div className="p-4">
      <h2 className="text-2xl mb-4">Cart</h2>
      {movie.length === 0 ? (
        <p>No Favuorite movies.</p>
      ) : (
        <ul className="space-y-2">
          {movie.map(movieDetails => (
            <li key={movieDetails.id} className="flex justify-between items-center p-2 border rounded-md"> 
              <img src={movieDetails.cover} alt="" />
                <h2>{movieDetails.name}</h2>
                <p>genre: {movieDetails.genre}</p>
                <p>{movieDetails.type}</p>
              <div className="flex space-x-2">
                <button 
                  onClick={() => removeFromCart(movieDetails.id)} 
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
                >
                  Remove from Favourites
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default Favourite
