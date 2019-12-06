import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import Slider from './slider/slider'
import Itempage from './itempage';

import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Itempage />, document.getElementById('Itempage'));
//ReactDOM.render(<Slider />, document.getElementById('Slider'));



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
