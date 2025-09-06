import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Case3Navigation.css';
import Button from '../Button/Button';

const Case3Navigation = () => {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate('/');
  };

  const handlePreviousClick = () => {
    navigate('/case2');
  };

  return (
    <section className="case3-navigation">
      {/* Desktop */}
      <div className="case3-nav-desktop">
        <div className="case3-nav-content">
          <Button 
            onClick={handlePreviousClick}
            className="case3-nav-button case3-nav-previous"
          >
            ← PREVIOUS CASE
          </Button>
          <Button 
            onClick={handleHomeClick}
            className="case3-nav-button case3-nav-home"
          >
            HOME PAGE
          </Button>
        </div>
      </div>

      {/* Tablet */}
      <div className="case3-nav-tablet">
        <div className="case3-nav-content">
          <Button 
            onClick={handlePreviousClick}
            className="case3-nav-button case3-nav-previous"
          >
            ← PREVIOUS CASE
          </Button>
          <Button 
            onClick={handleHomeClick}
            className="case3-nav-button case3-nav-home"
          >
            HOME PAGE
          </Button>
        </div>
      </div>

      {/* Mobile */}
      <div className="case3-nav-mobile">
        <div className="case3-nav-content">
          <Button 
            onClick={handlePreviousClick}
            className="case3-nav-button case3-nav-previous"
          >
            ← PREVIOUS CASE
          </Button>
          <Button 
            onClick={handleHomeClick}
            className="case3-nav-button case3-nav-home"
          >
            HOME PAGE
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Case3Navigation;
