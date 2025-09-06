import React from 'react';
import './Hypotheses.css';

const Hypotheses = () => {
  return (
    <div className="hypotheses">
      {/* Desktop */}
      <div className="hypotheses-desktop">
        <div className="hypotheses-content">
          <div className="hypotheses-title-wrapper">
            <h2 className="hypotheses-title">Hypotheses</h2>
          </div>
          <div className="hypotheses-text-wrapper">
            <div className="hypotheses-text">
              <p className="hypotheses-intro">
                Based on user research, I proposed two hypotheses to boost engagement and conversion:
              </p>
              <div className="hypotheses-points">
                <p className="hypotheses-point">
                  <span className="hypotheses-point-bold">Interactive Map</span>: Adding an interactive map for easier country selection and quick access to IDP validity details could streamline navigation and reduce frustration.
                </p>
                <p className="hypotheses-point">
                  <span className="hypotheses-point-bold">Revamped Country List</span>: Simplifying the list with essential information at a glance, using categories or a search function, could enhance usability and avoid overwhelming users.
                </p>
              </div>
              <p className="hypotheses-conclusion">
                These hypotheses form the basis for the design solutions to address identified pain points.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Tablet */}
      <div className="hypotheses-tablet">
        <div className="hypotheses-content">
          <div className="hypotheses-title-wrapper">
            <h2 className="hypotheses-title">Hypotheses</h2>
          </div>
          <div className="hypotheses-text-wrapper">
            <div className="hypotheses-text">
              <p className="hypotheses-intro">
                Based on user research, I proposed two hypotheses to boost engagement and conversion:
              </p>
              <div className="hypotheses-points">
                <p className="hypotheses-point">
                  <span className="hypotheses-point-bold">Interactive Map</span>: Adding an interactive map for easier country selection and quick access to IDP validity details could streamline navigation and reduce frustration.
                </p>
                <p className="hypotheses-point">
                  <span className="hypotheses-point-bold">Revamped Country List</span>: Simplifying the list with essential information at a glance, using categories or a search function, could enhance usability and avoid overwhelming users.
                </p>
              </div>
              <p className="hypotheses-conclusion">
                These hypotheses form the basis for the design solutions to address identified pain points.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile */}
      <div className="hypotheses-mobile">
        <div className="hypotheses-content">
          <div className="hypotheses-title-wrapper">
            <h2 className="hypotheses-title">Hypotheses</h2>
          </div>
          <div className="hypotheses-text-wrapper">
            <div className="hypotheses-text">
              <p className="hypotheses-intro">
                Based on user research, I proposed two hypotheses to boost engagement and conversion:
              </p>
              <div className="hypotheses-points">
                <p className="hypotheses-point">
                  <span className="hypotheses-point-bold">Interactive Map</span>: Adding an interactive map for easier country selection and quick access to IDP validity details could streamline navigation and reduce frustration.
                </p>
                <p className="hypotheses-point">
                  <span className="hypotheses-point-bold">Revamped Country List</span>: Simplifying the list with essential information at a glance, using categories or a search function, could enhance usability and avoid overwhelming users.
                </p>
              </div>
              <p className="hypotheses-conclusion">
                These hypotheses form the basis for the design solutions to address identified pain points.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hypotheses;
