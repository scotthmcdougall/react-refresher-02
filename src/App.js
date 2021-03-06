import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from "./components/Home";
import About from "./components/About";
import Greet from "./components/Greet";
import UseRef from "./components/UseRef";
import UseEffect from "./components/UseEffect";
import LocalStorage from "./components/LocalStorage";
import ContextAPIState from "./components/ContextAPIState";
import MaterialUI from "./components/MaterialUI";
import SemanticUI from "./components/semanticUI";
import ES6 from "./components/ES6";

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
          <h3>Link to <Link to="/useeffect">UseEffect</Link></h3>
          <h3>Link to <Link to="/localstorage">LocalStorage</Link></h3>
          <h3>Link to <Link to="/contextapistate">ContextAPIState</Link></h3>
          <h3>Link to <Link to="/materialui">MaterialUI</Link></h3>
          <h3>Link to <Link to="/semanticui">SemanticUI</Link></h3>
          <h3>Link to <Link to="/es6">ES6</Link></h3>
        </Route>

        <Route path="/home" component={Home} exact />
        
        <Route path="/about" component={About} exact />

        <Route path="/greet/:name/:age" component={Greet} exact />

        <Route path="/useref" component={UseRef} exact />

        <Route path="/useeffect" component={UseEffect} exact />

        <Route path="/localstorage" component={LocalStorage} exact />

        <Route path="/contextapistate" component={ContextAPIState} exact />

        <Route path="/materialui" component={MaterialUI} exact />

        <Route path="/semanticui" component={SemanticUI} exact />

        <Route path="/es6" component={ES6} exact />

      </Switch>

    </Router>

  );
}

