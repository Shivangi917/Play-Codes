import React from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();

    const handleSignUp = () => {
        navigate('/signup');
    }
    return (
        <div className='flex justify-center items-center min-h-screen'>
            <div className='bg-white rounded-lg shadow-lg p-16'>
                <h2 className='text-2xl font-bold mb-4'>Login</h2>
                <div className='mb-4'>
                    <input type="text" placeholder='Username' className='w-full p-2 border border-gray-300 rounded'required />
                </div>
                <div className='mb-4'>
                    <input type="password" placeholder='Password' className='w-full p-2 border border-gray-300 rounded' required />
                </div>
                <div>
                    <label>
                        <input type="checkbox" /> Remember me
                    </label>
                    <a href="#" className='pl-5 text-blue-600'>Forgot password?</a>
                </div>
                <div className='text-center mt-4'>
                    <button type="submit" className='w-full bg-blue-500 px-3 py-2 rounded text-white'>Login</button>
                </div>
                <p className='text-center'>or</p>
                <div className='text-center'>
                    <button type="submit" className='w-full bg-blue-500 px-3 py-2 rounded text-white' onClick={handleSignUp}>Sign up</button>
                </div>
            </div>
        </div>
    )
}

export default Login;
