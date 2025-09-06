import React from 'react';
import '../Case1/Problem.css';
import './Results.css';

const Results = () => {
  return (
    <section className="problem results">
      {/* Desktop */}
      <div className="problem-desktop">
        <div className="problem-content">
          <div className="problem-left">
            <h2 className="problem-title">Testing and Results</h2>
          </div>
          <div className="problem-right">
            <p className="problem-text">
              After implementing the new design, we conducted A/B testing comparing the interactive map-based design to the original static country list, tracking user interaction and conversion rates.
            </p>
            <div className="results-section">
              <p className="results-label">Results:</p>
              <div className="results-points">
                <p className="results-point">
                  <span className="results-point-bold">Conversion Uplift</span>: The A/B test revealed a 5.2% uplift in conversion rate (CVR), confirming the effectiveness of the new design.
                </p>
                <p className="results-point">
                  <span className="results-point-bold">Validation of Hypotheses</span>: These results validated our hypotheses, demonstrating that the map improved navigation and enhanced the overall user experience.
                </p>
              </div>
            </div>
            <p className="problem-text">
              The successful outcome showed that the new design addressed user pain points while contributing to better business results.
            </p>
          </div>
        </div>
      </div>

      {/* Tablet */}
      <div className="problem-tablet">
        <div className="problem-content">
          <div className="problem-left">
            <h2 className="problem-title">Testing and Results</h2>
          </div>
          <div className="problem-right">
            <p className="problem-text">
              After implementing the new design, we conducted A/B testing comparing the interactive map-based design to the original static country list, tracking user interaction and conversion rates.
            </p>
            <div className="results-section">
              <p className="results-label">Results:</p>
              <div className="results-points">
                <p className="results-point">
                  <span className="results-point-bold">Conversion Uplift</span>: The A/B test revealed a 5.2% uplift in conversion rate (CVR), confirming the effectiveness of the new design.
                </p>
                <p className="results-point">
                  <span className="results-point-bold">Validation of Hypotheses</span>: These results validated our hypotheses, demonstrating that the map improved navigation and enhanced the overall user experience.
                </p>
              </div>
            </div>
            <p className="problem-text">
              The successful outcome showed that the new design addressed user pain points while contributing to better business results.
            </p>
          </div>
        </div>
      </div>

      {/* Mobile */}
      <div className="problem-mobile">
        <div className="problem-content">
          <div className="problem-left">
            <h2 className="problem-title">Testing and Results</h2>
          </div>
          <div className="problem-right">
            <p className="problem-text">
              After implementing the new design, we conducted A/B testing comparing the interactive map-based design to the original static country list, tracking user interaction and conversion rates.
            </p>
            <div className="results-section">
              <p className="results-label">Results:</p>
              <div className="results-points">
                <p className="results-point">
                  <span className="results-point-bold">Conversion Uplift</span>: The A/B test revealed a 5.2% uplift in conversion rate (CVR), confirming the effectiveness of the new design.
                </p>
                <p className="results-point">
                  <span className="results-point-bold">Validation of Hypotheses</span>: These results validated our hypotheses, demonstrating that the map improved navigation and enhanced the overall user experience.
                </p>
              </div>
            </div>
            <p className="problem-text">
              The successful outcome showed that the new design addressed user pain points while contributing to better business results.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Results;
