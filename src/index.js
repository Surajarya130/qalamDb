import React from 'react';
import ReactDOM from 'react-dom';
import './assets/style.css';
import './assets/responsive.css'
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <Router>
    <App />
  </Router>
  ,
  document.getElementById('root')
);


reportWebVitals();
