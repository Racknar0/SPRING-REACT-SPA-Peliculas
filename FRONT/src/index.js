import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

/* impotart boostrap */
import 'bootstrap/dist/css/bootstrap.min.css';
import  'bootstrap/dist/js/bootstrap.bundle.min';
import  'bootstrap/dist/js/bootstrap.js';
import  'bootstrap/js/dist/util';
import  'bootstrap/js/dist/dropdown';
import  'bootstrap/js/dist/collapse';
import  'bootstrap/js/dist/modal';
import  'bootstrap/js/dist/alert';
import  'bootstrap/js/dist/button';
import  'bootstrap/js/dist/carousel';
import  'bootstrap/js/dist/scrollspy';
import  'bootstrap/js/dist/tab';
import  'bootstrap/js/dist/tooltip';
import  'bootstrap/js/dist/popover';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
