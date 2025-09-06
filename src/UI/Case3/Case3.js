import React from 'react';
import './Case3.css';
import Intro from './Intro';
import Research from './Research';
import Designing from './Designing';
import Solutions from './Solutions';
import Results from './Results';
import Case3Navigation from './Case3Navigation';

const Case3 = () => {
  const imgCase3Hero = "/assets/case 3 cover.png";
  const imgUIElements = "/assets/UI Elements case 3.png";

  return (
    <div className="case3">
      {/* Desktop Hero */}
      <div className="case3-hero-desktop">
        <img 
          src={imgCase3Hero}
          alt="Case 3 Study"
          className="case3-hero-img"
        />
      </div>

      {/* Tablet Hero */}
      <div className="case3-hero-tablet">
        <img 
          src={imgCase3Hero}
          alt="Case 3 Study"
          className="case3-hero-img"
        />
      </div>

      {/* Mobile Hero */}
      <div className="case3-hero-mobile">
        <img 
          src={imgCase3Hero}
          alt="Case 3 Study"
          className="case3-hero-img"
        />
      </div>

      {/* Intro Section */}
      <Intro />

      {/* Research Section */}
      <Research />

      {/* UI Elements Section */}
      <div className="case3-ui-elements">
        {/* Desktop UI Elements */}
        <div className="case3-ui-elements-desktop">
          <img 
            src={imgUIElements}
            alt="UI Elements Case 3"
            className="case3-ui-elements-img"
          />
        </div>

        {/* Tablet UI Elements */}
        <div className="case3-ui-elements-tablet">
          <img 
            src={imgUIElements}
            alt="UI Elements Case 3"
            className="case3-ui-elements-img"
          />
        </div>

        {/* Mobile UI Elements */}
        <div className="case3-ui-elements-mobile">
          <img 
            src={imgUIElements}
            alt="UI Elements Case 3"
            className="case3-ui-elements-img"
          />
        </div>
      </div>

      {/* Designing Section */}
      <Designing />

      {/* Solutions Section */}
      <Solutions />

      {/* Video Section */}
      <div className="case3-video">
        <p className="case3-video-label">video demo</p>
        <div className="case3-video-container">
          <div className="case3-video-wrapper">
            <iframe
              src="https://player.vimeo.com/video/1029288892?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&loop=1&controls=0&muted=1"
              width="100%"
              height="100%"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              title="Djangoheads"
              className="case3-video-iframe"
            />
          </div>
        </div>
      </div>

      {/* Results Section */}
      <Results />

      {/* Phone Carousel Section */}
      <div className="case3-phone-carousel">
        <div className="phone-carousel-container">
          <div className="phone-carousel-track">
            <img src="/assets/phones case 3/1.png" alt="Phone 1" className="phone-carousel-img" />
            <img src="/assets/phones case 3/2.png" alt="Phone 2" className="phone-carousel-img" />
            <img src="/assets/phones case 3/3.png" alt="Phone 3" className="phone-carousel-img" />
            <img src="/assets/phones case 3/4.png" alt="Phone 4" className="phone-carousel-img" />
            <img src="/assets/phones case 3/5.png" alt="Phone 5" className="phone-carousel-img" />
            <img src="/assets/phones case 3/6.png" alt="Phone 6" className="phone-carousel-img" />
            {/* Duplicate images for seamless loop */}
            <img src="/assets/phones case 3/1.png" alt="Phone 1" className="phone-carousel-img" />
            <img src="/assets/phones case 3/2.png" alt="Phone 2" className="phone-carousel-img" />
            <img src="/assets/phones case 3/3.png" alt="Phone 3" className="phone-carousel-img" />
            <img src="/assets/phones case 3/4.png" alt="Phone 4" className="phone-carousel-img" />
            <img src="/assets/phones case 3/5.png" alt="Phone 5" className="phone-carousel-img" />
            <img src="/assets/phones case 3/6.png" alt="Phone 6" className="phone-carousel-img" />
          </div>
        </div>
      </div>

      {/* Navigation Section */}
      <Case3Navigation />
    </div>
  );
};

export default Case3;
