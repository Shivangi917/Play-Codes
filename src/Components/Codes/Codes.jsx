import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Codes = () => {
  const [codes, setCodes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCodes = async () => {
      try {
        const response = await axios.get('http://localhost:3000/codes'); // Fetch codes from backend
        console.log(response.data); // Log fetched data to inspect structure
        setCodes(response.data); // Set the fetched codes to state
      } catch (err) {
        setError("Error fetching codes"); // Handle error
        console.error(err);
      } finally {
        setLoading(false); // Set loading to false
      }
    };

    fetchCodes(); // Call the fetch function
  }, []);

  if (loading) {
    return <div>Loading...</div>; // Show loading message
  }

  if (error) {
    return <div>{error}</div>; // Show error message
  }

  return (
    <div>
      <h1>Code Snippets</h1>
      {codes.length === 0 ? (
        <p>No codes available.</p>
      ) : (
        codes.map((code) => (
          <div key={code._id} className="code-card">
            <h2>{code.title}</h2>
            <p><strong>Description:</strong> {code.description}</p>
            <pre><code>{code.codeSnippet}</code></pre>
            {/* Safeguard against undefined user */}
            <p><strong>Posted by:</strong> {code.user ? code.user.name : "Unknown User"}</p>
            <p><strong>Date Published:</strong> {new Date(code.datePublished).toLocaleDateString()}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default Codes;
