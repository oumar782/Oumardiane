import React from 'react';
import About from './composant/About';
import Navbar from './composant/Navbar';
import Hero from './composant/Hero';
import Skills from './composant/Skills';



function App() {
  return (
    <>
      <Navbar />
      <Hero />

      <About />
      <Skills />
    </>
  );
}

export default App;