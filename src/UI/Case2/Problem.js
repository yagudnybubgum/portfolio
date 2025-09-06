import React from 'react';
import '../Case1/Problem.css';

const Problem = () => {
  return (
    <section className="problem">
      {/* Desktop */}
      <div className="problem-desktop">
        <div className="problem-content">
          <div className="problem-left">
            <h2 className="problem-title">Problem and Task</h2>
          </div>
          <div className="problem-right">
            <p className="problem-text">
              The page had low user engagement and conversion rates as it didn't contribute directly to sales. My task was to redesign it to boost engagement and conversions by identifying key improvements and creating a more captivating design aligned with the company's goals.
            </p>
          </div>
        </div>
      </div>

      {/* Tablet */}
      <div className="problem-tablet">
        <div className="problem-content">
          <div className="problem-left">
            <h2 className="problem-title">Problem and Task</h2>
          </div>
          <div className="problem-right">
            <p className="problem-text">
              The page had low user engagement and conversion rates as it didn't contribute directly to sales. My task was to redesign it to boost engagement and conversions by identifying key improvements and creating a more captivating design aligned with the company's goals.
            </p>
          </div>
        </div>
      </div>

      {/* Mobile */}
      <div className="problem-mobile">
        <div className="problem-content">
          <div className="problem-left">
            <h2 className="problem-title">Problem and Task</h2>
          </div>
          <div className="problem-right">
            <p className="problem-text">
              The page had low user engagement and conversion rates as it didn't contribute directly to sales. My task was to redesign it to boost engagement and conversions by identifying key improvements and creating a more captivating design aligned with the company's goals.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;
