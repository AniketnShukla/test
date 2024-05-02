import React from 'react';
import axios from "axios";
import { NavLink } from 'react-router-dom';

const Navbar = ({ onAddNote }) => {

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">Note.</a>
      
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggle-icon"></span>
      </button>

      <div className="collapse navbar-collapse justify-content-between" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <NavLink exact to="/home" className="nav-link">Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink exact to="/" className="nav-link">App</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
