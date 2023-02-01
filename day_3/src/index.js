import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {HeaderNav , BodyClass } from './App'
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HeaderNav />
    <BodyClass />
  </React.StrictMode>
);


reportWebVitals();
