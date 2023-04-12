import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import AboutMe from './pages/AboutMe/AboutMe';
import Skills from './pages/Skills/Skills';
import ContactHead from './pages/ContactHead/ContactHead';
import Contact from './pages/Contact/Contact';
// import Playground from './pages/Playground/Playground';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <AboutMe />
      <Skills/>
      <ContactHead/>
      <Contact />
    </div>
  );
}

export default App;