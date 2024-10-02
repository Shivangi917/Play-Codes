import React from 'react';
import { createRoot } from 'react-dom/client'; // Correct import from react-dom/client
import './index.css'; // Import Tailwind's base styles
import App from './App';

const root = createRoot(document.getElementById('root')); // Create root using createRoot
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
