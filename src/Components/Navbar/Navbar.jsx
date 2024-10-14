import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineUser } from 'react-icons/ai';
import { AiOutlineSearch } from 'react-icons/ai';

const Navbar = ({ isLoggedIn, username, handleLogout }) => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    // Handle search logic here
    console.log("Searching for:", searchTerm);
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
      <form onSubmit={handleSearch} className='flex items-center space-x-2'>
        <input 
          type="text" 
          placeholder="Search..." 
          value={searchTerm} 
          onChange={(e) => setSearchTerm(e.target.value)} 
          className='p-2 rounded-lg bg-gray-700 text-white focus:outline-none'
        />
        <button type="submit" className='p-2 rounded-lg bg-cyan-600 hover:bg-cyan-500 transition duration-200'>
          <AiOutlineSearch size={20} />
        </button>
      </form>
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
                  <Link to="/profile">My Profile</Link>
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
