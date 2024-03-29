import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="https://patheya.tech/#">
        PatheyaTech(पाथेय)
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link" href="https://www.startechup.com/blog/software-development-technologies/">
            Technologies<span className="sr-only"></span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="https://patheya.tech/patheya-about.html">
              About
            </a>
          </li>
          <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          Services
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="https://patheya.tech/#">Software Dev</a></li>
            <li><a class="dropdown-item" href="#">Mobile App Dev</a></li>
            <li><a class="dropdown-item" href="#">Cloud & DevOps</a></li>
          </ul>
        </li>   
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;