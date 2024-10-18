import React from 'react';
import { useParams } from 'react-router-dom';
import { AiOutlineUser, AiOutlineBook, AiOutlineCode } from 'react-icons/ai'; // Import relevant icons

const UserInfo = ({ loggedInUsername, setActiveTab }) => {  // Add setActiveTab prop
  const { username } = useParams();
  const isOwnProfile = username === loggedInUsername;

  return (
    <div className='bg-gray-900 min-h-screen text-white'>
      <div className='py-5 mx-32'>
        <img 
          src='' 
          alt='User' 
          className='w-52 h-52 border-2 border-cyan-200 shadow-lg hover:shadow-cyan-400 transition-all duration-300 rounded-full'
        />
        <p className='mt-4 text-xl'>
          <AiOutlineUser className='inline mr-2' /> {username}
        </p>
        <p className='mt-2'>
          <AiOutlineBook className='inline mr-2' /> Studying in ABC College
        </p>
        <p className='mt-2'>
          <AiOutlineCode className='inline mr-2' /> FULL STACK DEV
        </p>

        <div className='my-4'>
          <ul className='cursor-pointer'>
            <li onClick={() => setActiveTab('posts')} className='hover:text-cyan-400 transition-all'>Post</li>
            <li onClick={() => setActiveTab('codes')} className='hover:text-cyan-400 transition-all'>Code</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default UserInfo;
