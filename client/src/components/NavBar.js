import React from 'react';
import { Link } from "react-router-dom";
import "./NavBar.css";

export default function NavBar() {
  return (
    <nav className="NavBar">
        <Link to="/">
          <p>Home</p>
        </Link>
        <Link to="/about">
          <p>About</p>
        </Link>
        <Link to="/resume">
          <p>Resume</p>
        </Link>
        <Link to="/projects">
          <p>Projects</p>
        </Link>
        <Link to="/contact-me">
          <p>Contact Me</p>
        </Link>
    </nav>
  )
}
