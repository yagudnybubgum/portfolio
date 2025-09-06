import React, { useRef } from 'react';
import './Designing.css';

const Designing = () => {
  const galleryRefs = {
    desktop: useRef(null),
    tablet: useRef(null),
    mobile: useRef(null)
  };
  
  const flowImages = [
    "/assets/1 flow case 3.png",
    "/assets/2 flow case 3.png", 
    "/assets/3 flow case 3.png"
  ];

  const scrollGallery = (direction) => {
    // Находим активную галерею (видимую на экране)
    const activeGallery = Object.values(galleryRefs).find(ref => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        return rect.width > 0 && rect.height > 0;
      }
      return false;
    });

    if (activeGallery) {
      const scrollAmount = 400; // Ширина одного изображения + отступ
      activeGallery.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="designing">
      {/* Desktop */}
      <div className="designing-desktop">
        <div className="designing-content">
          <div className="designing-left">
            <h2 className="designing-title">Designing and prototyping</h2>
          </div>
          <div className="designing-right">
            <p className="designing-text">
              Together with Djangoheads, we brainstormed and defined the key user stories, core screens, and features of the platform. Based on these insights, I developed the design to ensure it aligns with user needs and platform objectives.
            </p>
          </div>
        </div>
        <div className="designing-gallery-container">
          <button 
            className="gallery-arrow gallery-arrow-left"
            onClick={() => scrollGallery('left')}
            aria-label="Previous image"
          >
            ‹
          </button>
          <div className="designing-gallery" ref={galleryRefs.desktop}>
            {flowImages.map((image, index) => (
              <img 
                key={index}
                src={image}
                alt={`Flow Case 3 - ${index + 1}`}
                className="designing-gallery-img"
              />
            ))}
          </div>
          <button 
            className="gallery-arrow gallery-arrow-right"
            onClick={() => scrollGallery('right')}
            aria-label="Next image"
          >
            ›
          </button>
        </div>
      </div>

      {/* Tablet */}
      <div className="designing-tablet">
        <div className="designing-content">
          <div className="designing-left">
            <h2 className="designing-title">Designing and prototyping</h2>
          </div>
          <div className="designing-right">
            <p className="designing-text">
              Together with Djangoheads, we brainstormed and defined the key user stories, core screens, and features of the platform. Based on these insights, I developed the design to ensure it aligns with user needs and platform objectives.
            </p>
          </div>
        </div>
        <div className="designing-gallery-container">
          <button 
            className="gallery-arrow gallery-arrow-left"
            onClick={() => scrollGallery('left')}
            aria-label="Previous image"
          >
            ‹
          </button>
          <div className="designing-gallery" ref={galleryRefs.tablet}>
            {flowImages.map((image, index) => (
              <img 
                key={index}
                src={image}
                alt={`Flow Case 3 - ${index + 1}`}
                className="designing-gallery-img"
              />
            ))}
          </div>
          <button 
            className="gallery-arrow gallery-arrow-right"
            onClick={() => scrollGallery('right')}
            aria-label="Next image"
          >
            ›
          </button>
        </div>
      </div>

      {/* Mobile */}
      <div className="designing-mobile">
        <div className="designing-content">
          <div className="designing-left">
            <h2 className="designing-title">Designing and prototyping</h2>
          </div>
          <div className="designing-right">
            <p className="designing-text">
              Together with Djangoheads, we brainstormed and defined the key user stories, core screens, and features of the platform. Based on these insights, I developed the design to ensure it aligns with user needs and platform objectives.
            </p>
          </div>
        </div>
        <div className="designing-gallery-container">
          <button 
            className="gallery-arrow gallery-arrow-left"
            onClick={() => scrollGallery('left')}
            aria-label="Previous image"
          >
            ‹
          </button>
          <div className="designing-gallery" ref={galleryRefs.mobile}>
            {flowImages.map((image, index) => (
              <img 
                key={index}
                src={image}
                alt={`Flow Case 3 - ${index + 1}`}
                className="designing-gallery-img"
              />
            ))}
          </div>
          <button 
            className="gallery-arrow gallery-arrow-right"
            onClick={() => scrollGallery('right')}
            aria-label="Next image"
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
};

export default Designing;
