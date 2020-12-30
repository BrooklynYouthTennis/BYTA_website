import './App.css';
import React from "react";
import { BrowserRouter as Router, Route, Switch, Link, NavLink } from "react-router-dom";

import NavBar from './Components/Global/Nav/NavBar';
import HomePage from './Components/Pages/HomePage/HomePage'
import DonatePage from './Components/Pages/DonatePage/DonateAmount';
import CheckoutPage from "./Components/Pages/CheckoutPage/Checkout"
import PageNotFound from './Components/Global/PageNotFound/PageNotFound'
import Footer from './Components/Global/Footer/Footer'



function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/donate" component={DonatePage} />
          <Route path="/donate/checkout" component={CheckoutPage} />
          <Route component={PageNotFound} />
        </Switch>
      </Router>
      <Footer />
    </>
  );
}

export default App;
