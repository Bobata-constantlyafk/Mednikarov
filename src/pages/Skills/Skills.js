import React, { useState, useEffect } from "react";
import "./Skills.css";

function Skills() {
  const [slide, setSlide] = useState(0);
  const [renderedSlide, setRenderedSlide] = useState(slide);

  useEffect(() => {
    setTimeout(() => {
      setRenderedSlide(slide);
    }, 100);
  }, [slide]);

  const slides = [
    ["HTML", "CSS", "JavaScript", "React", "Node.js", "PHP", "Python", "Ruby"],
    ["Mama", "Cita", "OO", "EE", "AAA", "IHA", "Uhu", "EHO"],
    ["Young Thugg", "Jeffery", "Thugger", "King Slime", "Slimious", "Thugga thugga", "Sex", "Spider"],
    ["Orangutan", "Chimpanzee", "Lemur", "Macac", "Glorilla", "Humans", "Python", "Ruby"],
  ];

  const slideTitles = ["Programming", "Lyrics", "Thugg", "Monke"];

  return (
    <div className="skills-section" id="skills">
      <h1 className="skills-header">MY SKILLS</h1>
      <div className="skills-container">
        
          <div className="vertical-text">
            <h2 key={slide}>
              {slideTitles[slide]}
            </h2></div>

          <div className="content-wrapper">
          <div className="cards-container">
            {slides.map((slideContent, slideIndex) =>
              slideContent.map((tech, i) =>
                slideIndex === renderedSlide && (
                  <div
                    key={`${slideIndex}-${i}`}
                    className={`tech-card${
                      slide === slideIndex ? " animated" : ""
                    }`}
                    style={{ animationDelay: `${i * 100}ms` }}
                  >
                    {/* Icon goes here */}
                    <p>{tech}</p>
                  </div>
                )
              )
            )}
          </div>
          </div>
          <div className="skills-slider">
            {Array(4)
              .fill(0)
              .map((_, i) => (
                <div
                  key={i}
                  className={`slider-dot${slide === i ? " active" : ""}`}
                  onClick={() => setSlide(i)}
                ></div>
              ))}
          </div>
          
        
      </div>
    </div>
  );
}

export default Skills;
