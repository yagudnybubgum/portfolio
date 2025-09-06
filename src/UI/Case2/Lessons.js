import React from 'react';
import '../Case1/Problem.css';
import './Lessons.css';

const Lessons = () => {
  return (
    <section className="problem lessons">
      {/* Desktop */}
      <div className="problem-desktop">
        <div className="problem-content">
          <div className="problem-left">
            <h2 className="problem-title">Lessons Learned</h2>
          </div>
          <div className="problem-right">
            <div className="lessons-points">
              <p className="lessons-point">
                <span className="lessons-point-bold">Research Value</span>: User interviews and usability testing revealed pain points like poor navigation and excessive text, guiding design hypotheses.
              </p>
              <p className="lessons-point">
                <span className="lessons-point-bold">Use Existing Tools</span>: Leveraging a third-party map API streamlined development and improved user experience.
              </p>
              <p className="lessons-point">
                <span className="lessons-point-bold">Interactive Elements</span>: An interactive map boosted engagement, showing that dynamic elements enhance navigation and interaction.
              </p>
              <p className="lessons-point">
                <span className="lessons-point-bold">Iterative Design</span>: A/B testing informed data-driven decisions, optimizing the final product with significant conversion gains.
              </p>
              <p className="lessons-point">
                <span className="lessons-point-bold">Simplicity</span>: Simplifying the UI improved user engagement and satisfaction.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Tablet */}
      <div className="problem-tablet">
        <div className="problem-content">
          <div className="problem-left">
            <h2 className="problem-title">Lessons Learned</h2>
          </div>
          <div className="problem-right">
            <div className="lessons-points">
              <p className="lessons-point">
                <span className="lessons-point-bold">Research Value</span>: User interviews and usability testing revealed pain points like poor navigation and excessive text, guiding design hypotheses.
              </p>
              <p className="lessons-point">
                <span className="lessons-point-bold">Use Existing Tools</span>: Leveraging a third-party map API streamlined development and improved user experience.
              </p>
              <p className="lessons-point">
                <span className="lessons-point-bold">Interactive Elements</span>: An interactive map boosted engagement, showing that dynamic elements enhance navigation and interaction.
              </p>
              <p className="lessons-point">
                <span className="lessons-point-bold">Iterative Design</span>: A/B testing informed data-driven decisions, optimizing the final product with significant conversion gains.
              </p>
              <p className="lessons-point">
                <span className="lessons-point-bold">Simplicity</span>: Simplifying the UI improved user engagement and satisfaction.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile */}
      <div className="problem-mobile">
        <div className="problem-content">
          <div className="problem-left">
            <h2 className="problem-title">Lessons Learned</h2>
          </div>
          <div className="problem-right">
            <div className="lessons-points">
              <p className="lessons-point">
                <span className="lessons-point-bold">Research Value</span>: User interviews and usability testing revealed pain points like poor navigation and excessive text, guiding design hypotheses.
              </p>
              <p className="lessons-point">
                <span className="lessons-point-bold">Use Existing Tools</span>: Leveraging a third-party map API streamlined development and improved user experience.
              </p>
              <p className="lessons-point">
                <span className="lessons-point-bold">Interactive Elements</span>: An interactive map boosted engagement, showing that dynamic elements enhance navigation and interaction.
              </p>
              <p className="lessons-point">
                <span className="lessons-point-bold">Iterative Design</span>: A/B testing informed data-driven decisions, optimizing the final product with significant conversion gains.
              </p>
              <p className="lessons-point">
                <span className="lessons-point-bold">Simplicity</span>: Simplifying the UI improved user engagement and satisfaction.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Lessons;
