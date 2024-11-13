import React, { useState } from 'react';
import '../navbar/Header.css';
import { RxAvatar } from "react-icons/rx";

export const Header = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    onSearch(searchTerm);  
  };

  return (
    <div>
      <nav className="navbar">
        <img src="./logo.png" className="brand-logo" alt="logo" />
        <ul className="nav-links">
          <li className="nav-items"><a href="/">Home</a></li>
          <li className="nav-items"><a href="/moviescard">Movie</a></li>
          <li className="nav-items"><a href="/sports">Sports</a></li>
        </ul>

        <div className="right-container">
          <input
            type="text"
            className="search-box"
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}  
            onKeyDown={(e) => e.key === 'Enter' && handleSearch()}  
          />
          <button className="search" onClick={handleSearch}>Search</button>
          <a href="#" className="login-btn">
            <RxAvatar className="avatar-icon" />
            <span className="login-text">Login</span>
          </a>
        </div>
      </nav>
    </div>
  );
};
