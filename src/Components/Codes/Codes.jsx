// src/Codes.jsx

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Frontend from './Frontend';
import Backend from './Backend';
import ML from './ML';

const Codes = () => {
  const [codes, setCodes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCodes = async () => {
      try {
        const response = await axios.get('http://localhost:3000/codes'); // Adjust the URL if needed
        setCodes(response.data);
      } catch (err) {
        console.error("Error fetching codes:", err);
        setError("Failed to fetch codes");
      } finally {
        setLoading(false);
      }
    };

    fetchCodes();
  }, []);

  return (
    <div>
      <h2>Frontend</h2>
      <Frontend/>
      <h2>Backend</h2>
      <Backend/>
      <h2>ML</h2>
      <ML/>

      <h2>Published Codes</h2>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <ul>
          {codes.map(code => (
            <li key={code._id}>
              <h3>{code.title}</h3>
              <p>{code.description}</p>
              <pre>{code.codeSnippet}</pre>
              <p>Published by: {} ({}) on {new Date(code.datePublished).toLocaleDateString()}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Codes;
