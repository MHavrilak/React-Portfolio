import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Welcome from "./pages/index";
import About from "./pages/about";
import Portfolio from "./pages/portfolio";
import Contact from "./pages/contact";
// import NavBar from "./components/NavBar";

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Welcome} />
        <Route exact path="about" component={About} />
        <Route exact path="portfolio" component={Portfolio} />
        <Route exact path="contact" component={Contact} />
        
      </div>
    </Router>
  );
}

export default App;
