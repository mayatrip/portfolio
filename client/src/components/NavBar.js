import React from 'react';
import "./NavBar.css";

export default function NavBar() {
  return (
    <nav className="NavBar">
        <a href="#Home">Home</a>
        <a href="#About">About</a>
        <a href="#Resume">Resume</a>
        <a href="#Projects">Projects</a>
        <a href="#Contact">Contact Me</a>
    </nav>
  )
}
