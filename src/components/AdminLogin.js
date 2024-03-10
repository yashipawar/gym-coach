import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TypewriterComponent from "typewriter-effect";
import backgroundImage from '../images/background.jpg';

const AdminLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    // Hardcoded credentials for demonstration
    const correctUsername = 'Admin';
    const correctPassword = 'Admin@123';

    if (username === correctUsername && password === correctPassword) {
      console.log('Login Successful');
      navigate('/Admin');
    } else {
      console.log('Login Failed: Incorrect username or password');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black" 
    // style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="w-full max-w-xs md:max-w-md px-8 py-4 bg-opacity-70 bg-gray-900 rounded-lg neon-cyan text-white">
        <h1 className="text-3xl md:text-4xl font-serif mb-4 font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 text-center">Gym Coach</h1>
        <form onSubmit={handleLogin}>
          <h2 className="text-xl md:text-2xl font-bold text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-600">
            <TypewriterComponent
                options={{
                  strings: [
                    "Admin Login"
                  ],
                  autoStart: true,
                  loop: true,
                }}
            />
          </h2>
          <p className='text-md md:text-lg italic text-center text-white mb-4'>Assign Exercises to user!</p>
          <div className="mb-4">
            <label htmlFor="username" className="block mb-2 font-medium text-sm">Username</label>
            <input
              id="username"
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="block w-full px-4 py-2 rounded-md bg-gray-700 text-white focus:ring-emerald-500 focus:border-emerald-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block mb-2 font-medium text-sm">Password</label>
            <input
              id="password"
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="block w-full px-4 py-2 rounded-md bg-gray-700 text-white focus:ring-emerald-500 focus:border-emerald-500"
            />
          </div>
          <div className="flex items-center mb-4">
            <input
              id="show-password"
              type="checkbox"
              onChange={togglePasswordVisibility}
              className="mr-2 text-emerald-500 focus:ring-emerald-500 focus:ring-offset-0"
            />
            <label htmlFor="show-password" className="font-medium text-sm text-gray-300">Show Password</label>
          </div>
          <button
            type="submit"
            className="w-full text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
