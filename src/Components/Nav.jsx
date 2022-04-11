import React from "react";

export default function Nav() {
  return (
    <nav className="navbar">
      <div className="nav-links-container">
        <a className="nav-links" href="#homepage">
          <h3>Home</h3>
        </a>
        <a className="nav-links" href="#project-anchor">
          <h3>Projects</h3>
        </a>
        <a className="nav-links" href="#contact">
          <h3>Contact</h3>
        </a>
      </div>
    </nav>
  );
}
