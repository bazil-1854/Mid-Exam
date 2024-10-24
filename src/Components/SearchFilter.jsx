import React, { useEffect, useState } from 'react'
import movies from '../data';
import { IoIosSearch } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';

const SearchFilter = () => {
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState('');
    const [isFocused, setIsFocused] = useState(false);
    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {
        setFilteredProducts(
            movies.filter(movie =>
                movie.name.toLowerCase().includes(searchTerm.toLowerCase())
            )
        );
    }, [searchTerm]);

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleIconClick = () => {
        setIsFocused(!isFocused);
    };
    return (
        <div className='pt-[70px] min-h-screen w-screen overflow-x-hidden'>

            <div className='w-[100%]  mt-[25px] flex justify-center mx-[5px] mb-[25px] p-[4px]'>
                <input
                    id="search"
                    type="text"
                    value={searchTerm}
                    onChange={handleSearchChange}
                    placeholder="Search by movie name"
                    className='w-[85%] p-[8px] border-2 border-gray-600 rounded-lg placeholder:text-gray-600 font-medium'

                />
                <button className='text-gray-600 ml-[10px]' onClick={handleIconClick}><IoIosSearch size={35} /></button>
            </div>

            {isFocused &&

                <div className="mt-4 border-t pt-4">
                    <h2 className="text-xl font-semibold mb-2">Search Results:</h2>
                    <div className="mx-auto my-[45px] grid grid-cols-2 overflow-hidden lg:grid-cols-3 xl:grid-cols-4 ">
                        {filteredProducts.length > 0 ? (
                            filteredProducts.map((movie) => {
                                return (
                                    <div
                                        key={movie.id}
                                        className="block p-[10px] overflow-x-hidden sm:p-[5px] cursor-pointer"
                                        onClick={() => navigate(`/movie-detail/${movie.id}`)}
                                    >
                                        <img
                                            src={movie.cover}
                                            alt={movie.name}
                                            className="object-cover mx-auto h-[200px] w-[180px] hover:scale-105 transition duration-700  md:h-[400px] md:w-[340px] lg:w-[300px]  lg:h-[335px] sm:h-[320px] sm:w-[280px] mb-4"
                                        /> 

                                        <h2 className='font-[500]'>{movie.name}</h2>
                                        <p className='text-blue-700 text-[12px] font-[500] underline'>{movie.genre}</p>
                                        <p className='text-blue-700 text-[12px] font-[500] underline'>{movie.type}</p>
                                        <p className={`${movie.type === "Action" ? 'bg-red-600' : 'bg-green-700'} text-white text-center text-[10px] mb-[15px] py-[2px] mt-[5px] rounded-lg w-[80px]`}>{movie.type}</p>

                                    </div>
                                );
                            })
                        ) : (
                            <p>No movies found.</p>
                        )}
                    </div>
                </div>
            }
        </div >
    );
};
export default SearchFilter
