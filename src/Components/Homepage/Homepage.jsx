import React from 'react';
import LeftSidebar from './LeftSidebar';
import RightSidebar from './RightSidebar';
import Post from './Post';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user'));

  if (user) {
    return (
      <div>
        <div className='flex min-h-screen'>
          {/* Left Sidebar */}
          <LeftSidebar />

          {/* Vertical Line Divider and Main Post Section */}
          <div className='border-y border-2 border-gray-300 mx-4 flex-grow'>
            <Post />
          </div>

          {/* Right Sidebar */}
          <RightSidebar />
        </div>
      </div>
    );
  }

  return (
    <div>
      Welcome to our website!
    </div>
  );
};

export default HomePage;
