import React from 'react';
import './Skills.css';

const CHIP_LIST = [
  'UX','UI','Design Systems','Variables','Typography','Copywriting','Usability','Design Sprint','Prototypes','Email Design',
  'User Testing','Wireframes','Presentation Design','CJM','Teamwork','HTML, CSS','No-Code','Motion','Figma','Midjourney',
  'Framer','Rive','Illustrator','Photoshop','After Effects','Jitter','Chat GPT','Notion','+ More'
];

const Skills = () => {
  return (
    <section className="skills">
      {/* Desktop/Tablet */}
      <div className="skills-desktop">
        <div className="skills-desktop-content">
          <h2 className="skills-heading">Skills</h2>
          <div className="chips">
            {CHIP_LIST.map(skill => (
              <span className={`chip${skill === '+ More' ? ' chip-more' : ''}`} key={skill}>{skill}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile */}
      <div className="skills-mobile">
        <div className="skills-mobile-content">
          <h2 className="skills-heading">Skills</h2>
          <div className="chips">
            {CHIP_LIST.map(skill => (
              <span className={`chip${skill === '+ More' ? ' chip-more' : ''}`} key={skill}>{skill}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;


