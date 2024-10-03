import React from 'react';
import myimage from '../images/my_image.jpg';
import {AiFillInstagram, AiFillTwitterSquare, AiFillGithub, AiFillLinkedin} from 'react-icons/ai';

const About = () => {
  return (
    <div className='bg-black text-white min-h-screen '>
        {/*Funny thing about the programmer*/}
        <div>
          <h1 className='text-6xl text-center mb-10 pt-10 text-cyan-500'>About us</h1>
        </div>
        <div className='border-2 border-cyan-200 shadow-lg hover:shadow-cyan-400 transition-all duration-300 p-10 flex justify-center mx-56 text-xl'>
          <p className='w-3/4 m-10 '>
            <p className='font-bold text-2xl text-cyan-300'>About Me</p>
            I hope you are liking this website.
            I am Shivangi Shree, now in my 3rd year in the CSE department. I know that you 
            are reading this in the future, so by now, I guess I am a software engineer in Bangalore. If you ever feel discouraged while coding I would advice it's never too late. Power on your computer and know one thing there are many people who are still coding even getting rejected too many times. Believe in consistency and hardwork. 
          </p>
          <img src={myimage} alt="Shivangi Shree" className='w-52 h-52 border-2 border-cyan-200 shadow-lg hover:shadow-cyan-400 transition-all duration-300 rounded-full'/>
        </div>
        {/*How it will help you and interest you*/}
        <div>
          <h1 className='text-4xl mb-10 pt-10 text-center text-cyan-500'>
            Features
          </h1>
        </div>
        <div className='flex justify-between mx-10'>
          <div className='border-2 border-cyan-200 shadow-lg hover:shadow-cyan-400 transition-all duration-300 p-5 rounded-lg m-5'>
            <h1 className='font-bold text-xl text-cyan-200'>Project Showcasing</h1>
            <p>Users can post their coding projects, share them with the community, and receive feedback. It's a space where developers can showcase their skills and creativity through their work.</p>
          </div>
          <div className='border-2 border-cyan-200 shadow-lg hover:shadow-cyan-400 transition-all duration-300 p-5 rounded-lg m-5'>
            <h1 className='font-bold text-xl text-cyan-200'>Interactive Code Postcards</h1>
            <p>The platform offers a unique way to learn code by displaying code snippets in "postcards." These interactive postcards allow users to easily explore the logic behind various code samples.</p>
          </div>
          <div className='border-2 border-cyan-200 shadow-lg hover:shadow-cyan-400 transition-all duration-300 p-5 rounded-lg m-5'>
            <h1 className='font-bold text-xl text-cyan-200'>Recruiter Connections</h1>
            <p>Play Code allows recruiters to browse through user profiles and projects, enabling direct connections with developers. It acts as a bridge between job seekers and potential employers.</p>
          </div>
          <div className='border-2 border-cyan-200 shadow-lg hover:shadow-cyan-400 transition-all duration-300 p-5 rounded-lg m-5'>
            <h1 className='font-bold text-xl text-cyan-200'>Collaborative Learning Community</h1>
            <p>Users can collaborate, discuss coding challenges, and help each other improve by participating in forums and discussions, fostering a social and interactive coding environment.</p>
          </div>
        </div>
        {/*How this website has grown over these years -- counter view*/}
        <div>
          
        </div>
        {/*Some question and answer*/}
        {/*My github, instagram, twitter, linkedin profile*/}
        <div className='mt-10 flex flex-row space-x-10 text-4xl justify-center items-center bg-white/10 backdrop-blur-md rounded-lg p-5 mx-auto w-1/2 shadow-lg border-2 border-cyan-200 shadow-lg hover:shadow-cyan-400 transition-all duration-300'>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <AiFillInstagram className='bg-slte-200 box-content px-3 py-2 rounded-lg shadow-lg shadow-black/30 cursor-pointer hover:shadow-inner hover:shadow-black/30 duration-300 hover:text-cyan-500'/>
          </a>
          <a href="https://github.com/Shivangi917" target="_blank" rel="noopener noreferrer">
            <AiFillGithub className='bg-slte-200 box-content px-3 py-2 rounded-lg shadow-lg shadow-black/30 cursor-pointer hover:shadow-inner hover:shadow-black/30 duration-300 hover:text-cyan-500'/>
          </a>
          <a href="https://www.linkedin.com/in/shivangi-shree-514348258/" target="_blank" rel="noopener noreferrer">
            <AiFillLinkedin className='bg-slte-200 box-content px-3 py-2 rounded-lg shadow-lg shadow-black/30 cursor-pointer hover:shadow-inner hover:shadow-black/30 duration-300 hover:text-cyan-500'/>
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <AiFillTwitterSquare className='bg-slte-200 box-content px-3 py-2 rounded-lg shadow-lg shadow-black/30 cursor-pointer hover:shadow-inner hover:shadow-black/30 duration-300 hover:text-cyan-500'/>
          </a>
        </div>
    </div>
  )
}

export default About;