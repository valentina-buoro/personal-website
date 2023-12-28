import React from "react";
import "../Hero/Hero.css";
import Laptop from "../Hero/grey.jpeg";
import { DarkButton, LightButton } from "../styles/Button";

const HeroImage = () => {
  return (
    <div className="hero" id="home">
      <div className="mask">
        <img className="into-img" src={Laptop} alt="latoptop" />
      </div>

      <div className="content linear">
        <p className="revealUp">HELLO &#128075;, I'M VALENTINA</p>
        <h1>Software Developer</h1>
        <h3>
          <i> I am a self-taught software developer driven by a deep passion for
            crafting optimized, low-latency web applications adorned with
            user-friendly interfaces. </i>
        </h3>

        <div className="button">
          <DarkButton className="btn left">
            <a href="/projects">VIEW PROJECTS</a>
          </DarkButton>

          <LightButton className="btn right" style={{ marginLeft: "2.5rem" }}>
            <a href="#contact">CONTACT ME</a>
          </LightButton>
        </div>
      </div>
    </div>
  );
};

export default HeroImage;
