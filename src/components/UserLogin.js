import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TypewriterComponent from "typewriter-effect";
import backgroundImage from '../images/background.jpg'; // Ensure the path is correct
import usersData from '../users.json'; // Ensure the path is correct

const UserLogin = () => {
  const [userId, setUserId] = useState('');
  const [loginStatus, setLoginStatus] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const userExists = usersData.some((user) => user.id === userId);
    if (userExists) {
      setLoginStatus('Login successful!');
      navigate(`/user/${userId}`);
    } else {
      setLoginStatus('Login failed: ID not found.');
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-cover bg-black" 
    // style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className=" mr-6 ml-6 p-4">
        <h1 className="text-3xl font-serif mb-8 font-bold text-transparent text-center bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Welcome to Gym <br className=' text-center' /> Coach</h1>

        <form className="w-full max-w-xs md:max-w-md px-8 py-6 bg-opacity-90 bg-gray-900 rounded-lg neon-teal text-white" onSubmit={handleSubmit}>
          <h2 className="text-xl md:text-2xl font-bold text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-600">
            <TypewriterComponent
                  options={{
                    strings: [
                      "User Login"
                    ],
                    autoStart: true,
                    loop: true,
                  }}
              />
          </h2>
          <p className="text-lg italic text-center text-white mb-4">See your assigned exercises for today!</p>
          <label htmlFor="userId" className="block mb-2 font-medium text-sm">User ID</label>
          <input
            type="text"
            id="userId"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            className="block w-full px-4 py-2 mb-4 rounded-md bg-gray-700 text-white focus:ring-emerald-500 focus:border-emerald-500"
          />

          <button type="submit" className="w-full text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2">
            Submit
          </button>
        </form>

        {loginStatus && (
          <p className="mt-4 text-white">{loginStatus}</p>
        )}
      </div>
    </div>
  );
};

export default UserLogin;
