import React from 'react'
import { GlobalStyle } from './styles/global'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'
import './index.css'
import Header from './components/Header'
import { Footer } from './components/Footer'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Router />
      <GlobalStyle />
      <Footer />
    </BrowserRouter>
  )
}

export default App
