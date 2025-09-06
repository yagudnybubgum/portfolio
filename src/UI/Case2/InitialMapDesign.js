import React from 'react';
import '../Case1/Problem.css';
import './InitialMapDesign.css';

const InitialMapDesign = () => {
  return (
    <section className="problem initial-map-design">
      {/* Desktop */}
      <div className="problem-desktop">
        <div className="problem-content">
          <div className="problem-left">
            <h2 className="problem-title">Initial Map Design</h2>
          </div>
          <div className="problem-right">
            <p className="problem-text">
              The initial interactive map design, with clickable countries and animations, seemed promising. However, assembling and animating each country was too resource-intensive, requiring significant development time and effort, making it impractical.
            </p>
          </div>
        </div>
      </div>

      {/* Tablet */}
      <div className="problem-tablet">
        <div className="problem-content">
          <div className="problem-left">
            <h2 className="problem-title">Initial Map Design</h2>
          </div>
          <div className="problem-right">
            <p className="problem-text">
              The initial interactive map design, with clickable countries and animations, seemed promising. However, assembling and animating each country was too resource-intensive, requiring significant development time and effort, making it impractical.
            </p>
          </div>
        </div>
      </div>

      {/* Mobile */}
      <div className="problem-mobile">
        <div className="problem-content">
          <div className="problem-left">
            <h2 className="problem-title">Initial Map Design</h2>
          </div>
          <div className="problem-right">
            <p className="problem-text">
              The initial interactive map design, with clickable countries and animations, seemed promising. However, assembling and animating each country was too resource-intensive, requiring significant development time and effort, making it impractical.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InitialMapDesign;
