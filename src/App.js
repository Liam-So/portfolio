import React from "react";
import './App.css';
import Home from "./components/pages/Home"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route path="/" exact component={Home}/>
      </Switch>
    </Router> 
  );
}

export default App;
