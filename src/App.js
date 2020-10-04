import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";

function App() {

  return (
    <Router>
      <Redirect to="/" />
      <div>
        <Navbar />
        <Route exact path="/" component={About} />
        <Route exact path="/about" component={About} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/contact" component={Contact} />
      </div>
    </Router>
  );
}

export default App;