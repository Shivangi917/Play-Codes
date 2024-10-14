import React, { useState } from 'react';
import axios from 'axios';
import AceEditor from 'react-ace';
import "ace-builds/src-noconflict/theme-github"; // You can choose the theme you prefer

// Import modes for different languages
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/mode-csharp";
import "ace-builds/src-noconflict/mode-html";
import "ace-builds/src-noconflict/mode-css";
// Add more languages as needed

const PostCode = ({ useremail }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [codeSnippet, setCodeSnippet] = useState('');
    const [language, setLanguage] = useState('javascript'); // Default language

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const payload = {
                title,
                description,
                codeSnippet,
                useremail,
                language, // Include selected language in the payload
            };

            const response = await axios.post('http://localhost:3000/codes', payload);
            console.log("Code posted successfully: ", response.data);
        } catch (error) {
            console.error("Error posting code: ", error);
        }
    };

    return (
        <div className="bg-gray-900 p-6 shadow-lg min-h-screen flex items-center justify-center">
            <div className="bg-gray-800 rounded-lg p-8 shadow-md w-full max-w-lg">
                <h2 className="text-3xl text-cyan-600 mb-6 text-center">Post Your Code</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Title"
                        className="block w-full p-3 mb-4 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Description"
                        className="block w-full p-3 mb-4 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                    <select
                        className="block w-full p-3 mb-4 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                        value={language}
                        onChange={(e) => setLanguage(e.target.value)}
                    >
                        <option value="javascript">JavaScript</option>
                        <option value="python">Python</option>
                        <option value="java">Java</option>
                        <option value="csharp">C#</option>
                        <option value="html">HTML</option>
                        <option value="css">CSS</option>
                        {/* Add more options as needed */}
                    </select>
                    <AceEditor
                        mode={language} // Use the selected language mode
                        theme="github"
                        value={codeSnippet}
                        onChange={(newValue) => setCodeSnippet(newValue)}
                        name="codeSnippet"
                        editorProps={{ $blockScrolling: true }}
                        style={{ width: '100%', height: '200px' }} // Adjust as needed
                    />
                    <button
                        type="submit"
                        className="w-full bg-cyan-600 p-3 rounded-md text-white hover:bg-cyan-500 transition duration-200"
                    >
                        Post Code
                    </button>
                </form>
            </div>
        </div>
    );
};

export default PostCode;
