import React from 'react';
import './Task.css';

const Task = () => {
  return (
    <section className="task">
      {/* Desktop */}
      <div className="task-desktop">
        <div className="task-content">
          <div className="task-left">
            <h2 className="task-title">Task</h2>
          </div>
          <div className="task-right">
            <p className="task-text">
              We aimed to&nbsp;resolve these issues with&nbsp;an intuitive, centralized dashboard, providing quick access to&nbsp;key information, simplifying interactions, and&nbsp;showcasing product upgrades and&nbsp;exclusive deals to&nbsp;boost user engagement and&nbsp;revenue.
            </p>
          </div>
        </div>
      </div>

      {/* Tablet */}
      <div className="task-tablet">
        <div className="task-content">
          <div className="task-left">
            <h2 className="task-title">Task</h2>
          </div>
          <div className="task-right">
            <p className="task-text">
              We aimed to&nbsp;resolve these issues with&nbsp;an intuitive, centralized dashboard, providing quick access to&nbsp;key information, simplifying interactions, and&nbsp;showcasing product upgrades and&nbsp;exclusive deals to&nbsp;boost user engagement and&nbsp;revenue.
            </p>
          </div>
        </div>
      </div>

      {/* Mobile */}
      <div className="task-mobile">
        <div className="task-content">
          <div className="task-left">
            <h2 className="task-title">Task</h2>
          </div>
          <div className="task-right">
            <p className="task-text">
              We aimed to&nbsp;resolve these issues with&nbsp;an intuitive, centralized dashboard, providing quick access to&nbsp;key information, simplifying interactions, and&nbsp;showcasing product upgrades and&nbsp;exclusive deals to&nbsp;boost user engagement and&nbsp;revenue.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Task;

