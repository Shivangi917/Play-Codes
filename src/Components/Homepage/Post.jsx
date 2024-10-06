import React from 'react';

const Post = () => {
  return (
    <div className='flex-1 bg-white text-black p-4'>
      {/* Post content goes here */}
      <h2 className="text-2xl mb-4">Posts</h2>
      <div className='mb-4 p-4 border border-gray-200'>
        <h3 className='text-xl'>Project 1</h3>
        <p>Description of project 1...</p>
      </div>
      <div className='mb-4 p-4 border border-gray-200'>
        <h3 className='text-xl'>Project 2</h3>
        <p>Description of project 2...</p>
      </div>
    </div>
  );
}

export default Post;
