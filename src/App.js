import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { FlipNavWrapper } from './Components/NavBar/Navbar';
import { Hero } from './Components/Hero/Hero'
import { Footer } from './Components/Footer/Footer';
import { About } from './Components/About/About';
import { Impact } from './Components/Impact/Impact';
import { Events } from './Components/Events/Events';
import { Home } from './Components/Home/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Contact } from './Components/Contact/Contact';

function App() {

  return (
    <Router>
      <div className='app-wrapper'>
        <FlipNavWrapper />
          <Routes>
            <Route path={"/" || ""} 
              element={
                <>
                  <div className='background-image-wrapper'>
                    <Hero />
                  </div>
                  <Home />
                </>
            } 
            />
            <Route path="/About" element={
              <>
                <Hero />
                <About />
              </>
            }
            />
            <Route path="/Impact" element={
              <>
                <Hero />
                <Impact />
              </>
            }
            />
            <Route path="/Events" element={
              <>
                <Hero />
                <Events />
              </>
            }
            />
            <Route path="/Contact" element={
              <>
                <Contact />
              </>
            }
            />
          </Routes>
        <div className='footer-wrapper'>
          <Footer />
        </div>
      </div>
    </Router>
    
  )
}

export default App;
