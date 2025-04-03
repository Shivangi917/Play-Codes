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
      const response = await axios.post('http://localhost:3000/api/auth/signup', { email, name, password });
      console.log("Signup successful:", response.data);
      setIsSignedUp(true);
    } catch (error) {
      console.error("Error during signup:", error.response?.data || error);
    }
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/api/auth/verifyEmail', { verificationCode });
      console.log("Email verified successfully:", response.data);
      alert("Verification successful! Redirecting to login...");
      navigate('/login');
    } catch (error) {
      console.error("Error during email verification:", error.response?.data || error);
    }
  };

  return (
    <div className='flex justify-center items-center min-h-screen'>
      <div className='bg-white rounded-lg shadow-lg p-16'>
        <h2 className='text-2xl font-bold mb-4'>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className='mb-4'>
            <input
              type="text"
              placeholder='Username'
              className='w-full p-2 border border-gray-300 rounded'
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className='mb-4'>
            <input
              type="email"
              placeholder='Email'
              className='w-full p-2 border border-gray-300 rounded'
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className='mb-4'>
            <input
              type="password"
              placeholder='Password'
              className='w-full p-2 border border-gray-300 rounded'
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className='text-center mt-4'>
            <button type="submit" className='bg-blue-500 px-3 py-2 rounded text-white'>Sign Up</button>
          </div>
        </form>

        {isSignedUp && (
          <form onSubmit={handleSignup} className='mt-4'>
            <input
              type='text'
              placeholder='Verification Code'
              className='w-full p-2 border border-gray-300 rounded mb-2'
              onChange={(e) => setVerificationCode(e.target.value)}
              required
            />
            <div className='text-center mt-2'>
              <button type="submit" className='bg-green-500 px-3 py-2 rounded text-white'>Verify</button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default SignUp;
