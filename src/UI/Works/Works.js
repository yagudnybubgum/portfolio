import React from 'react';
import { Link } from 'react-router-dom';
import './Works.css';

const Works = () => {
  // Изображения кейсов из папки assets
  const caseCover1 = '/assets/Homapage Case cover 1.png';
  const caseCover2 = '/assets/Homapage Case cover 2.png';
  const caseCover3 = '/assets/Homapage Case cover 3.png';

  return (
    <section className="works">
      {/* Desktop / Tablet */}
      <div className="works-desktop">
        <div className="works-desktop-content">
          <div className="works-header">
            <h2 className="works-title">Selected Works</h2>
            <div className="works-subtitle">Case Studies</div>
          </div>

          <div className="works-cards">
            {/* Card 1 */}
            <Link to="/case1" className="works-card works-card-default">
              <div className="card-image">
                <img src={caseCover1} alt="IDA Personal Account Case" />
              </div>
              <div className="card-content">
                <h3 className="card-title">
                  Boosting User Engagement by&nbsp;Revamping IDA's
                  <span className="highlight"> Personal Account</span>
                </h3>
              </div>
            </Link>

            {/* Card 2 */}
            <Link to="/case2" className="works-card works-card-default works-card-default-2">
              <div className="card-image">
                <img src={caseCover2} alt="Interactive Map Case" />
              </div>
              <div className="card-content">
                <h3 className="card-title">
                  Transforming Country Selection into an Intuitive Experience with an
                  <span className="highlight"> Interactive Map</span>
                </h3>
              </div>
            </Link>

            {/* Card 3 */}
            <Link to="/case3" className="works-card works-card-default works-card-default-3">
              <div className="card-image">
                <img src={caseCover3} alt="Platform Case" />
              </div>
              <div className="card-content">
                <h3 className="card-title">
                  <span className="text-main">Building a </span>
                  <span className="highlight highlight-no-arrow">User-Centered Platform</span>
                  <span className="text-main"> to Simplify Project</span>
                  <span className="highlight"> Connections</span>
                </h3>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile */}
      <div className="works-mobile">
        <div className="works-mobile-content">
          <div className="works-header">
            <h2 className="works-title">Selected Works</h2>
            <div className="works-subtitle">Case Studies</div>
          </div>

          <div className="works-cards">
            {/* Card 1 */}
            <Link to="/case1" className="works-card">
              <div className="card-image">
                <img src={caseCover1} alt="IDA Personal Account Case" />
              </div>
              <div className="card-content">
                <h3 className="card-title">
                  Boosting User Engagement by&nbsp;Revamping IDA's
                  <span className="highlight"> Personal Account</span>
                </h3>
              </div>
            </Link>

            {/* Card 2 */}
            <Link to="/case2" className="works-card">
              <div className="card-image">
                <img src={caseCover2} alt="Interactive Map Case" />
              </div>
              <div className="card-content">
                <h3 className="card-title">
                  Transforming Country Selection into an Intuitive Experience with an
                  <span className="highlight"> Interactive Map</span>
                </h3>
              </div>
            </Link>

            {/* Card 3 */}
            <Link to="/case3" className="works-card">
              <div className="card-image">
                <img src={caseCover3} alt="Platform Case" />
              </div>
              <div className="card-content">
                <h3 className="card-title">
                  Building a User-Centered Platform to Simplify Project
                  <span className="highlight"> Connections</span>
                </h3>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Works;
