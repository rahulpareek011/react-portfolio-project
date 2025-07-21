import { useState } from 'react'
import Nav from './nav'
import Home from './Home'
import './index.css'
import About from './About'
import Skills from './Footer'
import Projects from './header'
import Contact from './Contact'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>

          <Route path='/' element={<>
            <Nav />
            <Home />
          </>} />

          <Route path='/about' element={<>
            <Nav />
            <About />
          </>} />

          <Route path='/footer' element={
            <>
              <Nav />
              <Skills />
            </>
          } />

          <Route path='/header' element={
            <>
              <Nav />
              <Projects />
            </>
          } />

          <Route path='/contact' element={
            <>
              <Nav />
              <Contact />
            </>
          } />
          
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
