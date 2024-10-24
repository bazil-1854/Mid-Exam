import React from 'react'
import { MdOutlineFacebook } from "react-icons/md";
import { FaTwitterSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa"; 
import { IoLogoYoutube } from "react-icons/io";

const Footer = () => { 
  return (
    <footer className=' bg-black w-screen overflow-x-hidden text-white'>
      <div className='grid  grid-cols-1 md:grid-cols-3 xsx:p-[55px] mx-auto   gap-y-[25px]'>
        <div className='flex flex-col p-[28px] justify-center '>
          <div className='font-serif text-center xsx:text-left text-[45px]  '>MovieApp</div>
          <div className='ml-[15px] text-center xsx:text-left text-sm mb-[25px]'>Watch Movies, films and Cartoons</div>
        </div>

        <div className="mx-auto grid p-[7px] m-[7px]  grid-cols-2 gap-4">
          <div>
            <p className='text-lg font-bold'>Popular Movies:</p>
            <div className="flex text-sm flex-col ml-[7px]">
              <p>Batman</p>
              <p>Marvel 1</p>
              <p>Marvel 1</p>
            </div>
          </div>
          <div>
            <p className='text-lg  font-bold'>Popular Catrgories</p>
            <div className="flex text-sm flex-col ml-[7px]">
              <p>Action</p>
              <p>Cartoons</p> 
            </div>
          </div>
        </div>

        <div className='my-auto  xsx:ml-[25px]'>
          <p className='font-bold text-lg ml-[12px] xsx:ml-[0px]'>Get in Touch</p>
          <div className='flex  mt-[8px] text-[35px]'>
            <MdOutlineFacebook className='ml-[15px] hover:bg-white hover:text-black' />
            <FaLinkedin className='ml-[15px] hover:bg-white hover:text-black' />
            <FaTwitterSquare className='ml-[15px] hover:bg-white hover:text-black' />
            <IoLogoYoutube className='ml-[15px] hover:bg-white hover:text-black' />

          </div> 
        </div>

      </div>

      <div className='col-span-3 flex flex-col '>
        <p className='bg-gray-800 rounded-lg w-[95%] h-[4px] my-[15px]'></p>
        <p className='text-center text-lg  text-white  mb-[25px]'>@2024 TechVenture, All Rights Reserved  </p>
      </div>
    </footer>
  )
}

export default Footer
