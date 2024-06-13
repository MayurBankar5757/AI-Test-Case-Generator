import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-content">
          <a className="navbar-brand" href="/">Automated generation Test Case</a>
          <ul className="nav-links ">
            <li><a href="/signup">Signup</a></li>
            <li><a href="/">Login</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
