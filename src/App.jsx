//import React from 'react';
import './App.css'
import Navigation from './components/Navigation';
import { LoginWrapper } from './components/LoginContext';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
function App() {

  return (
    <>
      <BrowserRouter>
        <LoginWrapper>
          <Navigation />
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/about' element={<About />}/>
          </Routes>

        </LoginWrapper>
      </BrowserRouter>
    </>
  )
}

export default App
