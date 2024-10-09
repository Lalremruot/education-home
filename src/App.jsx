// import React from 'react'

import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="bg-gradient-to-r from-pink-200 via-gray-300 to-pink-200">
      <Navbar />
      {/* <div className="w-full h-screen bg-gradient-to-r from-pink-200 via-gray-300 to-pink-200 px-20 flex"> */}
        <HeroSection />
      {/* </div> */}
    </div>
  );
};

export default App;
