//import React from 'react';
import './App.css'
import Navigation from './components/Navigation';
import { LoginWrapper } from './components/LoginContext';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './routes/Home';
import Book from './routes/Book';
import About from './routes/About';
import Gallery from './routes/Gallery';
import Bookdata from './routes/Bookdata';
function App() {

  return (
    <>
      <BrowserRouter>
        <LoginWrapper>
          <Navigation />
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/about' element={<About />}/>
            <Route path='/gallery' element={<Gallery />}/>
            <Route path='/bookdata' element={<Bookdata />}/>
            <Route path='/book' element={<Book />}/>
          </Routes>

        </LoginWrapper>
      </BrowserRouter>
    </>
  )
}

export default App
