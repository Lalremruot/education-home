// import React from 'react';
import Images from "../assets/tm-view.png";
import { FaArrowRight } from "react-icons/fa6";

const HeroSection = () => {
  return (
    <div className="w-screen md:-mt-44 sm:w-full sm:flex sm:justify-start py-10 px-6 flex-col md:px-20 md:flex-row justify-between items-center">
      <div className="w-screen sm:text-left text-left md:w-2/6 lg:w-2/6 md:text-left 2xl:2/6 flex flex-col justify-center">
        <h1 className="text-2xl md:-mt-20 text-indigo-950 w-82 md:text-3xl md:w-96 font-bold">
          EduVibe Online Learning <br/>React Education Template
        </h1>
        <h2 className="text-gray-500 w-68 py-6 md:py-8 md:w-96 text-md md:text-md">
          Ultimate Feature Rich Education React <br /> Template for Online 
          Schooling & Distance<br/> Learning.
        </h2>
        <div className="flex flex-col sm:flex-col md:flex-row lg:flex-row space-y-4 sm:space-y-4 md:space-y-0 md:space-x-4 lg:space-x-4">
          <button className="bg-blue-600 text-white py-3 w-36 px-4 sm:px-2 sm:py-3 md:py-4 md:px-4 whitespace-nowrap text-sm rounded-md font-semibold flex items-center">
            Get EduVibe <FaArrowRight className="ml-3" />
          </button>
          <button className="bg-white text-blue-600 py-3 px-3 w-36 sm:px-2 sm:py-3 md:px-4 md:py-4 whitespace-nowrap text-sm rounded-md font-semibold flex items-center">
            Explore Demo <FaArrowRight className="ml-2" />
          </button>
        </div>
      </div>
      <div className="w-full sm:items-center sm:justify-center items-center justify-center md:w-full flex ">
        <img
          className="w-full mb-52 md:pt-28 items-center justify-center mr-20 md:mr-14 sm:items-center sm:justify-center sm:mr-24 sm:flex md:w-full md:ml-48 "
          src={Images}
          alt="Educational template preview"
        />
      </div>
    </div>
  );
};

export default HeroSection;
