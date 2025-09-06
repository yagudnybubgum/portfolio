import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      {/* Desktop / Tablet */}
      <div className="hero-desktop">
        <div className="hero-desktop-content">
          <div className="title-wrapper">
            <h1 className="title-line">Good choice&nbsp;</h1>
            <div className="title-box">
              <div className="title-box-inner">for ↓↓↓</div>
            </div>
            <h1 className="title-line">Headhunters</h1>
          </div>
          <img src="/assets/head.png" alt="Head illustration" className="hero-image" />
        </div>
      </div>

      {/* Mobile */}
      <div className="hero-mobile">
        <div className="hero-mobile-content">
          <div className="title-wrapper">
            <h1 className="title-line">Good choice&nbsp;</h1>
            <div className="title-box mobile">
              <div className="title-box-inner">for ↓↓↓</div>
            </div>
            <h1 className="title-line">Headhunters</h1>
          </div>
          <img src="/assets/head.png" alt="Head illustration" className="hero-image" />
        </div>
      </div>
    </section>
  );
};

export default Hero;


