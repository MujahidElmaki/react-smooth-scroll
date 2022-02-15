import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages';
import connectwallet from './pages/connectwallet';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} exact />

        <Route path="/connectwallet" element={<connectwallet />} exact />
      </Routes>
    </Router>
  );
}

export default App;
