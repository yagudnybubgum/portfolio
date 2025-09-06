import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Case1Navigation.css';
import Button from '../Button/Button';

const Case1Navigation = () => {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate('/');
  };

  const handleNextClick = () => {
    navigate('/case2');
  };

  return (
    <section className="case1-navigation">
      {/* Desktop */}
      <div className="case1-nav-desktop">
        <div className="case1-nav-content">
          <Button 
            onClick={handleHomeClick}
            className="case1-nav-button case1-nav-home"
          >
            HOME PAGE
          </Button>
          <Button 
            onClick={handleNextClick}
            className="case1-nav-button case1-nav-next"
          >
            NEXT CASE→
          </Button>
        </div>
      </div>

      {/* Tablet */}
      <div className="case1-nav-tablet">
        <div className="case1-nav-content">
          <Button 
            onClick={handleHomeClick}
            className="case1-nav-button case1-nav-home"
          >
            HOME PAGE
          </Button>
          <Button 
            onClick={handleNextClick}
            className="case1-nav-button case1-nav-next"
          >
            NEXT CASE→
          </Button>
        </div>
      </div>

      {/* Mobile */}
      <div className="case1-nav-mobile">
        <div className="case1-nav-content">
          <Button 
            onClick={handleHomeClick}
            className="case1-nav-button case1-nav-home"
          >
            HOME PAGE
          </Button>
          <Button 
            onClick={handleNextClick}
            className="case1-nav-button case1-nav-next"
          >
            NEXT CASE→
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Case1Navigation;
