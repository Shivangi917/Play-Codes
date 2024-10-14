import React, { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import axios from 'axios'; // Ensure axios is imported
import { Link } from 'react-router-dom'; // Import Link for navigation

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]); // State to hold search results
    const [isDropdownOpen, setDropdownOpen] = useState(false); // State to control dropdown visibility

    const handleSearch = async (e) => {
        e.preventDefault();
        
        try {
            const response = await axios.get(`http://localhost:3000/search?query=${searchTerm}`);
            setSearchResults(response.data); // Update state with combined results
            setDropdownOpen(true); // Open the dropdown
            console.log("Searching for:", searchTerm);
            console.log("Search results:", response.data); // Log the entire response
        } catch (error) {
            console.log("Error getting the search text: ", error);
        }
    };

    const handleResultClick = () => {
        setDropdownOpen(false); // Close dropdown on result click
    };

    return (
        <div className="relative"> {/* Positioning context for dropdown */}
            <form onSubmit={handleSearch} className='flex items-center space-x-2'>
                <input 
                    type="text" 
                    placeholder="Search..." 
                    value={searchTerm} 
                    onChange={(e) => setSearchTerm(e.target.value)} 
                    className='p-2 rounded-lg bg-gray-700 text-white focus:outline-none'
                />
                <button type="submit" className='p-2 rounded-lg bg-cyan-600 hover:bg-cyan-500 transition duration-200'>
                    <AiOutlineSearch size={20} />
                </button>
            </form>

            {/* Dropdown for search results */}
            {isDropdownOpen && (
                <div className="absolute z-10 bg-white text-black rounded-lg shadow-md mt-2 w-full max-h-60 overflow-auto">
                    <ul>
                        {searchResults.length > 0 ? (
                            searchResults.map((result, index) => (
                                <li key={index} className="p-2 hover:bg-gray-100 transition duration-200">
                                    {/* Customize result display with links */}
                                    {result.type === 'User' && (
                                        <Link to={`/users/${result.name}`} onClick={handleResultClick}>
                                            User: {result.name}
                                        </Link>
                                    )}
                                    {result.type === 'Code' && (
                                        <Link to={`/codes/${result.title}`} onClick={handleResultClick}>
                                            Code Title: {result.title} - Description: {result.description}
                                        </Link>
                                    )}
                                    {result.type === 'Project' && (
                                        <Link to={`/projects/${result.description}`} onClick={handleResultClick}>
                                            Project Description: {result.description}
                                        </Link>
                                    )}
                                </li>
                            ))
                        ) : (
                            <li className="p-2">No results found</li>
                        )}
                    </ul>
                </div>
            )}
        </div>
    );
}

export default SearchBar;
