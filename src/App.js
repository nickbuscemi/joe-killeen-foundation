import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import ScrollToTop from './utils/ScrollToTop';
import { FlipNavWrapper } from './Components/NavBar/Navbar';
import { Hero } from './Components/Hero/Hero'
import { Footer } from './Components/Footer/Footer';
import { About } from './Components/About/About';
import { Impact } from './Components/Impact/Impact';
import { Events } from './Components/Events/Events';
import { Home } from './Components/Home/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Contact } from './Components/Contact/Contact';
import { EventDetail } from './Components/Events/EventsComponents/EventDetail';

function App() {

  return (
    <Router>
      <ScrollToTop />
      <div className='app-wrapper'>
        <FlipNavWrapper />
          <Routes>
            <Route path={"/"} 
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
            <Route path="/Events/:eventName" element={
              <>
                <EventDetail />
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
