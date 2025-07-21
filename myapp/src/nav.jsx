import React from 'react';
import { Link } from 'react-router-dom'; // ✅ import Link

const Nav = () => {
  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/footer">Skills</Link>
      <Link to="/header">Projects</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  );
};

export default Nav;
