import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = ({ setIsLoggedIn, setUsername, setUserEmail }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = () => {
    navigate('/signup');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // 1. Clear previous token (optional for cookie-based auth)
      localStorage.removeItem('token');

      // 2. Login request
      const response = await axios.post(
        'http://localhost:3000/api/auth/login',
        { email, password },
        { withCredentials: true } // IMPORTANT to send/receive cookies
      );

      console.log('Login response:', response.data);

      const { token, user } = response.data;
      if (!token) throw new Error('Token not received');

      // 3. Store token for UI state (optional)
      localStorage.setItem('token', token);
      console.log(token);

      // 4. Set user details in frontend state
      setIsLoggedIn(true);
      setUsername(user.name);
      setUserEmail(user.email);

      // 5. Redirect to homepage
      navigate('/');

    } catch (error) {
      console.error('Login error:', error.response?.data || error.message);
      alert('Invalid email or password. Please try again or sign up.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md border border-gray-200">
        <h2 className="text-2xl font-semibold text-center mb-6 text-gray-800">Login</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-medium transition duration-200"
          >
            Login
          </button>
        </form>

        <p className="text-sm text-center mt-4 text-gray-600">
          Don’t have an account?{' '}
          <button onClick={handleSignUp} className="text-blue-600 hover:underline">
            Sign Up
          </button>
        </p>
      </div>
    </div>
  );
};

export default Login;
