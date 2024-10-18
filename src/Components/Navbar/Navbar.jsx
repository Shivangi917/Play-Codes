import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom'; // Import useLocation for checking the active path
import { AiOutlineUser } from 'react-icons/ai';
import SearchBar from '../SearchBar/SearchBar';

const Navbar = ({ isLoggedIn, username, handleLogout }) => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const location = useLocation(); // Get the current location

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  return (
    <nav className='flex justify-between items-center p-6 text-white bg-gray-800 z-10 relative'>
      <div className='font-bold text-2xl text-cyan-600'>
        <p>Play Codes</p>
      </div>
      <ul className='hidden md:flex space-x-20'>
        <li className='hover:text-cyan-500 transition duration-300'>
          <Link to="/">Home</Link>
        </li>
        <li className='hover:text-cyan-500 transition duration-300'>
          <Link to="/codes">Codes</Link>
        </li>
        <li className='hover:text-cyan-500 transition duration-300'>
          <Link to="/about">About</Link>
        </li>
      </ul>
      <SearchBar />
      <div className='flex items-center space-x-4'>
        {isLoggedIn ? (
          <>
            <span
              className='text-cyan-300 cursor-pointer flex items-center space-x-1' 
              onClick={toggleDropdown}
              aria-haspopup="true" 
              aria-expanded={isDropdownVisible}
            >
              <AiOutlineUser size={20} />
              <span>Hello, {username}</span>
            </span>
            {isDropdownVisible && (
              <ul className='absolute right-4 mt-64 w-32 bg-gray-700 rounded-lg shadow-lg text-white transition-opacity duration-200' onClick={toggleDropdown}>
                <li className='px-4 py-2 hover:bg-gray-600 rounded-t-lg'>
                  <Link to={`/users/${username}`}>My Profile</Link> {/* Dynamic link to user's profile */}
                </li>
                <li className='px-4 py-2 hover:bg-gray-600'>
                  <Link to="/postcode">Post Code</Link>
                </li>
                <li className='px-4 py-2 hover:bg-gray-600'>
                  <Link to="/postproject">Post Project</Link>
                </li>
                <li className='px-4 py-2 hover:bg-gray-600'>
                  <Link to="/settings">Settings</Link>
                </li>
                <li className='px-4 py-2 hover:bg-gray-600 rounded-b-lg'>
                  <button className="w-full text-left" onClick={handleLogout}>Logout</button>
                </li>
              </ul>
            )}
          </>
        ) : (
          <Link className='hover:text-cyan-500 transition duration-300' to="/login">Login</Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
