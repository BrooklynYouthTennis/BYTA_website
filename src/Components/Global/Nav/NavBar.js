import React from 'react'
import "./NavBar.css"
import NavBarSearch from './NavBarSearch/NavBarSearch'
import Vector from '../../../Assets/NavbarImages/Vector.jpg'
import Logo2 from '../../../Assets/NavbarImages/BYTA_Logo.png'


function NavBar() {
  return (
    <div className="navbar" >
      {/* <a href="/"><img src={Logo} className="brand-title" alt="byta" /></a> */}
      <a href="/"><img src={Logo2} className="brand-title" alt="byta" /></a>
      <a href="/" className="toggle-button">
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </a>

      <div className="dropdown" id="navbar-links">
        <ul>
          <li className="navbarLi"><a href="/about" className="navbarText">About Us</a></li>
          <div className="dropdown-content">
          </div>
        </ul>
      </div>

      <div className="dropdown" id="navbar-links">
        <ul>
          <li className="navbarLi"><a href="/Programs" className="navbarText">Our Programs</a></li>
        </ul>
      </div>


      <div className="dropdown" id="navbar-links">
        <ul id="navbar-links">
          <li className="navbarLi"><a href="/getinvolved" className="navbarText">Get Involved</a></li>
          <div className="dropdown-content">
            <a href="/getinvolved/becomesponsor">Become a Sponsor</a>
            <a href="/UnderConstruction">Volunteer</a>
            <a href="/UnderConstruction">Donate</a>
          </div>
        </ul>
      </div>

      <ul id="navbar-links">
        <li className="navbarLi">
          <a href="/ContactUs" className="navbarText">Contact Us</a>
        </li>
      </ul>

      <ul id="navbar-links">
        <li><a href="/supportUs/donate" className="navbarText" id="donateColor">Donate</a></li>
      </ul>

      <ul id="navbar-links">
        <NavBarSearch />
        {/* <a href="/"><img src={Vector} className="vector" alt="placeHolder" /></a> */}
      </ul>

    </div>
  );
}

export default NavBar;



