import React, { useState, useEffect } from 'react';
import './Video.css';

const Video = () => {
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
    <section className="video">
      <div className="video-container">
        {isLoading && (
          <div className="video-loader">
            <div className="loader-spinner"></div>
            <p>Загрузка видео...</p>
          </div>
        )}
        
        {showVideo && (
          <div className="video-wrapper">
            <iframe
              src="https://player.vimeo.com/video/1053883929?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;autoplay=1&amp;loop=1&amp;controls=0&amp;muted=1"
              width="100%"
              height="100%"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              title="Denis Sotskii Showreel"
              className="video-iframe"
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default Video;
