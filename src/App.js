import './App.css';
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ThemeProvider } from '@material-ui/styles';
import theme from './constants/theme';
import NavBar from './Components/Global/Nav/NavBar';
import HomePage from './Components/Pages/HomePage/HomePage'
import DonatePage from './Components/Pages/DonatePage/DonateAmount';
import PageNotFound from './Components/Global/PageNotFound/PageNotFound'
import Footer from './Components/Global/Footer/Footer'
import Header from './Components/Pages/Header'
import Footer2 from './Components/Pages/Footer'
import Main from './Components/Pages/Main'
import Stepper from './Components/Pages/Stepper'
import { StateProvider } from './stateContext/';


const App = () => {
  return (
    // <StateProvider>
    <ThemeProvider theme={theme}>
      {/* <Header /> */}
      <Stepper />
      {/* <Main />
        <Footer2 /> */}
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/donate" component={DonatePage} />
          <Route component={PageNotFound} />
        </Switch>
      </Router>
      <Footer />
    </ThemeProvider>
    // </StateProvider>
  );
}

export default App;
