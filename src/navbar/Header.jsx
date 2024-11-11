import React from 'react';
import '../navbar/Header.css';
import { RxAvatar } from "react-icons/rx";

export const Header = () => {
  return (
    <div>
      <nav className="navbar">
        <img src="./images/logo.png" className="brand-logo" alt="disney+ logo" />
        <ul className="nav-links">
          <li className="nav-items"><a href="/">Home</a></li>
          <li className="nav-items"><a href="#">Movie</a></li>
          <li className="nav-items"><a href="#">Sports</a></li>
          <li className="nav-items"><a href="#">Premium</a></li>
        </ul>

        <div className="right-container">
          <input type="text" className="search-box" placeholder="search" />
          <button className="Subscribe">Search</button>
          <a href="#" className="login-btn">
            <RxAvatar className="avatar-icon" />
            <span className="login-text">Login</span>
          </a>
        </div>
      </nav>
    </div>
  );
};
