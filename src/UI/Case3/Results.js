import React from 'react';
import './Results.css';

const Results = () => {
  return (
    <section className="results">
      {/* Desktop */}
      <div className="results-desktop">
        <div className="results-content">
          <div className="results-left">
            <h2 className="results-title">Results and Impact</h2>
          </div>
          <div className="results-right">
            <div className="results-points">
              <p className="results-point">
                <span className="results-point-bold">Efficiency Gains</span>: AI-powered profile setup reduced onboarding time, leading to faster user adoption.
              </p>
              <p className="results-point">
                <span className="results-point-bold">Positive Feedback</span>: Users highlighted the intuitive design, quick project access, and effective time-tracking.
              </p>
              <p className="results-point">
                <span className="results-point-bold">Higher Engagement</span>: Streamlined workflows boosted profile completion and project engagement rates.
              </p>
            </div>
            <p className="results-conclusion">
              These outcomes reflect the success of our user-centered design, making Djangoheads an efficient, competitive platform.
            </p>
          </div>
        </div>
      </div>

      {/* Tablet */}
      <div className="results-tablet">
        <div className="results-content">
          <div className="results-left">
            <h2 className="results-title">Results and Impact</h2>
          </div>
          <div className="results-right">
            <div className="results-points">
              <p className="results-point">
                <span className="results-point-bold">Efficiency Gains</span>: AI-powered profile setup reduced onboarding time, leading to faster user adoption.
              </p>
              <p className="results-point">
                <span className="results-point-bold">Positive Feedback</span>: Users highlighted the intuitive design, quick project access, and effective time-tracking.
              </p>
              <p className="results-point">
                <span className="results-point-bold">Higher Engagement</span>: Streamlined workflows boosted profile completion and project engagement rates.
              </p>
            </div>
            <p className="results-conclusion">
              These outcomes reflect the success of our user-centered design, making Djangoheads an efficient, competitive platform.
            </p>
          </div>
        </div>
      </div>

      {/* Mobile */}
      <div className="results-mobile">
        <div className="results-content">
          <div className="results-left">
            <h2 className="results-title">Results and Impact</h2>
          </div>
          <div className="results-right">
            <div className="results-points">
              <p className="results-point">
                <span className="results-point-bold">Efficiency Gains</span>: AI-powered profile setup reduced onboarding time, leading to faster user adoption.
              </p>
              <p className="results-point">
                <span className="results-point-bold">Positive Feedback</span>: Users highlighted the intuitive design, quick project access, and effective time-tracking.
              </p>
              <p className="results-point">
                <span className="results-point-bold">Higher Engagement</span>: Streamlined workflows boosted profile completion and project engagement rates.
              </p>
            </div>
            <p className="results-conclusion">
              These outcomes reflect the success of our user-centered design, making Djangoheads an efficient, competitive platform.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Results;
