import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaHeart, FaComment, FaShareAlt } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Swiper Styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Post = ({ useremail }) => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [commentInputs, setCommentInputs] = useState({});

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get('http://localhost:3000/post');
        setProjects(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching projects: ', error);
        setError("Error fetching projects.");
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  const handleLike = async (projectId) => {
    try {
      const res = await axios.post(
        'http://localhost:3000/projectActivity/like',
        { projectId },
        { withCredentials: true }
      );

      const updatedProjects = projects.map((project) =>
        project._id === projectId ? { ...project, likes: res.data.likes } : project
      );
      setProjects(updatedProjects);
    } catch (error) {
      console.error("Error liking project:", error);
    }
  };

  const handleComment = async (projectId) => {
    const commentText = commentInputs[projectId]?.trim();
    if (!commentText) return;

    try {
      const res = await axios.post(
        'http://localhost:3000/projectActivity/comment',
        { projectId, commentText },
        { withCredentials: true }
      );

      const updatedProjects = projects.map((project) =>
        project._id === projectId
          ? {
              ...project,
              comments: [...(project.comments || []), { ...res.data.comment, user: { name: 'You' } }],
            }
          : project
      );
      setProjects(updatedProjects);
      setCommentInputs((prev) => ({ ...prev, [projectId]: '' }));
    } catch (error) {
      console.error("Error adding comment:", error);
    }
  };

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

            {/* Image Swiper */}
            {project.image && Array.isArray(project.image) && project.image.length > 0 && (
              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                navigation
                pagination={{ clickable: true }}
                loop={true}
                autoplay={{ delay: 3000 }}
                spaceBetween={10}
                slidesPerView={1}
                className="mb-4"
              >
                {project.image.map((image, index) => (
                  <SwiperSlide key={index}>
                    <img
                      src={`http://localhost:3000/Public/${image}`}
                      alt={`${project.description} image ${index + 1}`}
                      className="w-full h-auto rounded-lg object-cover max-h-[500px]"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            )}

            <p className="text-md text-gray-300 italic mb-4">{project.description}</p>

            {/* Like / Comment / Share */}
            <div className="flex items-center text-gray-400 mb-3">
              <button onClick={() => handleLike(project._id)} className="flex items-center hover:text-red-400">
                <FaHeart className="mr-1" /> {project.likes?.length || 0}
              </button>
              <div className="ml-5 flex items-center">
                <FaComment className="mr-1" /> {project.comments?.length || 0}
              </div>
              <div className="ml-5 flex items-center">
                <FaShareAlt className="mr-1" /> Share
              </div>
            </div>

            {/* Comment Input */}
            <div className="mb-3">
              <input
                type="text"
                placeholder="Write a comment..."
                className="w-full p-2 rounded bg-gray-700 text-white focus:outline-none"
                value={commentInputs[project._id] || ''}
                onChange={(e) =>
                  setCommentInputs((prev) => ({ ...prev, [project._id]: e.target.value }))
                }
              />
              <button
                onClick={() => handleComment(project._id)}
                className="mt-2 bg-cyan-600 px-4 py-1 rounded text-white hover:bg-cyan-700"
              >
                Comment
              </button>
            </div>

            {/* Show Comments */}
            <div className="space-y-2 text-sm text-gray-300">
              {project.comments?.map((comment, index) => (
                <div key={index} className="bg-gray-700 p-2 rounded">
                  <span className="font-semibold text-cyan-400">
                    {comment.user.name || "Someone"}:
                  </span>{' '}
                  {comment.commentText}
                </div>
              ))}
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
