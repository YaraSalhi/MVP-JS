import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import AppF from "./AppF";
import * as serviceWorker from "./serviceWorker";
import $ from "jquery";
import { Provider } from "react-redux"; //to inject the global store
import { createStore } from "redux";
import reducer from "./store/reducer";

const store = createStore(reducer);

ReactDOM.render(<AppF />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

// ReactDOM.render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById("root")
// );
