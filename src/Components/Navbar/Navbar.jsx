import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineUser } from 'react-icons/ai';

const Navbar = ({isLoggedIn, username, handleLogout}) => {
  return (
    <nav className='flex justify-between p-6 text-white bg-gray-800'>
        <div className='font-bold text-2xl'>
            <p>Play Codes</p>
        </div>
        <ul className='flex space-x-20'>
            <li className='hover:text-blue-500'>
                <Link to="/">Home</Link>
            </li>
            <li className='hover:text-blue-500'>
                <Link to="/codes">Codes</Link>
            </li>
            <li className='hover:text-blue-500'>
                <Link to="/about">About</Link>
            </li>
        </ul>
        <div className='flex hover:text-blue-500'>
            <Link to="/login">Login</Link>
        </div>
    </nav>
  );
};

export default Navbar;
