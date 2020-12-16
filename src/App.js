// import logo from './logo.svg';
import './App.css';
import React from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from './Components/Global/Nav/NavBar'
import Header from './Components/Header/Header'
import Highlights from './Components/Highlights/Highlights'


function App() {
  return (
    <>
      <NavBar />
      <Header />
      <Highlights />
    </>
  );
}

export default App;
