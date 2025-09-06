import React from 'react';
import './Intro.css';

const Intro = () => {
  return (
    <section className="intro">
      {/* Desktop */}
      <div className="intro-desktop">
        <div className="intro-content">
          <div className="intro-left">
            <h2 className="intro-title">Context</h2>
          </div>
          <div className="intro-right">
            <div className="intro-description">
              <p className="intro-text">
                Djangoheads is a Lisbon-based company specializing in Python/Django development, cloud solutions, Dev Ops, and machine learning.
              </p>
              <p className="intro-text">
                The company decided to launch a platform connecting employers with skilled developers for project-based work.
              </p>
              <p className="intro-text">
                As the product designer, I was responsible for designing core user flows and interfaces — from registration and profile setup to project boards and a built-in time tracker — ensuring a seamless end-to-end experience.
              </p>
            </div>
            <div className="intro-meta">
              <div className="intro-meta-row">
                <span className="intro-meta-label">Client</span>
                <span className="intro-meta-value">Djangoheads</span>
              </div>
              <div className="intro-meta-row">
                <span className="intro-meta-label">Year</span>
                <span className="intro-meta-value">2024</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tablet */}
      <div className="intro-tablet">
        <div className="intro-content">
          <div className="intro-left">
            <h2 className="intro-title">Context</h2>
          </div>
          <div className="intro-right">
            <div className="intro-description">
              <p className="intro-text">
                Djangoheads is a Lisbon-based company specializing in Python/Django development, cloud solutions, Dev Ops, and machine learning.
              </p>
              <p className="intro-text">
                The company decided to launch a platform connecting employers with skilled developers for project-based work.
              </p>
              <p className="intro-text">
                As the product designer, I was responsible for designing core user flows and interfaces — from registration and profile setup to project boards and a built-in time tracker — ensuring a seamless end-to-end experience.
              </p>
            </div>
            <div className="intro-meta">
              <div className="intro-meta-row">
                <span className="intro-meta-label">Client</span>
                <span className="intro-meta-value">Djangoheads</span>
              </div>
              <div className="intro-meta-row">
                <span className="intro-meta-label">Year</span>
                <span className="intro-meta-value">2024</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile */}
      <div className="intro-mobile">
        <div className="intro-content">
          <div className="intro-left">
            <h2 className="intro-title">Context</h2>
          </div>
          <div className="intro-right">
            <div className="intro-description">
              <p className="intro-text">
                Djangoheads is a Lisbon-based company specializing in Python/Django development, cloud solutions, Dev Ops, and machine learning.
              </p>
              <p className="intro-text">
                The company decided to launch a platform connecting employers with skilled developers for project-based work.
              </p>
              <p className="intro-text">
                As the product designer, I was responsible for designing core user flows and interfaces — from registration and profile setup to project boards and a built-in time tracker — ensuring a seamless end-to-end experience.
              </p>
            </div>
            <div className="intro-meta">
              <div className="intro-meta-row">
                <span className="intro-meta-label">Client</span>
                <span className="intro-meta-value">Djangoheads</span>
              </div>
              <div className="intro-meta-row">
                <span className="intro-meta-label">Year</span>
                <span className="intro-meta-value">2024</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
