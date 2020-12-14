import React, { Component } from 'react';
import './NavBarSearchWindow.css';
import Vector from "../../../../Assets/NavbarImages/searchIcon.png";


export default class NavBarSearchWindow extends Component {

  constructor() {
    super();
    this.state = {
      searchInput: ''
    };
  }

  render() {
    return (
      <div className="searchwindow"
        alt="purple background"
        style={{
          position: 'fixed',
          top: '89px',
          left: '0px',
          backgroundColor: '#3a3748',
          display: 'flex',
          height: '75px',
          width: '100%'
        }}>

        <div className="searchContainer">
          <div className="iconContainer">
            <img className="searchIcon" src={Vector} alt="a magnifying glass icon" />
          </div>
          <input className="searchBox" type="search" name="search" placeholder="Search..." value={this.state.value} onChange={this.props.searchTextHandler} />
          <button type="submit" value="Search" className="searchButton" onClick={this.handleSubmit}>Search</button>
        </div>
      </div>


    )
  }
}