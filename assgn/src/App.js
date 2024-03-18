import React from 'react';
import './App.css';
import Login from './Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Empl from './empl';


function App() {

  return (

    <Router>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
    </Routes>
    </Router>

   
  );
}

export default App;
