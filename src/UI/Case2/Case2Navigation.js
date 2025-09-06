import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Case2Navigation.css';
import Button from '../Button/Button';

const Case2Navigation = () => {
  const navigate = useNavigate();

  const handlePreviousClick = () => {
    navigate('/case1');
  };

  const handleNextClick = () => {
    navigate('/case3');
  };

  return (
    <section className="case2-navigation">
      {/* Desktop */}
      <div className="case2-nav-desktop">
        <div className="case2-nav-content">
          <Button 
            onClick={handlePreviousClick}
            className="case2-nav-button case2-nav-previous"
          >
            ← PREVIOUS CASE
          </Button>
          <Button 
            onClick={handleNextClick}
            className="case2-nav-button case2-nav-next"
          >
            NEXT CASE→
          </Button>
        </div>
      </div>

      {/* Tablet */}
      <div className="case2-nav-tablet">
        <div className="case2-nav-content">
          <Button 
            onClick={handlePreviousClick}
            className="case2-nav-button case2-nav-previous"
          >
            ← PREVIOUS CASE
          </Button>
          <Button 
            onClick={handleNextClick}
            className="case2-nav-button case2-nav-next"
          >
            NEXT CASE→
          </Button>
        </div>
      </div>

      {/* Mobile */}
      <div className="case2-nav-mobile">
        <div className="case2-nav-content">
          <Button 
            onClick={handlePreviousClick}
            className="case2-nav-button case2-nav-previous"
          >
            ← PREVIOUS CASE
          </Button>
          <Button 
            onClick={handleNextClick}
            className="case2-nav-button case2-nav-next"
          >
            NEXT CASE→
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Case2Navigation;
