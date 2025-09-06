import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  // Проверяем, находимся ли мы на странице кейса
  const isCasePage = location.pathname === '/case1' || location.pathname === '/case2' || location.pathname === '/case3';

  const handleHomeClick = () => {
    navigate('/');
  };

  const handleContactClick = () => {
    // Если мы уже на главной странице, просто скроллим к футеру
    if (window.location.pathname === '/') {
      const footerSection = document.querySelector('.footer');
      if (footerSection) {
        footerSection.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Если мы на другой странице, переходим на главную и скроллим к футеру
      navigate('/');
      // Небольшая задержка для загрузки страницы
      setTimeout(() => {
        const footerSection = document.querySelector('.footer');
        if (footerSection) {
          footerSection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  const handleResumeClick = () => {
    window.open('https://drive.google.com/drive/folders/1-Dvi4bT6L3SVV6A-Xluzfo6ytoYNRDQa?usp=drive_link', '_blank');
  };

  const handleWorkClick = () => {
    // Если мы уже на главной странице, просто скроллим к блоку Works
    if (window.location.pathname === '/') {
      const worksSection = document.querySelector('.works');
      if (worksSection) {
        worksSection.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Если мы на другой странице, переходим на главную и скроллим к Works
      navigate('/');
      // Небольшая задержка для загрузки страницы
      setTimeout(() => {
        const worksSection = document.querySelector('.works');
        if (worksSection) {
          worksSection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  const handleAboutClick = () => {
    // Если мы уже на главной странице, просто скроллим к блоку About
    if (window.location.pathname === '/') {
      const aboutSection = document.querySelector('.about');
      if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Если мы на другой странице, переходим на главную и скроллим к About
      navigate('/');
      // Небольшая задержка для загрузки страницы
      setTimeout(() => {
        const aboutSection = document.querySelector('.about');
        if (aboutSection) {
          aboutSection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  return (
    <header className="header">
      {isCasePage ? (
        // Хедер для страниц кейсов - только логотип и резюме
        <>
          {/* Desktop/Tablet для кейсов */}
          <div className="header-desktop">
            <div className="desktop-content">
              <div className="left">
                <button className="home" onClick={handleHomeClick}>Denis sotskii</button>
                <div className="tagline">product design Portfolio</div>
              </div>
              <nav className="buttons">
                <button className="nav-btn" onClick={handleResumeClick}>Resume</button>
              </nav>
            </div>
          </div>

          {/* Mobile для кейсов */}
          <div className="header-mobile">
            <div className="mobile-content">
              <button className="home" onClick={handleHomeClick}>Denis sotskii</button>
              <button className="cta" onClick={handleResumeClick}>Resume</button>
            </div>
          </div>
        </>
      ) : (
        // Обычный хедер для главной страницы
        <>
          {/* Desktop */}
          <div className="header-desktop">
            <div className="desktop-content">
              <div className="left">
                <button className="home" onClick={handleHomeClick}>Denis sotskii</button>
                <div className="tagline">product design Portfolio</div>
              </div>
              <nav className="buttons">
                <button className="nav-btn" onClick={handleWorkClick}>Work</button>
                <button className="nav-btn" onClick={handleAboutClick}>About</button>
                <button className="nav-btn" onClick={handleContactClick}>Contact</button>
                <button className="nav-btn" onClick={handleResumeClick}>Resume</button>
              </nav>
            </div>
          </div>

          {/* Mobile */}
          <div className="header-mobile">
            <div className="mobile-content">
              <button className="home" onClick={handleHomeClick}>Denis sotskii</button>
              <button className="cta" onClick={handleResumeClick}>Resume</button>
            </div>
          </div>
        </>
      )}
    </header>
  );
};

export default Header;


