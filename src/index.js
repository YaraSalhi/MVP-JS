import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import AppF from "./AppF";
import Item from "./Item";
//import Slider from './slider/slider'
// import Itempage from "./itempage";
// // import Header from "./header";
// import Footer from "./footer";
// import Headercomponent from "./headerComponent";
// import Home from "./home";
// import Payment from "./payment";
import * as serviceWorker from "./serviceWorker";
import App from "./App";
import album from "./album";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import NavBar from "./NavBar";

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

// ReactDOM.render(<App />,document.getElementById("root2"));
