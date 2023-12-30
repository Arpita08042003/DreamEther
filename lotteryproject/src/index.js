import React from 'react';
import { BrowserRouter} from "react-router-dom";
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { AppProvider } from './context/provider';
import Header from './components/Header';
import Footer from './components/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppProvider>
      <Header/>
      <BrowserRouter>

          <App />
         
      </BrowserRouter>
      <Footer/>
    </AppProvider>
  </React.StrictMode>
);


 
