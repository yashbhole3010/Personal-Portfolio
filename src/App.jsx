import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

const App = () => {
  return (
    <div className="bg-gray-900 text-white font-sans">
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
};

export default App;