import './App.css';
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import NavBar from './Components/Global/Nav/NavBar';
import HomePage from './Pages/HomePage/HomePage';
import DonatePage from './Pages/DonatePage/DonatePage';
import PageNotFound from './Components/Global/PageNotFound/PageNotFound'

// import Footer from './Components/Global/Footer/Footer'

// const [values, setValues] = useState({
//   firstName: '',
//   lastName: '',
//   email: '',
// });

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/donate" component={DonatePage} />
          <Route component={PageNotFound} />

        </Switch>
      </Router>
      {/* <Footer />  */}
    </>
  );
}

export default App;
