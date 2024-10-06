import React from 'react';
import LeftSidebar from './LeftSidebar';
import RightSidebar from './RightSidebar';
import Post from './Post';

const HomePage = () => {
  return (
    <div className='flex min-h-screen bg-gray-100'>
      {/* Left Sidebar */}
      <LeftSidebar />

      {/* Main Post Section */}
      <Post />

      {/* Right Sidebar */}
      <RightSidebar />
    </div>
  );
}

export default HomePage;
