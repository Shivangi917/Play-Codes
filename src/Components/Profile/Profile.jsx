import React, { useState, useEffect } from 'react';
import UserPosts from './UserPosts';
import UserCodes from './UserCodes';
import UserInfo from './UserInfo';
import { useParams } from 'react-router-dom';

const Profile = ({ loggedInUsername, isLoggedIn, useremail }) => {
  const { username } = useParams();
  const [activeTab, setActiveTab] = useState('posts');

  useEffect(() => {
    console.log("UserCodes loaded with:", useremail, isLoggedIn);
  }, [useremail, isLoggedIn]);

  const isOwnProfile = username === loggedInUsername;

  return (
    <div className='flex'>
      <UserInfo username={loggedInUsername} setActiveTab={setActiveTab} />
      <div className='flex-grow bg-gray-400'>
        {activeTab === 'posts' ? (
          <UserPosts isLoggedIn={isLoggedIn} useremail={useremail} />
        ) : (
          <UserCodes isLoggedIn={isLoggedIn} useremail={useremail} />
        )}
      </div>
    </div>
  );  
};

export default Profile;
