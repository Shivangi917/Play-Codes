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
        <div className='flex min-h-screen bg-zinc-900'>
          {/* Left Sidebar */}
          <div className="flex-1 mt-5 sticky top-0">
            <LeftSidebar />
          </div>

          {/* Vertical Line Divider and Main Post Section */}
          <div className='m-5 flex-[1.9] border-x-2 border-gray-300 px-4'>
            <Post />
          </div>

          {/* Right Sidebar */}
          <div className="flex-1 mt-5 sticky top-0">
            <RightSidebar />
          </div>
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
