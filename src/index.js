import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
// import App from './App';
import Router from './Router'
import Header from './components/Header'
import Footer from './components/Footer';
import "./sass/style.scss"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

      <BrowserRouter>
          <Header />
          <Router />
          <Footer />
      </BrowserRouter>
      
  </React.StrictMode>
);