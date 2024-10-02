import React from 'react';

const Login = () => {
  return (
    <div className='flex justify-center items-center min-h-screen'>
        <div className='bg-white p-8 rounded-lg shadow-lg'>
            <h2 className='text-2xl font-bold mb-4'>Login</h2>
            <div className='mb-4'>
                <input 
                  type="text" 
                  placeholder='Username' 
                  className='w-full p-2 border border-gray-300 rounded' 
                  required 
                />
            </div>
            <div className='mb-4'>
                <input 
                  type="password" 
                  placeholder='Password' 
                  className='w-full p-2 border border-gray-300 rounded' 
                  required 
                />
            </div>
            <div className='flex justify-between items-center mb-4'>
                <label className='flex items-center'>
                    <input type="checkbox" className='mr-2' /> Remember me
                </label>
                <a href="#" className='text-blue-500'>Forgot password?</a>
            </div>
            <div>
                <button 
                  type="submit" 
                  className='w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600'
                >
                  Login
                </button>
            </div>
        </div>
    </div>
  )
}

export default Login;
