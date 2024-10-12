import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Post = () => {
  const [projects, setProjects] = useState([]); // Add projects state
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get('http://localhost:3000/projects'); // Corrected URL to '/projects'
        setProjects(response.data); // Store fetched projects in state
        setLoading(false);
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
    <div>
      {projects.length > 0 ? (
        projects.map((project) => (
          <div key={project._id}>
            {project.user ? project.user.name : "Unknown"} {/* Fixed reference */}
          </div>
        ))
      ) : (
        <p>No projects available yet.</p>
      )}
    </div>
  );
};

export default Post;
