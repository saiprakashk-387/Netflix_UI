import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import Routing from './Routes/Routing';
import store from './Redux/Store';
import { Provider } from "react-redux";
import { ToastContainer } from 'react-toastify';
 
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <Provider store={store}>
    <ToastContainer />
      <Routing />
    </Provider>
  </BrowserRouter>
);

