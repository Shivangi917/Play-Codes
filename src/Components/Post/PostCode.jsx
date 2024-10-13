import React, { useState } from 'react';
import axios from 'axios';

const PostCode = ({ useremail }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [codeSnippet, setCodeSnippet] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const payload = {
                title,
                description,
                codeSnippet,
                useremail,
            };

            const response = await axios.post('http://localhost:3000/codes', payload);
            console.log("Code posted successfully: ", response.data);
        } catch (error) {
            console.error("Error posting code: ", error);
        }
    };

    return (
        <div className="bg-gray-900 p-6 shadow-md min-h-screen">
            <h2 className="text-2xl text-cyan-600 mb-4">Post Your Code</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Title"
                    className="block w-full p-2 mb-4 rounded-md bg-gray-700 text-white placeholder-gray-400"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Description"
                    className="block w-full p-2 mb-4 rounded-md bg-gray-700 text-white placeholder-gray-400"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <textarea
                    placeholder="Code snippet"
                    className="block w-full p-2 mb-4 rounded-md bg-gray-700 text-white placeholder-gray-400"
                    value={codeSnippet}
                    onChange={(e) => setCodeSnippet(e.target.value)}
                    rows="6"
                />
                <button
                    type="submit"
                    className="bg-cyan-600 p-3 rounded-md text-white hover:bg-cyan-500 transition duration-200"
                >
                    Post Code
                </button>
            </form>
        </div>
    );
};

export default PostCode;
