// import React, { useState } from "react";
import { useState } from "react";
import logo from "../assets/logo.png";
import { FaBars, FaXmark } from "react-icons/fa6";

const Navbar = () => {
  const [menubars, setMenuBars] = useState(false);

  const toogleNav = () => {
    setMenuBars(!menubars);
  };

  return (
    <nav className=" top-0 flex justify-between items-center md:px-20 px-6 py-5 ">
      <div>
        <img className="w-15 h-9" src={logo} alt="logo" />
      </div>
      <div className="space-x-10 hidden md:flex lg:flex">
        <a className="text-blue-500 text-xs" href="">
          Intro
        </a>
        <a className="font-sm text-xs text-gray-700" href="">
          Demos
        </a>
        <a className="font-sm text-xs text-gray-700" href="">
          Features
        </a>
        <a className="font-sm text-xs text-gray-700" href="">
          FAQ
        </a>
        <a className="font-sm text-xs text-gray-700" href="">
          Documentation
        </a>
      </div>
      <button className="bg-blue-600 text-white hidden text-xs md:flex px-1 py-2 rounded-md font-semibold lg:flex 3xl:flex" style={{fontSize: '10px'}}>
        Purchase Now
      </button>
      <div className="flex md:hidden lg:hidden items-center">
        <button className="text-lg" onClick={toogleNav}>
          <div className="sm:bg-white sm:text-blue-600 text-blue-600 bg-white sm:flex rounded-sm mt-2 mr-5 py-2 px-2">
          {menubars ? <FaBars /> : <FaBars />}
          </div>
          
        </button>
      </div>
      {menubars && (
        <div className="absolute top-0 left-0 w-72 h-screen bg-white flex flex-col items-start p-5 space-y-4" >
          <div className="flex items-center text-center justify-evenly pb-3 border-b w-full">
            <img className="w-15 h-9" src={logo} alt="logo" />
            <button className="ml-14 bg-white shadow-lg p-3 rounded-3xl items-center justify-center" onClick={toogleNav}>
              <FaXmark />
            </button>
          </div>
          <div className="flex flex-col transition-transform justify-evenly space-y-5 w-full py-5">
          <a className="text-blue-500 border-b-gray-300 border-b w-full" href="">
            Intro
          </a>
          <a className="hover:text-blue-500 font-sm text-gray-500 border-b-gray-300 border-b w-full" href="">
            Demos
          </a>
          <a className="font-sm hover:text-blue-500 text-gray-500 border-b-gray-300 border-b w-full" href="">
            Features
          </a>
          <a className="font-sm hover:text-blue-500 text-gray-500 border-b-gray-300 border-b w-full" href="">
            FAQ
          </a>
          <a className="font-sm hover:text-blue-500 text-gray-500 border-b-gray-300 border-b w-full" href="">
            Documentation
          </a>
          </div>
          
        </div>
      )}
    </nav>
  );
};

export default Navbar;
