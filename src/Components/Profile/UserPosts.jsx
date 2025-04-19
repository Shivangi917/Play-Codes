import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaHeart, FaComment, FaShareAlt } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const UserPosts = ({ isLoggedIn, useremail }) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [commentInputs, setCommentInputs] = useState({});

  useEffect(() => {
    const fetchUserPosts = async () => {
      if (!useremail) return;
      try {
        const response = await axios.get(`http://localhost:3000/post/${useremail}`);
        setPosts(response.data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching user's posts:", err);
        setError("Error fetching your posts.");
        setLoading(false);
      }
    };

    fetchUserPosts();
  }, [useremail]);

  const handleLike = async (postId) => {
    try {
      const res = await axios.post(
        'http://localhost:3000/projectActivity/like',
        { projectId: postId },
        { withCredentials: true }
      );

      const updatedPosts = posts.map((post) =>
        post._id === postId ? { ...post, likes: res.data.likes } : post
      );
      setPosts(updatedPosts);
    } catch (error) {
      console.error("Error liking post:", error);
    }
  };

  const handleComment = async (postId) => {
    const commentText = commentInputs[postId]?.trim();
    if (!commentText) return;

    try {
      const res = await axios.post(
        'http://localhost:3000/projectActivity/comment',
        { projectId: postId, commentText },
        { withCredentials: true }
      );

      const updatedPosts = posts.map((post) =>
        post._id === postId
          ? {
              ...post,
              comments: [...(post.comments || []), { ...res.data.comment, user: { name: 'You' } }],
            }
          : post
      );
      setPosts(updatedPosts);
      setCommentInputs((prev) => ({ ...prev, [postId]: '' }));
    } catch (error) {
      console.error("Error adding comment:", error);
    }
  };

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
                {post.user ? post.user.name : "You"}
              </h2>

              {/* Image Swiper */}
              {post.image && Array.isArray(post.image) && post.image.length > 0 && (
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
                  {post.image.map((img, index) => (
                    <SwiperSlide key={index}>
                      <img
                        src={`http://localhost:3000/Public/${img}`}
                        alt={`Post image ${index + 1}`}
                        className="w-full h-auto rounded-lg object-cover max-h-[500px]"
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              )}

              <p className="text-md text-gray-300 italic mb-4">{post.description}</p>

              {/* Like / Comment / Share */}
              <div className="flex items-center text-gray-400 mb-3">
                <button onClick={() => handleLike(post._id)} className="flex items-center hover:text-red-400">
                  <FaHeart className="mr-1" /> {post.likes?.length || 0}
                </button>
                <div className="ml-5 flex items-center">
                  <FaComment className="mr-1" /> {post.comments?.length || 0}
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
                  value={commentInputs[post._id] || ''}
                  onChange={(e) =>
                    setCommentInputs((prev) => ({ ...prev, [post._id]: e.target.value }))
                  }
                />
                <button
                  onClick={() => handleComment(post._id)}
                  className="mt-2 bg-cyan-600 px-4 py-1 rounded text-white hover:bg-cyan-700"
                >
                  Comment
                </button>
              </div>

              {/* Show Comments */}
              <div className="space-y-2 text-sm text-gray-300">
                {post.comments?.map((comment, idx) => (
                  <div key={idx} className="bg-gray-700 p-2 rounded">
                    <span className="font-semibold text-cyan-400">
                      {comment.user?.name || "Someone"}:
                    </span>{' '}
                    {comment.commentText}
                  </div>
                ))}
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-400">You haven't posted anything yet.</p>
        )}
      </div>
    </div>
  ) : (
    <p className="text-center text-white mt-10">Please log in to view your posts.</p>
  );
};

export default UserPosts;
