import React,{ useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineUser } from 'react-icons/ai';

const Navbar = ({ isLoggedIn, username, handleLogout }) => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  }

  return (
    <nav className='flex justify-between p-6 text-white bg-gray-800'>
      <div className='font-bold text-2xl text-cyan-600'>
        <p>Play Codes</p>
      </div>
      <ul className='flex space-x-20'>
        <li className='hover:text-cyan-500'>
          <Link to="/">Home</Link>
        </li>
        <li className='hover:text-cyan-500'>
          <Link to="/codes">Codes</Link>
        </li>
        <li className='hover:text-cyan-500'>
          <Link to="/about">About</Link>
        </li>
      </ul>
      <div className='flex items-center space-x-4'>
        {isLoggedIn ? (
          <>
            <span 
              className='text-cyan-300 cursor-pointer flex items-center space-x-1' 
              onClick={toggleDropdown}
            >
              <AiOutlineUser size={20} /> 
              <span>Hello, {username}</span>
            </span>
            {isDropdownVisible && (
              <ul className='absolute right-4 mt-64 w-36 bg-gray-700 rounded-lg shadow-lg text-white' onClick={toggleDropdown}>
                <li className='px-4 py-2 hover:bg-gray-600 rounded-t-lg'>
                  <Link to="/profile">My Profile</Link>
                </li>
                <li className='px-4 py-2 hover:bg-gray-600'>
                  <Link to="/postcode">Post Code</Link>
                </li>
                <li className='px-4 py-2 hover:bg-gray-600'>
                  <Link to="/postproject">Post project</Link>
                </li>
                <li className='px-4 py-2 hover:bg-gray-600'>
                  <Link to="/settings">Settings</Link>
                </li>
                <li className='px-4 py-2 hover:bg-gray-600 rounded-b-lg'>
                  <button onClick={handleLogout}>Logout</button>
                </li>
              </ul>
            )}
          </>
        ) : (
          <Link className='hover:text-cyan-500' to="/login">Login</Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
