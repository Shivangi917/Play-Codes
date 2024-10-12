import React, { useState } from 'react';
import axios from 'axios';

const PostProject = ({ useremail }) => {
    const [description, setDescription] = useState('');
    const [image, setImage] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('description', description);
        formData.append('useremail', useremail); // Include user email
        formData.append('image', image);

        try {
            const response = await axios.post('http://localhost:3000/post', formData);
            console.log("Project posted successfully", response.data);
        } catch (error) {
            console.error("Error posting project: ", error.response ? error.response.data : error.message);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder='Description' 
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className='block' 
                    required
                />
                <input 
                    type="file"
                    accept="image/*"
                    onChange={e => setImage(e.target.files[0])}
                    className='block' 
                />
                <button type="submit">Upload Project</button>
            </form>
        </div>
    );
};

export default PostProject;
