import React from 'react';
import '../Case1/Problem.css';
import './Building.css';

const Building = ({ imgRefs }) => {
  return (
    <section className="problem building">
      {/* Desktop */}
      <div className="problem-desktop">
        <div className="problem-content">
          <div className="problem-left">
            <h2 className="problem-title">Building new Design</h2>
          </div>
          <div className="problem-right">
            <p className="problem-text">
              After choosing a third-party map API, I integrated Google Maps for its reliability and global coverage. The design process prioritized functionality and performance:
            </p>
            <div className="building-points">
              <p className="building-point">
                <span className="building-point-bold">API Integration</span>: Enabled users to click on countries and view IDP validity instantly.
              </p>
              <p className="building-point">
                <span className="building-point-bold">Customization</span>: Adjusted the map's appearance to match the design and user needs, hiding non-essential elements for clarity.
              </p>
              <p className="building-point">
                <span className="building-point-bold">Performance Optimization</span>: Limited animations and ensured faster load times for smooth user interaction.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Tablet */}
      <div className="problem-tablet">
        <div className="problem-content">
          <div className="problem-left">
            <h2 className="problem-title">Building new Design</h2>
          </div>
          <div className="problem-right">
            <p className="problem-text">
              After choosing a third-party map API, I integrated Google Maps for its reliability and global coverage. The design process prioritized functionality and performance:
            </p>
            <div className="building-points">
              <p className="building-point">
                <span className="building-point-bold">API Integration</span>: Enabled users to click on countries and view IDP validity instantly.
              </p>
              <p className="building-point">
                <span className="building-point-bold">Customization</span>: Adjusted the map's appearance to match the design and user needs, hiding non-essential elements for clarity.
              </p>
              <p className="building-point">
                <span className="building-point-bold">Performance Optimization</span>: Limited animations and ensured faster load times for smooth user interaction.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile */}
      <div className="problem-mobile">
        <div className="problem-content">
          <div className="problem-left">
            <h2 className="problem-title">Building new Design</h2>
          </div>
          <div className="problem-right">
            <p className="problem-text">
              After choosing a third-party map API, I integrated Google Maps for its reliability and global coverage. The design process prioritized functionality and performance:
            </p>
            <div className="building-points">
              <p className="building-point">
                <span className="building-point-bold">API Integration</span>: Enabled users to click on countries and view IDP validity instantly.
              </p>
              <p className="building-point">
                <span className="building-point-bold">Customization</span>: Adjusted the map's appearance to match the design and user needs, hiding non-essential elements for clarity.
              </p>
              <p className="building-point">
                <span className="building-point-bold">Performance Optimization</span>: Limited animations and ensured faster load times for smooth user interaction.
              </p>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Building;
