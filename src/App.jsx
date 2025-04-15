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
    const token = localStorage.getItem('token');
  
    if (token) {
      fetch('http://localhost:3000/auth/user', { 
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`
        },
        credentials: 'include'
      })
      .then(response => {
        if (!response.ok) throw new Error("User not authenticated");
        return response.json();
      })
      .then(data => {
        setIsLoggedIn(true);
        setUsername(data.name);
        setUseremail(data.email);
      })
      .catch(() => {
        setIsLoggedIn(false);
      });
    } else {
      setIsLoggedIn(false);
    }
  }, []);  
  

  const handleLogout = async () => {
    try {
      const response = await axios.post('http://localhost:3000/api/auth/logout');
      console.log(response);
      setIsLoggedIn(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Router basename='/Play-Codes'>
      <Navbar isLoggedIn={isLoggedIn} username={username} handleLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Homepage isLoggedIn={isLoggedIn}/>} />
        <Route path="/codes" element={<Codes isLoggedIn={isLoggedIn} />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} setUsername={setUsername} setUserEmail={setUseremail} />} />
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
