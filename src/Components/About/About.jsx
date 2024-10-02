import React from 'react';
import myImage from '../images/my_image.jpg';

const About = () => {
  return (
    <div className="bg-black text-white min-h-screen flex items-center justify-center">
      <div className="flex max-w-4xl h-60"> {/* Set height for both the image and text */}
        {/* Transparent Box with Description */}
        <div className="bg-white bg-opacity-10 text-left p-6 rounded-lg shadow-lg border border-gray-600 backdrop-blur-sm flex-1 flex items-center">
          <div>
            <h1 className="text-2xl font-semibold mb-4">About Me</h1>
            <p className="text-lg">
              I hope you are liking this website.
              I am Shivangi Shree, now in my 3rd year in the CSE department. I know that you 
              are reading this in the future, so by now, I guess I am a software engineer in Bangalore. If you ever feel discouraged while coding I would advice it's never too late. Power on your computer and know one thing there are many people who are still coding even getting rejected too many times. Believe in consistency and hardwork. 
            </p>
          </div>
        </div>

        {/* Image on the Right */}
        <div className="flex-shrink-0">
          <img 
            src={myImage}
            alt="Shivangi Shree" 
            className="w-48 h-60 border-2 border-cyan-400 shadow-lg hover:shadow-cyan-400 transition-all duration-300"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
