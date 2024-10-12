import React, { useState } from 'react';
import axios from 'axios';

const PostProject = ({ useremail }) => {
    const [description, setDescription] = useState('');

    const handleSubmit = async(e) => {
        e.preventDefault();

        try {
            const payload = {
                description, 
                useremail
            };

            const response = await axios.post('http://localhost:3000/projects', payload);
            console.log("Project posted successfully", response.data);
        } catch(error) {
            console.error("Error posting project: ", error);
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" 
                placeholder='description' 
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className='block' 
                required/>
                <button type="submit">Upload Project</button>
            </form>
        </div>
    )
}

export default PostProject;
