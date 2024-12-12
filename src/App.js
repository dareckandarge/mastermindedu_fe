import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { getHelloMessage } from './api';

import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { Signup } from './pages/Signup';
import { Mentors } from './pages/Mentors';
import { Profile } from './components/Profile';
import { ResetAccount } from './pages/ResetAccount';

function App() {
  const [message, setMessage] = useState('no BE yet :(');

  useEffect(() => {
    getHelloMessage().then(setMessage);
  }, []);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/reset" element={<ResetAccount />} />
          <Route path="/mentors" element={<Mentors />} />
          <Route path="/mentors/mentorName" element={<Profile/>}/>
        </Routes>
        <p>{message}</p>
      </div>
    </Router>
  );
}

export default App;