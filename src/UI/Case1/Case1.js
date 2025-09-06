import React from 'react';
import './Case1.css';
import Highlight from './Highlight';
import Intro from './Intro';
import Problem from './Problem';
import Task from './Task';
import Research from './Research';
import Process from './Process';
import Outcome from './Outcome';
import Conclusion from './Conclusion';
import Case1Video from './Case1Video';
import Case1Navigation from './Case1Navigation';

const PersonalAccount = () => {
  const imgCase1Hero = "/assets/Case 1 Hero.png";
  const imgUIElements = "/assets/UI Elements Case 1.png";
  const imgChats = "/assets/Chats Case 1.png";
  const imgFlow = "/assets/flow case 1.png";

  return (
    <div className="case1">
      {/* Desktop Hero */}
      <div className="case1-hero-desktop">
        <img 
          src={imgCase1Hero}
          alt="Personal Account Case Study"
          className="case1-hero-img"
        />
      </div>

      {/* Tablet Hero */}
      <div className="case1-hero-tablet">
        <img 
          src={imgCase1Hero}
          alt="Personal Account Case Study"
          className="case1-hero-img"
        />
      </div>

      {/* Mobile Hero */}
      <div className="case1-hero-mobile">
        <img 
          src={imgCase1Hero}
          alt="Personal Account Case Study"
          className="case1-hero-img"
        />
      </div>

      <Highlight />
      <Intro />
      <Problem />
      <Task />

      {/* UI Elements Case 1 */}
      <div className="case1-ui-elements">
        <img 
          src={imgUIElements}
          alt="UI Elements Case 1"
          className="case1-ui-elements-img"
        />
      </div>
      <Research />
      {/* Chats Case 1 */}
      <div className="case1-chats">
        <img 
          src={imgChats}
          alt="Chats Case 1"
          className="case1-chats-img"
        />
      </div>
      <Process />
      {/* Flow Case 1 */}
      <div className="case1-flow">
        <img 
          src={imgFlow}
          alt="Flow Case 1"
          className="case1-flow-img"
        />
      </div>
      <Outcome />
      <Case1Video />
      <Conclusion />

      {/* Phone Carousel Section */}
      <div className="case1-phone-carousel">
        <div className="phone-carousel-container">
          <div className="phone-carousel-track">
            <img src="/assets/phones case 1/00.png" alt="Phone 00" className="phone-carousel-img" />
            <img src="/assets/phones case 1/11.png" alt="Phone 11" className="phone-carousel-img" />
            <img src="/assets/phones case 1/22.png" alt="Phone 22" className="phone-carousel-img" />
            <img src="/assets/phones case 1/33.png" alt="Phone 33" className="phone-carousel-img" />
            <img src="/assets/phones case 1/44.png" alt="Phone 44" className="phone-carousel-img" />
            <img src="/assets/phones case 1/55.png" alt="Phone 55" className="phone-carousel-img" />
            {/* Duplicate images for seamless loop */}
            <img src="/assets/phones case 1/00.png" alt="Phone 00" className="phone-carousel-img" />
            <img src="/assets/phones case 1/11.png" alt="Phone 11" className="phone-carousel-img" />
            <img src="/assets/phones case 1/22.png" alt="Phone 22" className="phone-carousel-img" />
            <img src="/assets/phones case 1/33.png" alt="Phone 33" className="phone-carousel-img" />
            <img src="/assets/phones case 1/44.png" alt="Phone 44" className="phone-carousel-img" />
            <img src="/assets/phones case 1/55.png" alt="Phone 55" className="phone-carousel-img" />
          </div>
        </div>
      </div>

      <Case1Navigation />
    </div>
  );
};

export default PersonalAccount;
