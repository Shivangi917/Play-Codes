import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignedUp, setIsSignedUp] = useState(false);
  const [verificationCode, setVerificationCode] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/api/auth/signup', {
        email, name, password
      }, { withCredentials: true });
      console.log("Signup successful:", response.data);
      setIsSignedUp(true);
    } catch (error) {
      console.error("Error during signup:", error.response?.data || error);
    }
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/api/auth/verifyEmail', {
        verificationCode
      }, { withCredentials: true });
      console.log("Email verified successfully:", response.data);
      alert("Verification successful! Redirecting to login...");
      navigate('/login');
    } catch (error) {
      console.error("Error during email verification:", error.response?.data || error);
    }
  };

  return (
    <div className='flex justify-center items-center min-h-screen bg-gray-100'>
      <div className='bg-white rounded-2xl shadow-md p-10 w-full max-w-md'>
        <h2 className='text-3xl font-semibold text-center text-gray-800 mb-6'>Sign Up</h2>

        <form onSubmit={handleSubmit}>
          <div className='mb-4'>
            <input
              type="text"
              placeholder='Username'
              className='w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400'
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className='mb-4'>
            <input
              type="email"
              placeholder='Email'
              className='w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400'
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className='mb-4'>
            <input
              type="password"
              placeholder='Password'
              className='w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400'
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className='w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-lg transition duration-200'
          >
            Sign Up
          </button>
        </form>

        {isSignedUp && (
          <form onSubmit={handleSignup} className='mt-6'>
            <input
              type='text'
              placeholder='Verification Code'
              className='w-full p-3 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-green-400'
              onChange={(e) => setVerificationCode(e.target.value)}
              required
            />
            <button
              type="submit"
              className='w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-lg transition duration-200'
            >
              Verify Email
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default SignUp;
