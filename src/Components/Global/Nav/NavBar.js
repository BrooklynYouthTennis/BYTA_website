import React from 'react'
import "./NavBar.css"
import Logo2 from '../../../Assets/NavbarImages/BYTA_Logo.png'
// import NavBarSearch from './NavBarSearch/NavBarSearch'


function NavBar() {
  return (
    <div className="navbar" >

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
          <ul>
            <li className="navbarLi"><a href="/about" >About Us</a></li>
            <div className="dropdown-content">
            </div>
          </ul>
        </div>

        <div className="dropdown" id="navbar-links">
          <ul>
            <li className="navbarLi"><a href="/Programs" >Our Programs</a></li>
          </ul>
        </div>

        <div className="dropdown" id="navbar-links">
          <ul >
            <li className="navbarLi"><a href="/getinvolved" >Get Involved</a></li>
            <div className="dropdown-content">
              <a href="/getinvolved/becomesponsor">Become a Sponsor</a>
              <a href="/UnderConstruction">Volunteer</a>
              <a href="/UnderConstruction">Donate</a>
            </div>
          </ul>
        </div>

        <div className="dropdown" id="navbar-links">
          <ul >
            <li className="navbarLi">
              <a href="/ContactUs" >Contact Us</a>
            </li>
          </ul>
        </div>
      </div>





      <ul className="navbar-button">
        <li><a href="/supportUs/donate" className="navbarButtonText" id="donateColor">Support Us</a></li>
      </ul>


      {/* <ul id="navbar-links"> */}
      {/* <NavBarSearch /> */}
      {/* <a href="/"><img src={Vector} className="vector" alt="placeHolder" /></a> */}
      {/* </ul> */}

    </div>
  );
}

export default NavBar;



