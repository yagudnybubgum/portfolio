import React from 'react';
import './About.css';

const About = () => {
  // Функция для добавления неразрывных пробелов перед предлогами
  const addNonBreakingSpaces = (text) => {
    return text.replace(/\s+([a-zA-Z]{1,3})\s+/g, '\u00A0$1\u00A0');
  };

  return (
    <section className="about">
      {/* Desktop / Tablet */}
      <div className="about-desktop">
        <div className="about-desktop-content">
          <h2 className="about-heading">About</h2>

          <div className="about-section">
            <div className="about-label">Intro</div>
            <div className="about-body intro">
              <p dangerouslySetInnerHTML={{ __html: addNonBreakingSpaces("I am a product designer creating intuitive, high-converting web interfaces with a mobile-friendly approach.") }} />
              <p dangerouslySetInnerHTML={{ __html: addNonBreakingSpaces("I specialize in optimizing checkout flows and enhancing personal account experiences, using data-driven approaches to deliver measurable results.") }} />
              <p dangerouslySetInnerHTML={{ __html: addNonBreakingSpaces("My work is rooted in user research, prototyping, and A/B testing, ensuring that every design decision maximizes engagement and conversions.") }} />
            </div>
          </div>

          <div className="about-section">
            <div className="about-label">LOCATION</div>
            <div className="about-body">
              <p dangerouslySetInnerHTML={{ __html: addNonBreakingSpaces("Tbilisi, Georgia") }} />
            </div>
          </div>

          <div className="about-section">
            <div className="about-label">Experience</div>
            <div className="about-body">
              <div className="exp-row">
                <span className="exp-title">Product Designer</span>
                <span className="exp-company">International Drivers Association</span>
                <span className="exp-dates">August 2023 – Present</span>
              </div>
              <div className="exp-row">
                <span className="exp-title">Product Designer</span>
                <span className="exp-company">Sitehab</span>
                <span className="exp-dates">March 2022 – April 2023</span>
              </div>
              <div className="exp-row">
                <span className="exp-title">Interfaces & Graphic Design</span>
                <span className="exp-company">Freelance</span>
                <span className="exp-dates">Since September 2022</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile */}
      <div className="about-mobile">
        <div className="about-mobile-content">
          <h2 className="about-heading">About</h2>

          <div className="about-section">
            <div className="about-label">Intro</div>
            <div className="about-body intro">
              <p dangerouslySetInnerHTML={{ __html: addNonBreakingSpaces("I am a product designer creating intuitive, high-converting web interfaces with a mobile-friendly approach.") }} />
              <p dangerouslySetInnerHTML={{ __html: addNonBreakingSpaces("I specialize in optimizing checkout flows and enhancing personal account experiences, using data-driven approaches to deliver measurable results.") }} />
              <p dangerouslySetInnerHTML={{ __html: addNonBreakingSpaces("My work is rooted in user research, prototyping, and A/B testing, ensuring that every design decision maximizes engagement and conversions.") }} />
            </div>
          </div>

          <div className="about-section">
            <div className="about-label">LOCATION</div>
            <div className="about-body">
              <p dangerouslySetInnerHTML={{ __html: addNonBreakingSpaces("Tbilisi, Georgia") }} />
            </div>
          </div>

          <div className="about-section">
            <div className="about-label">Experience</div>
            <div className="about-body">
              <div className="exp-group">
                <div className="exp-line">
                  <p className="exp-title">Product Designer</p>
                  <p className="exp-company">International Drivers Association</p>
                  <p className="exp-dates">August 2023 – Present</p>
                </div>
                <div className="exp-line">
                  <p className="exp-title">Product Designer</p>
                  <p className="exp-company">Sitehab</p>
                  <p className="exp-dates">March 2022 – April 2023</p>
                </div>
                <div className="exp-line">
                  <p className="exp-title">Interfaces & Graphic Design</p>
                  <p className="exp-company">Freelance</p>
                  <p className="exp-dates">Since September 2022</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;


