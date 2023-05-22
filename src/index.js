
import 'aos/dist/aos.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Navigation } from "./script/export";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Navigation />);

// * Web Preload
const preload = document.querySelector('#preload');//loading

window.addEventListener('load', function () {
  preload.classList.add('fade-out');
});



// * Measuring performance
reportWebVitals();