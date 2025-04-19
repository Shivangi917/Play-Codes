import React, { useState } from 'react';
import axios from 'axios';

const PostProject = ({ useremail }) => {
    const [description, setDescription] = useState('');
    const [images, setImages] = useState([]); // Store multiple images
    const [successMessage, setSuccessMessage] = useState(''); 

    const handleImageChange = (e) => {
        // Allow multiple images
        setImages([...e.target.files]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('description', description);
        formData.append('useremail', useremail);

        // Append all images to formData
        images.forEach((image) => {
            formData.append('images', image); // 'images' is the field name
        });

        try {
            const response = await axios.post('http://localhost:3000/post', formData);
            setSuccessMessage("Project posted successfully!"); // Set success message
            console.log("Project posted successfully", response.data);

            // Clear the form fields after successful submission
            setDescription('');
            setImages([]);
        } catch (error) {
            console.error("Error posting project: ", error.response ? error.response.data : error.message);
        }
    };

    return (
        <div className="min-h-screen bg-gray-900 flex items-center justify-center p-6">
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-3xl text-cyan-600 mb-4 text-center">Upload Your Project</h2>
                <form onSubmit={handleSubmit}>
                    <textarea
                        placeholder="Description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="block w-full p-3 mb-4 rounded-md bg-gray-700 text-white placeholder-gray-400 resize-none"
                        rows="4"
                        required
                    />
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                        multiple  // Allow multiple file selection
                        className="block w-full text-gray-200 mb-4"
                    />
                    <button
                        type="submit"
                        className="bg-cyan-600 w-full p-3 rounded-md text-white hover:bg-cyan-500 transition duration-200"
                    >
                        Upload Project
                    </button>
                </form>
                {successMessage && (
                    <div className="text-green-500 text-center mt-4">
                        {successMessage}
                    </div>
                )}
            </div>
        </div>
    );
};

export default PostProject;
