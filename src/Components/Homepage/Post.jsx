import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaHeart, FaComment, FaShareAlt } from 'react-icons/fa'; // Import icons

const Post = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get('http://localhost:3000/post');
        setProjects(response.data);
        setLoading(false);
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching projects: ', error);
        setError("Error fetching projects.");
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  if (loading) return <p>Loading projects...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="text-white space-y-8">
      {projects.length > 0 ? (
        projects.map((project) => (
          <div key={project._id} className="bg-gray-800 rounded-lg shadow-lg p-6 max-w-2xl mx-auto mb-10">
            <h2 className="text-2xl font-semibold text-cyan-600 mb-3">
              {project.user ? project.user.name : "Unknown"}
            </h2>
            {project.image && (
              <img
                src={`http://localhost:3000/Public/${project.image}`}
                alt={project.description}
                className="w-full h-auto rounded-lg shadow-md mb-4"
              />
            )}
            <p className="text-md text-gray-300 italic mb-4">{project.description}</p>
            {/* Love, Comment, and Share Section */}
            <div className=" text-gray-400">
              <button className="space-x-2 hover:text-cyan-500 transition duration-200">
                <FaHeart size={20} />
              </button>
              <button className="ml-5 hover:text-cyan-500 transition duration-200">
                <FaComment size={20} />
              </button>
              <button className="ml-5 hover:text-cyan-500 transition duration-200">
                <FaShareAlt size={20} />
              </button>
            </div>
          </div>
        ))
      ) : (
        <p>No projects available yet.</p>
      )}
    </div>
  );
};

export default Post;
