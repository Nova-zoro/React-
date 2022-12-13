import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Resturant from "./component/Basics/Resturnet"; 


const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <React.StrictMode>
    <Resturant />
  </React.StrictMode>
);

reportWebVitals();
