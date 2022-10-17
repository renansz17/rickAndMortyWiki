import React from 'react';
import { GlobalStyle } from './styles/global';
import { BrowserRouter } from 'react-router-dom';
import { Router } from './Router';
import "./index.css"
import Header from './components/Header';

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Router />
      <GlobalStyle />
    </BrowserRouter>
  )
}

export default App
