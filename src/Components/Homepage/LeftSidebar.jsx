import React from 'react';

const LeftSidebar = () => {
  return (
    <div className='bg-gray-900 text-white p-4 shadow-lg rounded-lg h-screen'>
      <h2 className="text-2xl font-bold mb-4 border-b-2 border-cyan-600 pb-2">Dashboard</h2>
      
      <div className='mb-8'>
        <h3 className="text-lg font-semibold mb-2">Recent Activities</h3>
        <ul className='space-y-2'>
          <li className='bg-gray-800 p-2 rounded-md hover:bg-gray-700 transition duration-200'>
            <p>📝 Added a new project: <strong>AI Chatbot</strong></p>
          </li>
          <li className='bg-gray-800 p-2 rounded-md hover:bg-gray-700 transition duration-200'>
            <p>❤️ Liked a project: <strong>Web Scraper</strong></p>
          </li>
          <li className='bg-gray-800 p-2 rounded-md hover:bg-gray-700 transition duration-200'>
            <p>💬 Commented on: <strong>Data Visualization Tool</strong></p>
          </li>
        </ul>
      </div>

      <div className='mb-8'>
        <h3 className="text-lg font-semibold mb-2">ML Suggestions</h3>
        <ul className='space-y-2'>
          <li className='bg-gray-800 p-2 rounded-md hover:bg-gray-700 transition duration-200'>
            <p>📈 Consider using <strong>Random Forest</strong> for better predictions.</p>
          </li>
          <li className='bg-gray-800 p-2 rounded-md hover:bg-gray-700 transition duration-200'>
            <p>🤖 Add <strong>hyperparameter tuning</strong> to improve model accuracy.</p>
          </li>
        </ul>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-2">Recommended Documentaries</h3>
        <ul className='space-y-2'>
          <li className='bg-gray-800 p-2 rounded-md hover:bg-gray-700 transition duration-200'>
            <a href="#" className="hover:underline">The Age of AI</a>
          </li>
          <li className='bg-gray-800 p-2 rounded-md hover:bg-gray-700 transition duration-200'>
            <a href="#" className="hover:underline">Inside Bill's Brain</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default LeftSidebar;