import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from "./components/Home";
import About from "./components/About";
import Greet from "./components/Greet";
import UseRef from "./components/UseRef";
import UseEffect from "./components/UseEffect";

import "./styles.css";

export default function App() {

  return (
    
    <Router>
      <Switch>  
        
        <Route path="/" exact>
          <h1>root (App.js)</h1>
          <h3>Link to <Link to="/home">Home</Link></h3>
          <h3>Link to <Link to="/about">About</Link></h3>
          <h3>Link to <Link to="/greet">Greet</Link></h3>
          <h3>Link to <Link to="/useref">UseRef</Link></h3>
        </Route>

        <Route path="/home" component={Home} exact />
        
        <Route path="/about" component={About} exact />

        <Route path="/greet/:name/:age" component={Greet} exact />

        <Route path="/useref" component={UseRef} exact />

        <Route path="/useeffect" component={UseEffect} exact />

      </Switch>

    </Router>

  );
}

