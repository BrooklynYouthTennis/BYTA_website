// import logo from './logo.svg';
import './App.css';
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavBar from './Components/Global/Nav/NavBar'
import HomePage from './Pages/HomePage/HomePage'
// import Header from './Components/Header/Header'
// import Highlights from './Components/Highlights/Highlights'
// import Programs from './Components/Programs/Programs'
// import Skills from './Components/Skills/Skills'
// import Testimonials from './Components/Testimonials/Testimonials'
// import Impact from './Components/Impact/Impact'
// import Sponsorships from './Components/Sponsorships/Sponsorships'
// import Subscribe from './Components/Subscribe/Subscribe'
// import Footer from './Components/Global/Footer/Footer'

function App() {
  return (
    <>
      <NavBar />


      <BrowserRouter>
        <Switch>
          <Route path="/" component={HomePage} />
        </Switch>
      </BrowserRouter>

      {/* <Footer />  */}


    </>
  );
}

export default App;
