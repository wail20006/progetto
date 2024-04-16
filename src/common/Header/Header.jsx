//rafce
import React from "react";
import { Link } from 'react-router-dom';
import logo from "../../logo.svg";
import './Header.css'

const Header = () => {
  return (
    <header className="header">
      <div className="wrapper">
        
        <img src="https://www.creativefabrica.com/wp-content/uploads/2022/04/17/Pizza-Logo-Design-Graphics-29132095-1.jpg" alt="" />
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
