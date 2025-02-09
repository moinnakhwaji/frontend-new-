import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthPage } from './pages/Signup';
import {Contact  } from './pages/Contact';
import Home from './Home';
import About from './pages/About';
import Profile from './pages/Profile';
import CreateProfile from './pages/Createprofile';

import ChatApp from './components/Chatroom';
import TeamForm from './pages/TeamCreation';



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
          <Route path="/Createprofile" element={<CreateProfile />} />
          <Route path="/Chat" element={<ChatApp />} />
          <Route path="/team" element={<TeamForm />} />
          
        </Routes>
      </div>
    </Router>
  )
}

export default App;
