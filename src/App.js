import React from 'react';
import './App.scss';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Offer from './components/Offer/Offer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Offer />
    </div>
  );
}

export default App;
