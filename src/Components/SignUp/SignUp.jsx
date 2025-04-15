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
      await axios.post('http://localhost:3000/api/auth/signup', {
        email, name, password
      }, { withCredentials: true });

      setIsSignedUp(true);
    } catch (error) {
      console.error("Signup error:", error.response?.data || error);
    }
  };

  const handleVerify = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3000/api/auth/verifyEmail', {
        verificationCode
      }, { withCredentials: true });

      alert("Verification successful! Redirecting to login...");
      navigate('/login');
    } catch (error) {
      console.error("Verification error:", error.response?.data || error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md border border-gray-200">
        <h2 className="text-2xl font-semibold text-center mb-6 text-gray-800">Sign Up</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Username"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            onChange={(e) => setName(e.target.value)}
            required
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-medium transition duration-200"
          >
            Sign Up
          </button>
        </form>

        {isSignedUp && (
          <form onSubmit={handleVerify} className="mt-6 space-y-4">
            <input
              type="text"
              placeholder="Enter verification code"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              onChange={(e) => setVerificationCode(e.target.value)}
              required
            />
            <button
              type="submit"
              className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg font-medium transition duration-200"
            >
              Verify Email
            </button>
          </form>
        )}

        <p className="text-sm text-center mt-4 text-gray-600">
          Already have an account?{" "}
          <button onClick={() => navigate('/login')} className="text-blue-600 hover:underline">
            Login
          </button>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
