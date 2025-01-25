import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthPage } from './pages/Signup';
import {Contact  } from './pages/Contact';
import Home from './Home';
import About from './pages/About';
import Profile from './pages/Profile';



const App = () => {
  return (
    <Router>
      <div className='bg-primary w-full overflow-hidden'>
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<AuthPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App;
