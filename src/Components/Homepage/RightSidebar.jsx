import React from 'react';

const RightSidebar = () => {
  return (
    <div className='bg-gray-900 text-white p-4 rounded-lg shadow-lg sticky top-4'>
      <h2 className="text-2xl mb-4">Right Sidebar</h2>

      {/* Sponsored Ads */}
      <h3 className="font-bold mt-4">Sponsored Ads</h3>
      <div className="bg-gray-800 p-2 rounded-lg my-2">
        <p>Upgrade to Pro for exclusive features!</p>
      </div>

      {/* Upcoming Events */}
      <h3 className="font-bold mt-4">Upcoming Events</h3>
      <ul className="space-y-2">
        <li>📅 React Summit - Oct 15, 2024</li>
        <li>📅 AI Expo - Nov 10, 2024</li>
      </ul>

      {/* User Stats */}
      <h3 className="font-bold mt-4">Your Stats</h3>
      <ul>
        <li>📝 Projects Created: 5</li>
        <li>❤️ Likes Received: 20</li>
        <li>💬 Comments Made: 15</li>
      </ul>

      {/* Trending Projects */}
      <h3 className="font-bold mt-4">Trending Projects</h3>
      <ul className="space-y-2">
        <li><a href="/projects/1" className="hover:underline">AI-Powered Chatbot</a></li>
        <li><a href="/projects/2" className="hover:underline">Web Scraper</a></li>
      </ul>

      {/* Feedback Section */}
      <h3 className="font-bold mt-4">Feedback</h3>
      <textarea className="w-full p-2 rounded-lg bg-gray-800 text-white" rows="3" placeholder="Leave your feedback..."></textarea>
      <button className="bg-cyan-600 p-2 rounded-lg mt-2 hover:bg-cyan-500 transition duration-200">Submit</button>
    </div>
  );
};

export default RightSidebar;
