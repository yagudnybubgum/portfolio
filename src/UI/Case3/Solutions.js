import React from 'react';
import '../Case1/Problem.css';
import './Solutions.css';

const Solutions = () => {
  return (
    <section className="problem solutions">
      {/* Desktop */}
      <div className="problem-desktop">
        <div className="problem-content">
          <div className="problem-left">
            <h2 className="problem-title">Design and Key Solutions</h2>
          </div>
          <div className="problem-right">
            <div className="solutions-points">
              <p className="solutions-point">
                <span className="solutions-point-bold">Onboarding</span>: Developers can upload a resume, which our AI converts into a profile, speeding up setup.
              </p>
              <p className="solutions-point">
                <span className="solutions-point-bold">Project Board</span>: A card-based layout displays essential project details, with a click-through for full info.
              </p>
              <p className="solutions-point">
                <span className="solutions-point-bold">Time Tracker</span>: A two-part screen provides weekly project overviews and daily time logging.
              </p>
              <p className="solutions-point">
                <span className="solutions-point-bold">Profile Page</span>: Profiles resemble resumes and are exportable as PDFs, aiding employer evaluations.
              </p>
              <p className="solutions-point">
                <span className="solutions-point-bold">In-line Editing</span>: Direct field editing with auto-save makes profile updates seamless.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Tablet */}
      <div className="problem-tablet">
        <div className="problem-content">
          <div className="problem-left">
            <h2 className="problem-title">Design and Key Solutions</h2>
          </div>
          <div className="problem-right">
            <div className="solutions-points">
              <p className="solutions-point">
                <span className="solutions-point-bold">Onboarding</span>: Developers can upload a resume, which our AI converts into a profile, speeding up setup.
              </p>
              <p className="solutions-point">
                <span className="solutions-point-bold">Project Board</span>: A card-based layout displays essential project details, with a click-through for full info.
              </p>
              <p className="solutions-point">
                <span className="solutions-point-bold">Time Tracker</span>: A two-part screen provides weekly project overviews and daily time logging.
              </p>
              <p className="solutions-point">
                <span className="solutions-point-bold">Profile Page</span>: Profiles resemble resumes and are exportable as PDFs, aiding employer evaluations.
              </p>
              <p className="solutions-point">
                <span className="solutions-point-bold">In-line Editing</span>: Direct field editing with auto-save makes profile updates seamless.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile */}
      <div className="problem-mobile">
        <div className="problem-content">
          <div className="problem-left">
            <h2 className="problem-title">Design and Key Solutions</h2>
          </div>
          <div className="problem-right">
            <div className="solutions-points">
              <p className="solutions-point">
                <span className="solutions-point-bold">Onboarding</span>: Developers can upload a resume, which our AI converts into a profile, speeding up setup.
              </p>
              <p className="solutions-point">
                <span className="solutions-point-bold">Project Board</span>: A card-based layout displays essential project details, with a click-through for full info.
              </p>
              <p className="solutions-point">
                <span className="solutions-point-bold">Time Tracker</span>: A two-part screen provides weekly project overviews and daily time logging.
              </p>
              <p className="solutions-point">
                <span className="solutions-point-bold">Profile Page</span>: Profiles resemble resumes and are exportable as PDFs, aiding employer evaluations.
              </p>
              <p className="solutions-point">
                <span className="solutions-point-bold">In-line Editing</span>: Direct field editing with auto-save makes profile updates seamless.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
