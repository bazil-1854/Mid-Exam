import React, { useContext, useState } from 'react';
import { IoMdSearch } from 'react-icons/io';
import { IoMenu, IoClose, IoSearchOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { FavuoriteThemeContext } from '../ContextProvider';
import { CiLight } from 'react-icons/ci';
import { MdOutlineDarkMode } from 'react-icons/md';

const Navbar = () => {

    const { theme, toggleTheme } = useContext(FavuoriteThemeContext);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');


    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className='fixed w-screen z-50 '>

            <div className="w-full justify-between z-50 md:flex hidden items-center h-[70px] fixed bg-black">
                <div className='ml-[8px]'>
                    <Link to="/" className="ml-[18px] font-medium text-white">Home</Link>
                    <Link to="/favourites" className="ml-[18px] font-medium text-white">Favourites</Link>
                </div>

                <Link to="/" className="h-14 flex items-center justify-center">
                    <p className="text-gray-200 text-[23px] font-bold text-center w-full tracking-tight scale-x-[0.9] scale-y-[1.2]">
                        Movie App
                    </p>
                </Link>
                <div className='flex'>
                    <button className='text-white' onClick={toggleTheme}> {theme === 'light' ? <CiLight size={35} /> : <MdOutlineDarkMode t size={35} />} </button>
                    <Link to="/search-movies" className="w-[230px] mr-[15px] px-[15px] py-[8px] rounded-xl text-[#969696] flex items-center bg-[#5454547c]">
                        <IoMdSearch size={23} className='mt-[3px]' />
                        <span className='ml-[6px] text-[#999999] '>Search moview ....</span>
                    </Link>
                </div>

            </div>

            {/* Hamburger menu for mobile screens */}
            <div className="relative bg-black md:hidden">
                <div className="flex items-center justify-between px-4 py-3 relative">
                    <div className="flex items-center z-60">
                        <div className="h-16 flex items-center justify-center">
                            <Link to="/" className="text-gray-200 text-[23px] font-bold text-center w-full tracking-tight scale-x-[0.9] scale-y-110">
                                Movie APP
                            </Link>
                        </div>
                    </div>

                    <div className="md:hidden">
                        <div className="cursor-pointer text-gray-300" onClick={handleMenuToggle}>
                            <IoMenu size={35} />
                        </div>
                    </div>

                    {isMenuOpen && (

                        <div className="fixed inset-0 bg-black flex flex-col h-screen py-3 z-40">
                            <div className='flex  px-4 justify-between items-center'>
                                <div className="flex items-center z-60">
                                    <div className="h-16 flex items-center justify-center">
                                        <Link to="/" className="text-gray-200 text-[23px] font-bold text-center w-full tracking-tight scale-x-[0.9] scale-y-110">
                                            MovieApp
                                        </Link>
                                    </div>
                                </div>
                                <div className="cursor-pointer text-gray-300" onClick={handleMenuToggle}>
                                    <IoClose size={35} />
                                </div>
                            </div>

                            <div className='my-[25px]'></div>
                            <div className="flex flex-col mt-10">
                                <Link
                                    to="/"
                                    className="font-medium w-full text-gray-100 mx-auto py-[5px] pl-[15px] text-[18px] border-b-[3px] border-gray-600 mb-[15px] cursor-pointer"
                                    onClick={handleMenuToggle}
                                >
                                    Movies
                                </Link>
                                <Link
                                    to="/favourites"
                                    className="font-medium w-full text-gray-100 mx-auto py-[5px] pl-[15px] text-[18px] border-b-[3px] border-gray-600 mb-[15px] cursor-pointer"
                                    onClick={handleMenuToggle}
                                >
                                    Favourites
                                </Link>

                            </div>

                            <Link to="/search-movies" className="flex mx-auto w-[85%] items-center bg-search-color my-[15px] rounded-3xl border border-gray-500 p-[10px]">
                                <IoSearchOutline size={25} className="text-white mr-2" />
                                <input
                                    type="text"
                                    placeholder="Search"
                                    className="bg-transparent text-[15px] outline-none focus:outline-none focus:border-none"
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                />
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
