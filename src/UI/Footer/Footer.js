import React from 'react';
import './Footer.css';

const Footer = () => {
  // Функция для добавления неразрывных пробелов перед предлогами
  const addNonBreakingSpaces = (text) => {
    return text.replace(/\s+([a-zA-Z]{1,3})\s+/g, '\u00A0$1\u00A0');
  };

  const handleEmailClick = () => {
    window.location.href = 'mailto:sotskiendenis@gmail.com';
  };

  const handleResumeDownload = () => {
    window.open('https://drive.google.com/drive/folders/1-Dvi4bT6L3SVV6A-Xluzfo6ytoYNRDQa?usp=drive_link', '_blank');
  };

  const handleLinkedInClick = () => {
    window.open('https://www.linkedin.com/in/denissotskii/', '_blank');
  };

  const handleTelegramClick = () => {
    window.open('https://t.me/denissotskii', '_blank');
  };

  return (
    <footer className="footer">
      {/* Desktop Footer - starts from 1440px */}
      <div className="footer-desktop">
        <div className="desktop-content">
          <div>
            <h2>Contact</h2>
          </div>

          <div className="container">
            <div className="text">
              <p dangerouslySetInnerHTML={{ __html: addNonBreakingSpaces("Ready to bring your vision to life or just want to chat? Reach out, and let's create something memorable together.").replace("Reach out", "Reach&nbsp;out") }} />
            </div>

            <div className="email-button-container">
              <div className="email" onClick={handleEmailClick}>
                <span>sotskiendenis@gmail.com</span>
              </div>
              <button className="download-button" onClick={handleResumeDownload}>
                Download resume
              </button>
              <button className="social-button" onClick={handleLinkedInClick}>
                LinkedIn
              </button>
              <button className="social-button" onClick={handleTelegramClick}>
                Telegram
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Footer - below 1440px */}
      <div className="footer-mobile">
        <div>
          <h2>Contact</h2>
        </div>

        <div className="contact-container">
          <div className="text">
            <p dangerouslySetInnerHTML={{ __html: addNonBreakingSpaces("Ready to bring your vision to life or just want to chat? Reach out, and let's create something memorable together.").replace("Reach out", "Reach&nbsp;out") }} />
          </div>

          <div className="email-button-container">
            <div className="email" onClick={handleEmailClick}>
              <span>sotskiendenis@gmail.com</span>
            </div>

            <button className="download-button" onClick={handleResumeDownload}>
              Download resume
            </button>
            <button className="social-button" onClick={handleLinkedInClick}>
              LinkedIn
            </button>
            <button className="social-button" onClick={handleTelegramClick}>
              Telegram
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
