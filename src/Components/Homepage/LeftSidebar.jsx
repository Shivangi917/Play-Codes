import React from 'react';

const LeftSidebar = () => {
  return (
    <div className='w-1/5 bg-gray-800 text-white p-4'>
      {/* Sidebar content goes here */}
      <h2 className="text-2xl mb-4">Left Sidebar</h2>
      <ul>
        <li>Option 1</li>
        <li>Option 2</li>
        <li>Option 3</li>
      </ul>
    </div>
  );
}

export default LeftSidebar;
