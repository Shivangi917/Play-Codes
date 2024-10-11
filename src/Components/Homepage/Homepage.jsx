import React from 'react';
import LeftSidebar from './LeftSidebar';
import RightSidebar from './RightSidebar';
import Post from './Post';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user'));
  //console.log('User data: ', user.name);

  if(user) {
    return (
      <div>
        <h1>Welcome, {user.name}!</h1>
        <div className='flex min-h-screen bg-gray-100'>
          {/* Left Sidebar */}
          <LeftSidebar />
    
          {/* Main Post Section */}
          <Post />
    
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
  )
}

export default HomePage;
