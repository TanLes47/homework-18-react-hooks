import "./App.css";
import React from "react";
//import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import { Router, Route, Switch } from "react-router";
//import Hw16 from "./hw16/Hw16";
//import Hw17 from "./hw17/Hw17";
//import Hw20 from "./hw20/Hw20";

function App() {
  return (
    <>
      <nav>
        <Link className="mainLink" to="/">
          Home
        </Link>
        <Link className="mainLink" to="./homework-17">
          Intro to React
        </Link>
        <Link className="mainLink" to="/hw17">
          React Hooks
        </Link>
        <Link className="mainLink" to="/hw20">
        React Router
        </Link>
      </nav>
      <Switch>
        <Route exact path="/hw16">
          <Hw16 />
        </Route>
        <Route path="/hw17">
          <Hw17 />
        </Route>
        <Route path="/hw20">
          <Hw20 />
        </Route>
      </Switch>
    </>
  );
}

export default App;