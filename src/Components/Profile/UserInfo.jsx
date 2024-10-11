import React from 'react';

const UserInfo = ({ username }) => {
  return (
    <div>
        <div className=''>
        <img src='' alt='User' className='my-5 m-auto w-52 h-52 border-2 border-cyan-200 shadow-lg hover:shadow-cyan-400 transition-all duration-300 rounded-full'></img>
        <p className='text-center'>{username}</p>
      </div>
    </div>
  )
}

export default UserInfo;
