import React from 'react';
import '../Case1/Problem.css';
import './API.css';

const API = ({ imgRefs }) => {
  return (
    <section className="problem api">
      {/* Desktop */}
      <div className="problem-desktop">
        <div className="problem-content">
          <div className="problem-left">
            <h2 className="problem-title">Research on Map Integration</h2>
          </div>
          <div className="problem-right">
            <p className="problem-text">
              To find an efficient solution for the interactive map, I researched companies with similar features:
            </p>
            <div className="api-points">
              <p className="api-point">
                <span className="api-point-bold">Airbnb</span>: Uses Google Maps for seamless location selection and property details.
              </p>
              <p className="api-point">
                <span className="api-point-bold">Avito</span>: Integrates Yandex.Maps for a region-specific interactive experience.
              </p>
            </div>
            <p className="problem-text">
              These examples showed that leveraging existing map APIs could cut development time and resources while maintaining a high-quality user experience, guiding our decision to explore third-party APIs.
            </p>
          </div>
        </div>
        {/* Desktop Image */}
        <div className="api-refs-desktop">
          <img 
            src={imgRefs}
            alt="Refs Case 2"
            className="api-refs-img"
          />
        </div>
      </div>

      {/* Tablet */}
      <div className="problem-tablet">
        <div className="problem-content">
          <div className="problem-left">
            <h2 className="problem-title">Research on Map Integration</h2>
          </div>
          <div className="problem-right">
            <p className="problem-text">
              To find an efficient solution for the interactive map, I researched companies with similar features:
            </p>
            <div className="api-points">
              <p className="api-point">
                <span className="api-point-bold">Airbnb</span>: Uses Google Maps for seamless location selection and property details.
              </p>
              <p className="api-point">
                <span className="api-point-bold">Avito</span>: Integrates Yandex.Maps for a region-specific interactive experience.
              </p>
            </div>
            <p className="problem-text">
              These examples showed that leveraging existing map APIs could cut development time and resources while maintaining a high-quality user experience, guiding our decision to explore third-party APIs.
            </p>
          </div>
        </div>
        {/* Tablet Image */}
        <div className="api-refs-tablet">
          <img 
            src={imgRefs}
            alt="Refs Case 2"
            className="api-refs-img"
          />
        </div>
      </div>

      {/* Mobile */}
      <div className="problem-mobile">
        <div className="problem-content">
          <div className="problem-left">
            <h2 className="problem-title">Research on Map Integration</h2>
          </div>
          <div className="problem-right">
            <p className="problem-text">
              To find an efficient solution for the interactive map, I researched companies with similar features:
            </p>
            <div className="api-points">
              <p className="api-point">
                <span className="api-point-bold">Airbnb</span>: Uses Google Maps for seamless location selection and property details.
              </p>
              <p className="api-point">
                <span className="api-point-bold">Avito</span>: Integrates Yandex.Maps for a region-specific interactive experience.
              </p>
            </div>
            <p className="problem-text">
              These examples showed that leveraging existing map APIs could cut development time and resources while maintaining a high-quality user experience, guiding our decision to explore third-party APIs.
            </p>
          </div>
        </div>
        {/* Mobile Image */}
        <div className="api-refs-mobile">
          <img 
            src={imgRefs}
            alt="Refs Case 2"
            className="api-refs-img"
          />
        </div>
      </div>

    </section>
  );
};

export default API;
