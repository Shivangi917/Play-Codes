import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineUser } from 'react-icons/ai';

function Navbar() {
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
                <Link to="/project">Project</Link>
            </li>
            <li className='hover:text-blue-500'>
                <Link to="/discussion">Discussions</Link>
            </li>
            <li className=''>
                <Link to="/about">About</Link>
            </li>
        </ul>
        <div className='flex hover:text-blue-500'>
            <AiOutlineUser className='mt-1 mr-2' />
            <Link to="/profile">Profile</Link>
        </div>
    </nav>
  );
}

export default Navbar;
