import React from "react";
import HeroImg from "../../Assets/city_tennis_hero.png";
import "./Header.css";

function Header(props) {
  return (
    <div className="hero-container">
      <img className="hero-image" src={HeroImg} alt="BYTA"></img>

      <div className="hero-text-block">
        <h2 className="heroTitle">The motto</h2>
        <div className="heroSlogan_block">
          <div className="heroSlogan">
            Talk with your racquet, play with your heart.
        </div>
        </div>

      </div>
    </div>
  );
}

export default Header;
