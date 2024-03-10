import React from 'react';
import TypewriterComponent from "typewriter-effect";
import { useNavigate } from 'react-router-dom';
import backgroundImage from '../images/background.jpg'; // Ensure this points to your image in the src directory

const Home = () => {
  const navigate = useNavigate();

  const handleAdminLoginClick = () => {
    navigate('/AdminLogin');
  };

  const handleUserLoginClick = () => {
    navigate('/UserLogin');
  };

  return (
    <div
      className="hero relative min-h-screen flex flex-col items-center text-white bg-black">
      <button
        onClick={handleAdminLoginClick}
        className="mt-4 absolute top-0 right-4 hidden md:inline-flex neon-cyan font-medium rounded-lg text-sm md:text-base lg:text-lg px-5 py-2.5 text-center mb-2 sm:mb-0"
        >
        Admin Login
      </button>
      {/* Adjustments for medium devices start here */}
      <div className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 text-center md:px-10">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl space-y-5 font-serif mb-8 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          Welcome to Gym Coach
        </h1>
        <div className="text-xl mt-8 md:text-2xl lg:text-3xl font-serif mb-8 font-semibold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-purple-600">
          <TypewriterComponent
                options={{
                  strings: [
                    "Watch.",
                    "Learn...",
                    "Observe",
                    " & Improve!"
                  ],
                  autoStart: true,
                  loop: true,
                }}
          />
        </div>
        <p className="mb-6 italic animate-bounce">See what you have to do today!</p>
        <div className="w-full max-w-sm md:max-w-md lg:max-w-xl xl:max-w-2xl py-4 rounded-lg outline-teal-400 outline-double neon-green">
          <h2 className="text-xl md:text-2xl font-bold text-center mb-6">Log in as</h2>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-4">
            <button
              onClick={handleUserLoginClick}
              className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm md:text-base lg:text-lg px-5 py-2.5 text-center"
            >
              User
            </button>
          </div>
        </div>
        <p className='mt-8 text-teal-700 underline underline-offset-4 sm:font-thin'>We promote self learning and improvement! </p>
      </div>
    </div>
  );
};

export default Home;
