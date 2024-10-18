// Profile.js
import React, { useState } from 'react';
import Posts from './Posts';
import Codes from './Codes';
import UserInfo from './UserInfo';
import { useParams } from 'react-router-dom'; // Import useParams to get URL parameters

const Profile = ({ loggedInUsername }) => {
  const { username } = useParams();
  const [activeTab, setActiveTab] = useState('posts');

  const isOwnProfile = username === loggedInUsername;

  return (
    <div className='flex'>
      <UserInfo username={loggedInUsername} setActiveTab = {setActiveTab} />
      {isOwnProfile ? (
        <div className='flex-grow bg-gray-400'>
          {activeTab === 'posts' ? (
            <>
              <Posts />
            </>
          ) : (
            <>
              <Codes />
            </>
          )}
        </div>
      ) : (
        <div>
          <h2>Posts</h2>
          <Posts /> {/* Show the other user's posts */}
        </div>
      )}
    </div>
  );
};

export default Profile;
