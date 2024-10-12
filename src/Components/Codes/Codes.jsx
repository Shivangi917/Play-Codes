import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Codes = () => {
    const [codes, setCodes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const navigate = useNavigate();

    const handleOpenSnippet = (codeSnippet) => {
        navigate('./codeSnippet', { state: { codeSnippet } });  // Pass codeSnippet via state
    }

    useEffect(() => {
        const fetchCodes = async () => {
            try {
                const response = await axios.get('http://localhost:3000/codes');
                setCodes(response.data);  // Set the fetched codes to the state
                setLoading(false);
            } catch (error) {
                console.error('Error fetching code snippets:', error);
                setError("Error fetching code snippets.");
                setLoading(false);
            }
        };

        fetchCodes();
    }, []);

    if (loading) return <p>Loading codes...</p>;
    if (error) return <p>{error}</p>;

    return (
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
    );
};

export default Codes;
