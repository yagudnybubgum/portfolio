import React, { useState, useEffect } from 'react';
import './Case1Video.css';

const Case1Video = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    // Имитируем загрузку видео
    const timer = setTimeout(() => {
      setIsLoading(false);
      setShowVideo(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="case1-video">
      <div className="case1-video-container">
        {isLoading && (
          <div className="case1-video-loader">
            <div className="case1-loader-spinner"></div>
            <p>Загрузка видео...</p>
          </div>
        )}
        
        {showVideo && (
          <div className="case1-video-wrapper">
            <iframe
              src="https://player.vimeo.com/video/1029174248?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;autoplay=1&amp;loop=1&amp;controls=0&amp;muted=1"
              width="100%"
              height="100%"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              title="Personal Account"
              className="case1-video-iframe"
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default Case1Video;
