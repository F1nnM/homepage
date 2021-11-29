import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { HashRouter as Router, } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

document.getElementById('root').style.setProperty('--vh', `${window.innerHeight / 100}px`);