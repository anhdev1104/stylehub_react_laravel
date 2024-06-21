import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.scss';
import 'swiper/scss';
import 'swiper/scss/scrollbar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <>
      <App />
      <ToastContainer position="top-left" theme="colored" autoClose={3000} />
    </>
  </React.StrictMode>
);
