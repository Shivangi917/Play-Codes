import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = ({setIsLoggedIn, setUsername}) => {
    const navigate = useNavigate();

    const handleSignUp = () => {
        navigate('/signup');
    }

    const [email, setEmail] = useState(''); 
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(
                'http://localhost:3000/api/auth/login',
                { email, password },
                { withCredentials: true } 
            );
              
            console.log("Login successful:", response.data); 

            setIsLoggedIn(true);
            setUsername(response.data.name);
            navigate('/');
        } catch (error) {
            console.log("I am the error, ", error);
            alert("Invalid email or password. Please try again or sign up.");
        }
    };

    return (
        <div className='flex justify-center items-center min-h-screen'>
            <div className='bg-white rounded-lg shadow-lg p-16'>
                <h2 className='text-2xl font-bold mb-4'>Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className='mb-4'>
                        <input
                            type="email"
                            placeholder='Email'
                            className='w-full p-2 border border-gray-300 rounded'
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} 
                            required
                        />
                    </div>
                    <div className='mb-4'>
                        <input
                            type="password"
                            placeholder='Password'
                            className='w-full p-2 border border-gray-300 rounded'
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)} 
                            required
                        />
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
                </form>
                <p className='text-center'>or</p>
                <div className='text-center'>
                    <button type="button" className='w-full bg-blue-500 px-3 py-2 rounded text-white' onClick={handleSignUp}>Sign up</button>
                </div>
            </div>
        </div>
    )
}

export default Login;
