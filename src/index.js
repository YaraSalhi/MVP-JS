import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
// import Header from "./header";
import Footer from "./footer";
import Headercomponent from "./headerComponent";
import Home from "./home";
import Payment from "./payment";
// ReactDOM.render(<App />, document.getElementById("root"));

ReactDOM.render(
  <Headercomponent />,
  document.getElementById("headerComponent")
);
ReactDOM.render(<Payment />, document.getElementById("paymant"));
ReactDOM.render(<Home />, document.getElementById("home"));
ReactDOM.render(<Footer />, document.getElementById("footer"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
