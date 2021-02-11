import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar, Footer, Subscription } from "./components";
import Home from "./pages/Homepage/Home.js";
import Services from "./pages/Services/Services";
import Contact from "./pages/Contact/Contact";
import SignUp from "./pages/SignUp/SignUp";
import GlobalStyle from "./globalStyes";
import ScrollTop from "./components/ScrollTop";

const App = () => {
  return (
    <Router>
      <GlobalStyle />
      <ScrollTop />
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/services" exact component={Services} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/sign-up" exact component={SignUp} />
      </Switch>
      <Subscription />
      <Footer />
    </Router>
  );
};

export default App;
