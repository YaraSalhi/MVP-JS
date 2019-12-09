import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import AppF from "./AppF";
import * as serviceWorker from "./serviceWorker";
import App from "./App";
import album from "./album";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import NavBar from "./NavBar";
import ItemComponent from "./itemComponent";
import MediaCard from "./cardForItem";
const css = `
    .my-element {
        marginTop:100px;
        list-style-type:none
    }
`;
const routing = (
  <Router>
    <div>
      <ul class="my-element">
        <style>{css}</style>
        <li>
          <Link to="/">
            <button>Home</button>
          </Link>
        </li>
        <li>
          <Link to="/AppF">
            <button>Category</button>
          </Link>
        </li>
      </ul>
      <Route exact path="/" component={App} />
      <Route path="/AppF" component={AppF} />
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));
// ReactDOM.render(<AppF />, document.getElementById("root"));

// ReactDOM.render(<ItemComponent />, document.getElementById("root2"));
