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
        <div className="grid xl xl:grid-cols-4 w-full lg:grid-cols-3 md-grid-cols-2 grid-cols-1">
          {movie.map(movieDetails => (
            <div key={movieDetails.id} className="mt-[10px]">
              <img src={movieDetails.cover} alt="" />

              <h2 className='font-[500]'>{movieDetails.name}</h2>
              <p className='text-blue-700 text-[12px] font-[500] underline'>{movieDetails.genre}</p>
              <p className={`${movie.type === "Action" ? 'bg-red-600' : 'bg-green-700'} text-white text-center text-[10px] mb-[15px] py-[2px] mt-[5px] rounded-lg w-[80px]`}>{movieDetails.type}</p>

              <div className="flex space-x-2">
                <button
                  onClick={() => removeFromCart(movieDetails.id)}
                  className="bg-red-500 text-white px-3 py-1 text-[15px] rounded-[18px] hover:bg-red-600 transition"
                >
                  Remove from Favourites
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Favourite
