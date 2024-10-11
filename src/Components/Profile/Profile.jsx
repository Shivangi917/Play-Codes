import React from 'react';
import Posts from './Posts';
import UserInfo from './UserInfo';

const Profile = ({ username }) => {
  return (
    <div>
      <UserInfo username={username}/>
      <Posts />
    </div>
  )
}

export default Profile;
