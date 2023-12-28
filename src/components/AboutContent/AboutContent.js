import React from "react";
import { DarkButton } from "../styles/Button";
import "../AboutContent/AboutStyles.css";
import React2 from "../AboutContent/profilePicture.jpeg";

const AboutContent = () => {
  return (
    <div className="about" id="about">
      <div
        style={{
          background: "#1a1919",
          display: "flex",
          width: "80%",
          height: "100%",
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: "4rem",
          marginBottom: "4rem",
          padding: "1rem",
        }}
      >
        <div className="left">
          <h1>Who Am I</h1>
          <p>
            {" "}
           My expertise lies in seamlessly
            integrating robust business logic into web applications.
             What sets me apart is not just my current skill set,
            but my unwavering enthusiasm for continuous learning. I thrive on
            staying ahead of the curve, always seeking opportunities to delve
            into new technologies and applying them to address
            challenges. A fast learner at heart, I am ever-ready to take on
            fresh challenges and explore novel avenues within the dynamic field
            of software development. I am actively seeking new opportunities to
            contribute my skills and passion to projects that demand excellence
            and creativity.
          </p>
          <a href="https://docs.google.com/document/d/1pB_wfi5CNM_R9XoKa2v2M8uJATjUzeQG0xSjrD368CY/edit?usp=sharing">
            <DarkButton>RESUME</DarkButton>
          </a>
        </div>
        <div className="right">
          <div className="" style={{ maxWidth: "30rem", height: "35rem" }}>
            <img
              src={React2}
              className=""
              width={"100%"}
              height={"100%"}
              alt="back"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
