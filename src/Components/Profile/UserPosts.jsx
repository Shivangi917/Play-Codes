import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaHeart, FaComment, FaShareAlt } from 'react-icons/fa';
import { useNavigate, Link } from 'react-router-dom';

const UserPosts = ({ isLoggedIn, useremail }) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserPosts = async () => {
      if (!useremail) return;
      try {
        const response = await axios.get(`http://localhost:3000/post/${useremail}`);
        setPosts(response.data);
        setLoading(false);
        console.log("User's Posts:", response.data);
      } catch (err) {
        console.error("Error fetching user's posts:", err);
        setError("Error fetching your posts.");
        setLoading(false);
      }
    };

    fetchUserPosts();
  }, [useremail]);

  if (loading) return <p className="text-white text-center mt-10">Loading your posts...</p>;
  if (error) return <p className="text-red-400 text-center mt-10">{error}</p>;

  return isLoggedIn ? (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-4xl font-bold text-center mb-10 border-b-4 border-cyan-800 inline-block pb-5">
        Your Shared Posts
      </h1>
      <div className="space-y-10">
        {posts.length > 0 ? (
          posts.map((post) => (
            <div key={post._id} className="bg-gray-800 rounded-lg shadow-lg p-6 max-w-2xl mx-auto">
              <h2 className="text-2xl font-semibold text-cyan-600 mb-3">
                {post.user ? post.user.name : "Unknown"}
              </h2>
              {post.image && (
                <img
                  src={`http://localhost:3000/Public/${post.image}`}
                  alt={post.description}
                  className="w-full h-auto rounded-lg shadow-md mb-4"
                />
              )}
              <p className="text-md text-gray-300 italic mb-4">{post.description}</p>
              <div className="text-gray-400">
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
          <p className="text-center text-gray-400">You haven't shared any posts yet.</p>
        )}
      </div>
    </div>
  ) : (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white p-10">
      <div className="bg-gray-800 rounded-xl shadow-lg p-10 text-center max-w-md w-full">
        <h2 className="text-3xl font-bold text-cyan-500 mb-4">Hey Coder! 🔐</h2>
        <p className="mb-6 text-gray-300">You need to log in to view your awesome posts! 🚀</p>
        <Link
          to="/login"
          className="inline-block px-6 py-3 rounded-lg bg-cyan-600 hover:bg-cyan-700 text-white font-semibold transition"
        >
          Log In Now
        </Link>
        <p className="mt-4 text-sm text-gray-400">
          Not registered yet?{" "}
          <Link to="/signup" className="text-cyan-400 underline hover:text-cyan-300">
            Join us
          </Link>{" "}
          and share your brilliance ✨
        </p>
        <div className="mt-6 text-gray-500 text-xs">
          <span role="img" aria-label="spark">
            ⚡
          </span>{" "}
          Build. Share. Inspire.
        </div>
      </div>
    </div>
  );
};

export default UserPosts;
