import React from 'react';
import Navbar from './Components/Navbar';
import './App.css';
import Home from './Components/pages/Home';
import Information from './Components/pages/Information';
import Post from './Components/pages/Post';
import Career from './Components/pages/Career';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Home/>} />
          <Route path='/home' element={<Home/>} />
          <Route path='/information' element={<Information/>} />
          <Route path='/post' element={<Post/>} />
          <Route path='/career' element={<Career/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
