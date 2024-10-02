// src/Components/SignUp.js
import React from 'react';

const SignUp = () => {
  return (
    <div className='flex justify-center items-center min-h-screen'>
      <div className='bg-white rounded-lg shadow-lg p-16'>
        <h2 className='text-2xl font-bold mb-4'>Sign Up</h2>
        <div className='mb-4'>
          <input type="text" placeholder='Username' className='w-full p-2 border border-gray-300 rounded' required />
        </div>
        <div className='mb-4'>
          <input type="email" placeholder='Email' className='w-full p-2 border border-gray-300 rounded' required />
        </div>
        <div className='mb-4'>
          <input type="password" placeholder='Password' className='w-full p-2 border border-gray-300 rounded' required />
        </div>
        <div className='text-center mt-4'>
          <button type="submit" className='bg-blue-500 px-3 py-2 rounded text-white'>Sign Up</button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
