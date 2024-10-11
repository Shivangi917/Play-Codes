import React, { useState } from 'react';
import axios from 'axios';

const PostCode = ({useremail}) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [codeSnippet, setCodeSnippet] = useState('');

    const handleSubmit = async(e) => {
        e.preventDefault();

        try {
            const payload = {
                title, 
                description,
                codeSnippet, 
                useremail
            };

            const response = await axios.post('http://localhost:3000/codes', payload);
            console.log("Code posted successfully: ", response.data);
        } catch (error) {
            console.error("Error posting code: ", error);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" 
                placeholder='Title' 
                className='block'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                />
                <input type="text" 
                placeholder='Description' 
                className='block'
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                />
                <textarea placeholder='Code snippet'
                className='block' 
                value={codeSnippet}
                onChange={(e) => setCodeSnippet(e.target.value)}
                />
                <button type='submit' className='bg-zinc-600 p-3 rounded-md text-white m-2'>Post Code</button>
            </form>
        </div>
    )
}

export default PostCode;
