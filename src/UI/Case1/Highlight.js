import React from 'react';
import './Highlight.css';

const Highlight = () => {
  const highlights = [
    {
      title: "Reduced CS inquiries",
      description: "New features like payment management led to a 30% drop in customer support requests."
    },
    {
      title: "Increased user engagement",
      description: "Users spent 20% more time in their accounts, finding it easier to access information."
    },
    {
      title: "Boost Upsell and Partner Offer Conversions",
      description: "The introduction of exclusive deals and upsell opportunities boosted conversion rates by 15%."
    },
    {
      title: "Decreased time to complete key tasks",
      description: "Users can now complete key actions like tracking orders and managing payments 25% faster."
    }
  ];

  return (
    <section className="highlight">
      {/* Desktop */}
      <div className="highlight-desktop">
        <div className="highlight-content">
          {highlights.map((highlight, index) => (
            <div key={index} className="highlight-card">
              <h3 className="highlight-title">{highlight.title}</h3>
              <p className="highlight-description">{highlight.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Tablet */}
      <div className="highlight-tablet">
        <div className="highlight-content">
          {highlights.map((highlight, index) => (
            <div key={index} className="highlight-card">
              <h3 className="highlight-title">{highlight.title}</h3>
              <p className="highlight-description">{highlight.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile */}
      <div className="highlight-mobile">
        <div className="highlight-content">
          {highlights.map((highlight, index) => (
            <div key={index} className="highlight-card">
              <h3 className="highlight-title">{highlight.title}</h3>
              <p className="highlight-description">{highlight.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Highlight;
