// App.jsx
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

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [useremail, setUseremail] = useState('');

  useEffect(() => {
    try {
      const storedUser = localStorage.getItem('user');
      if (storedUser) {
        const parsedUser = JSON.parse(storedUser);
        if (parsedUser.name) {
          setIsLoggedIn(true);
          setUsername(parsedUser.name);
          setUseremail(parsedUser.email);
        }
      }
    } catch (error) {
      console.error("Error parsing user data:", error);
      localStorage.removeItem('user'); // Remove corrupted data
    }
  }, []);
  

  const handleLogout = () => {
    localStorage.removeItem('user');
    setIsLoggedIn(false);
    setUsername('');
    console.log("You are logged out");
  };

  return (
    <Router basename='/Play-Codes'>
      <Navbar isLoggedIn={isLoggedIn} username={username} handleLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/codes" element={<Codes />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} setUsername={setUsername} />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/users/:username" element={<Profile loggedInUsername={username} />} /> {/* Pass loggedInUsername */}
        <Route path="/postcode" element={<PostCode useremail={useremail} />} />
        <Route path="/codes/codeSnippet" element={<CodeSnippet />} /> 
        <Route path="/postproject" element={<PostProject useremail={useremail} />} />
        <Route path="/post" element={<Post useremail={useremail} />} />
      </Routes>
    </Router>
  );
}

export default App;
