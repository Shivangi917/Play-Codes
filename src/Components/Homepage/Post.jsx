import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Post = () => {
  const [projects, setProjects] = useState([]); // Add projects state
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get('http://localhost:3000/post'); // Corrected URL to '/post'
        setProjects(response.data); // Store fetched projects in state
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
    <div className="post-container">
      {projects.length > 0 ? (
        projects.map((project) => (
          <div key={project._id} className="post">
            <h2>{project.user ? project.user.name : "Unknown"}</h2>
            <p>{project.description}</p>
            {project.image && (
              <img
                src={`http://localhost:3000/Public/${project.image}`} // Ensure this path is correct
                alt={project.description}
                className="post-image"
              />
            )}
          </div>
        ))
      ) : (
        <p>No projects available yet.</p>
      )}
    </div>
  );
};

export default Post;
