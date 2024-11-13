import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { getHelloMessage } from './api';

import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { Signup } from './pages/Signup';

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
        </Routes>
        <p>{message}</p>
      </div>
    </Router>
  );
}

export default App;