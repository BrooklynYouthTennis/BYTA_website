import React from 'react'
import Logo2 from '../../../Assets/NavbarImages/BYTA_Logo.png'
import Logo from '../../../Assets/NavbarImages/bytalogo.png'
import { BrowserRouter as Router, Route, Switch, Link, NavLink } from "react-router-dom";
import "./NavBar.css"


function NavBar() {
  return (
    <div className="navbar" >

      <NavLink to="/donate" activeClassName='is-active' >donate here</NavLink>
      <div className="navbar_logo">
        <a href="/"><img src={Logo2} className="brand-title" alt="byta" /></a>
      </div>

      <a href="/" className="toggle-button">
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </a>

      <div className="navbar_menu_options">
        <div className="dropdown" id="navbar-links">
          {/* <ul> */}
          <div className="navbarLi"><a href="/about" >About Us</a></div>
          <div className="dropdown-content">
          </div>
          {/* </ul> */}
        </div>

        <div className="dropdown" id="navbar-links">

          <div className="navbarLi"><a href="/Programs" >Our Programs</a></div>

        </div>

        <div className="dropdown" id="navbar-links">

          <div className="navbarLi"><a href="/getinvolved" >Get Involved</a></div>
          <div className="dropdown-content">
            <a href="/getinvolved/becomesponsor">Become a Sponsor</a>
            <a href="/getinvolved/volunteer">Volunteer</a>
            <a href="/donate">Donate</a>
          </div>

        </div>

        <div className="dropdown" id="navbar-links">

          <div className="navbarLi">
            <a href="/contactus" >Contact Us</a>
          </div>

        </div>
      </div>

      <a href="/donate" className="navbar-button" id="donateColor">Support Us</a>


    </div>
  );
}

export default NavBar;



