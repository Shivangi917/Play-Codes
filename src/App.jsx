import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Homepage from './Components/Homepage/Homepage';
import Codes from './Components/Codes/Codes';
import About from './Components/About/About';
import Login from './Components/Login/Login';
import SignUp from './Components/SignUp/SignUp';
import Profile from './Components/Profile/Profile';
import PostCode from './Components/Post/PostCode';
import CodeSnippet from './Components/Snippet/CodeSnippet';
import PostProject from './Components/Post/PostProject';
import Post from './Components/Homepage/Post';
import axios from 'axios';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [useremail, setUseremail] = useState('');

  useEffect(() => {
    // Check localStorage for token, username, and useremail on reload
    const token = localStorage.getItem('token');
    const storedUsername = localStorage.getItem('username');
    const storedUseremail = localStorage.getItem('useremail');
    
    if (token && storedUsername && storedUseremail) {
      // If the token and user details are in localStorage, the user is logged in
      setIsLoggedIn(true);
      setUsername(storedUsername);
      setUseremail(storedUseremail);
    } else {
      setIsLoggedIn(false);  // User is not logged in
    }

    // Fetch user data from the server if token exists
    if (token) {
      fetch('http://localhost:3000/api/auth/user', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      })
      .then(response => response.json())
      .then(data => {
        if (data && data.name) {
          setIsLoggedIn(true);
          setUsername(data.name);
          setUseremail(data.email);
          // Store the user info in localStorage for future use
          localStorage.setItem('username', data.name);
          localStorage.setItem('useremail', data.email);
        } else {
          setIsLoggedIn(false);  // Token may be invalid, user needs to log in again
        }
      })
      .catch(() => {
        setIsLoggedIn(false);  // Handle case where the API request fails
      });
    }

  }, []); // Empty dependency array ensures this runs only once after the first render

  const handleLogout = async () => {
    try {
      const response = await axios.post('http://localhost:3000/api/auth/logout');
      console.log(response);
      // Clear localStorage and log the user out
      localStorage.removeItem('token');
      localStorage.removeItem('username');
      localStorage.removeItem('useremail');
      setIsLoggedIn(false);
      setUsername('');
      setUseremail('');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Router basename='/Play-Codes'>
      <Navbar isLoggedIn={isLoggedIn} username={username} handleLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Homepage isLoggedIn={isLoggedIn} useremail={useremail}/>} />
        <Route path="/codes" element={<Codes isLoggedIn={isLoggedIn} />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} setUsername={setUsername} setUserEmail={setUseremail} />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/users/:username" element={<Profile loggedInUsername={username} isLoggedIn={isLoggedIn} useremail={useremail} />} />
        <Route path="/postcode" element={<PostCode useremail={useremail} />} />
        <Route path="/codes/codeSnippet" element={<CodeSnippet />} /> 
        <Route path="/users/:username/codeSnippet" element={<CodeSnippet />} />
        <Route path="/postproject" element={<PostProject useremail={useremail} />} />
        <Route path="/post" element={<Post useremail={useremail} />} />
      </Routes>
    </Router>
  );
}

export default App;
