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
        <div>
            <h1>Code Snippets</h1>
            <div>
                {codes.length > 0 ? (
                    codes.map((code) => (
                        <div key={code._id} onClick={() => handleOpenSnippet(code.codeSnippet)} className="code-snippet border p-4 m-2 rounded-md bg-gray-200">
                            <h2> {code.user ? code.user.name : "Unknown"}/{code.title}</h2>
                            <p><strong>Description:</strong> {code.description}</p>
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
