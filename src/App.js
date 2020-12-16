// import logo from './logo.svg';
// import './App.css';
import React from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from './Components/Global/Nav/NavBar'
import Header from './Components/Header/Header'


function App() {
  return (
    <>
      <NavBar />
      <Header />
    </>
  );
}

export default App;
