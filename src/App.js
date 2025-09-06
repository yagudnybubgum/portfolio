import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './UI/Header';
import Hero from './UI/Hero';
import Video from './UI/Video';
import Works from './UI/Works';
import About from './UI/About';
import Skills from './UI/Skills';
import Footer from './UI/Footer';
import PersonalAccount from './UI/Case1';
import Case2 from './UI/Case2';
import Case3 from './UI/Case3';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Video />
              <Works />
              <About />
              <Skills />
            </>
          } />
          <Route path="/case1" element={<PersonalAccount />} />
          <Route path="/case2" element={<Case2 />} />
          <Route path="/case3" element={<Case3 />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
