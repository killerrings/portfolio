import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar, Footer } from "./components";
import Home from "./pages/Homepage/Home.js";
import Services from "./pages/Services/Services";
import Work from "./pages/Work/Work";
import Contact from "./pages/Contact/Contact";
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
        <Route path="/work" exact component={Work} />
        <Route path="/contact" exact component={Contact} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
