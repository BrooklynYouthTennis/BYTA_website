import React, { Component } from "react";
import "./NavBarSearch.css";

import Vector from "../../../../Assets/NavbarImages/Vector.jpg";
import NavBarSearchWindow from "./NavBarSearchWindow";


export default class NavBarSearch extends Component {

  constructor() {
    super();
    this.state = {
      showText: 'false'
    };
  }

  handleShowSearchBar = (event) => {
    this.setState((state) => ({
      showText: !state.showText
    }))
  }

  handleSearchResults = (event) => {
    // The searching would happen here
    // Logic needs to be written
    // Likely would need to see the backend potion to determine how to make that call
  }

  handleSearchTextChange = (event) => {
    console.log("Test")
    this.setState({ searchInput: event.target.value })
    console.log(this.state.searchInput)

  }

  render() {
    return (
      <div className="container">
        <img
          src={Vector}
          alt="a magnifying glass icon"
          className="button"
          onClick={this.handleShowSearchBar}
          style={{ position: 'relative', bottom: '5%' }} />
        {/* {this.state.showText ?
          null :
         
          <NavBarSearchWindow searchTextHandler={this.handleSearchTextChange} />
        } */}
      </div>
    )
  }
}
