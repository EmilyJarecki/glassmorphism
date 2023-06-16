import React, { useState, useEffect } from "react";

const About = () => {
  const [about, setAbout] = useState(null);
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  useEffect(() => {
    async function getAboutData() {
      const response = await fetch("./about.json");
      const data = await response.json();
      setAbout(data);
    }
    getAboutData();
  }, []);

  const loaded = () => {
    return (
      <div>
        {about.map((desc, index) => (
          <div className="mapped" key={index}>
            <div className="about-cover">
              <div className="desc-img">EJ</div>
              <p className="desc-name">{desc.name}</p>
              <p className="desc-title">{desc.title}</p>
              <a
                className="download-button"
                target="_blank"
                href="https://drive.google.com/file/d/1ve3wTbX5w10iZXTcmxvhhINBy83zIrHH/view?usp=share_link"
              >
                Download Resume
              </a>
            </div>
            <div>
              <div className="accordian"></div>
            </div>
          </div>
        ))}
      </div>
    );
  };

  return about ? (
    loaded()
  ) : (
    <div class="newtons-cradle">
      <div class="newtons-cradle__dot"></div>
      <div class="newtons-cradle__dot"></div>
      <div class="newtons-cradle__dot"></div>
      <div class="newtons-cradle__dot"></div>
    </div>
  );
};
export default About;
