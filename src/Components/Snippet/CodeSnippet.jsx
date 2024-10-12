import React from 'react';
import { useLocation } from 'react-router-dom';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { coy } from 'react-syntax-highlighter/dist/esm/styles/prism';  // You can use different styles like 'coy', 'dark', etc.

const CodeSnippet = () => {
    const location = useLocation();
    const { codeSnippet } = location.state || {};

    return (
        <div>
            <h1>Code Snippet</h1>
            {codeSnippet ? (
                <div className='bg-gray-100 mx-96 px-6 py-4'>
                    {codeSnippet}
                </div>
            ) : (
                <p>No code snippet provided.</p>
            )}
        </div>
    );
};

export default CodeSnippet;
