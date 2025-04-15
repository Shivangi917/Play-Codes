import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

const Codes = ({ isLoggedIn }) => {
    const [codes, setCodes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const navigate = useNavigate();

    const handleOpenSnippet = (codeSnippet) => {
        navigate('./codeSnippet', { state: { codeSnippet } });
    }

    useEffect(() => {
        const fetchCodes = async () => {
            try {
                const response = await axios.get('http://localhost:3000/codes');
                setCodes(response.data); 
                setLoading(false);
            } catch (error) {
                console.error('Error fetching code snippets:', error);
                setError("Error fetching code snippets.");
                setLoading(false);
            }
        };

        fetchCodes();
    }, []);

    if (loading) return <p className="text-white text-center mt-10">Loading codes...</p>;
    if (error) return <p className="text-red-400 text-center mt-10">{error}</p>;

    return (
        isLoggedIn ? (
            <div className='min-h-screen bg-gray-900 text-white p-6'>
                <h1 className='text-4xl font-bold text-center mb-10 border-b-4 border-b-cyan-800 inline-block pb-5'>
                    Code Snippets Repository
                </h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                    {codes.length > 0 ? (
                        codes.map((code) => (
                            <div key={code._id} onClick={() => handleOpenSnippet(code.codeSnippet)} 
                                className="code-snippet p-6 rounded-md bg-gray-800 hover:bg-gray-700 transition-all duration-300 cursor-pointer">
                                <h2 className='text-cyan-600'>
                                    {code.user ? code.user.name : "Unknown"}/{code.title}
                                </h2>
                                <p className='mt-4'><strong>Description:</strong> {code.description}</p>
                            </div>
                        ))
                    ) : (
                        <p>No code snippets available yet.</p>
                    )}
                </div>
            </div>
        ) : (
            <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white p-10">
                <div className="bg-gray-800 rounded-xl shadow-lg p-10 text-center max-w-md w-full">
                    <h2 className="text-3xl font-bold text-cyan-500 mb-4">Hey Coder! 🔐</h2>
                    <p className="mb-6 text-gray-300">You need to log in to unlock the full power of our code vault! 🚀</p>
                    <Link 
                        to="/login"
                        className="inline-block px-6 py-3 rounded-lg bg-cyan-600 hover:bg-cyan-700 text-white font-semibold transition"
                    >
                        Log In Now
                    </Link>
                    <p className="mt-4 text-sm text-gray-400">
                        Not registered yet? <Link to="/signup" className="text-cyan-400 underline hover:text-cyan-300">Join us</Link> and share your code magic ✨
                    </p>
                    <div className="mt-6 text-gray-500 text-xs">
                        <span role="img" aria-label="spark">⚡</span> Build. Share. Learn.
                    </div>
                </div>
            </div>
        )
    );
};

export default Codes;
