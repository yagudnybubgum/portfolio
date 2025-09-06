import React from 'react';
import './Case2.css';
import Intro from './Intro';
import Problem from './Problem';
import Research from './Research';
import Hypotheses from './Hypotheses';
import InitialMapDesign from './InitialMapDesign';
import API from './API';
import Building from './Building';
import Results from './Results';
import Lessons from './Lessons';
import Case2Navigation from './Case2Navigation';

const Case2 = () => {
  const imgCase2Hero = "/assets/Case 2 Hero.png";
  const imgOldCase2 = "/assets/Old case 2.png";
  const imgNewCase2 = "/assets/New case 2.png";
  const imgScreenCase2 = "/assets/screen case 2.png";
  const imgMapScreenCase2 = "/assets/map screen case 2.png";
  const imgRefsCase2 = "/assets/refs case 2.png";

  return (
    <div className="case2">
      {/* Desktop Hero */}
      <div className="case2-hero-desktop">
        <img 
          src={imgCase2Hero}
          alt="Map Case Study"
          className="case2-hero-img"
        />
      </div>

      {/* Tablet Hero */}
      <div className="case2-hero-tablet">
        <img 
          src={imgCase2Hero}
          alt="Map Case Study"
          className="case2-hero-img"
        />
      </div>

      {/* Mobile Hero */}
      <div className="case2-hero-mobile">
        <img 
          src={imgCase2Hero}
          alt="Map Case Study"
          className="case2-hero-img"
        />
      </div>

      <Intro />
      <Problem />

      {/* Old Case 2 */}
      <div className="case2-old-case">
        <p className="case2-old-case-label">original design</p>
        <img 
          src={imgOldCase2}
          alt="Old Case 2"
          className="case2-old-case-img"
        />
      </div>

      <Research />

      {/* Screen Case 2 */}
      <div className="case2-screen">
        <img 
          src={imgScreenCase2}
          alt="Screen Case 2"
          className="case2-screen-img"
        />
      </div>

      <Hypotheses />

      <InitialMapDesign imgMapScreen={imgMapScreenCase2} />

      {/* Map Screen Case 2 */}
      <div className="case2-map-screen">
        <img 
          src={imgMapScreenCase2}
          alt="Map Screen Case 2"
          className="case2-map-screen-img"
        />
      </div>

      <API imgRefs={imgRefsCase2} />
      <Building imgRefs={imgRefsCase2} />
      <Results />

      {/* New Case 2 */}
      <div className="case2-new-case">
        <p className="case2-new-case-label">new design</p>
        <img 
          src={imgNewCase2}
          alt="New Case 2"
          className="case2-new-case-img"
        />
      </div>

      <Lessons />
      <Case2Navigation />
    </div>
  );
};

export default Case2;
