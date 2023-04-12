import React from "react";
import "./Navbar.css";

function Navbar() {
  const scrollToSection = (event, sectionId) => {
    event.preventDefault();
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="navbar">
      <ul>
        <li><a href="#home-page" onClick={(e) => scrollToSection(e, 'home-page')}>Home</a></li>
        <li><a href="#about-me" onClick={(e) => scrollToSection(e, 'about-me')}>About Me</a></li>
        <li><a href="#skills" onClick={(e) => scrollToSection(e, 'skills')}>Skills</a></li>
        <li><a href="#contact" onClick={(e) => scrollToSection(e, 'contact')}>Contact</a></li>
      </ul>
    </nav>
  );
}
export default Navbar;
