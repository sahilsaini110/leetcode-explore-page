import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <a href="/"><b>LeetCode</b></a>
      </div>
      <ul className="nav-links">
        <li>
          <a href="/explore">Explore</a>
        </li>
        <li>
          <a href="/problems">Problems</a>
        </li>
        <li>
          <a href="/premium">Premium</a>
        </li>
      </ul>
      <div className="user-profile">
        <a href="/profile">Username</a>
      </div>
    </nav>
  );
};

export default Navbar;
