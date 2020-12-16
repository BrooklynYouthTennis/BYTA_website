import React from "react";
import HeroImg from "../../Assets/city_tennis_hero.png";
import "./Header.css";

function Header(props) {
  return (
    <div className="hero-container">
      <div className="hero-text-block">
        <h2 className="heroTitle">The motto</h2>
        <div className="heroSlogan">
          Talk with your racquet, play with your heart.
        </div>
      </div>
    </div>
  );
}

export default Header;
