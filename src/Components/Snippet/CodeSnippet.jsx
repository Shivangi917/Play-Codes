import React from 'react';
import { useLocation } from 'react-router-dom';
import { AiOutlineCopy } from 'react-icons/ai';

const CodeSnippet = () => {
    const location = useLocation();
    const { codeSnippet } = location.state || {};

    const copyToClipboard = () => {
        if (codeSnippet) {
            navigator.clipboard.writeText(codeSnippet)
                .then(() => {
                    alert('Code copied to clipboard!');
                })
                .catch((err) => {
                    console.error('Failed to copy: ', err);
                });
        }
    };

    return (
        <div className='bg-gray-900 text-white min-h-screen flex flex-col items-center'>
            <h1 className='text-6xl mb-10 pt-10 text-cyan-500'>Code Snippet</h1>
            {codeSnippet ? (
                <div className='w-3/4 mx-10'>
                    <pre className='bg-gray-800 border-2 border-cyan-200 shadow-lg pb-6 px-6 rounded-lg'>
                        <button
                            onClick={copyToClipboard}
                            className='mb-4 bg-cyan-500 text-white px-4 py-2 hover:bg-cyan-400 transition duration-200'
                        >
                            <AiOutlineCopy className="" />
                        </button>
                        <br />
                        <code className='text-white'>{codeSnippet}</code>
                    </pre>
                </div>
            ) : (
                <p className='text-cyan-300'>No code snippet provided.</p>
            )}
        </div>
    );
};

export default CodeSnippet;
