import React from 'react'
import Data from './components/data/Data';
import Hero from './components/hero/Hero';
import Services from './components/Services_provide/Services.js';
import Navbar from './components/navbar/Navbar';
import Cloud from './components/cloud/Cloud'
import Footer from './components/footer/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Data />
      <Cloud />
      <Footer />
    </>
  );
}

export default App;
