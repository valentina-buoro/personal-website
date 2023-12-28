import React from "react";
import "../Footer/FooterStyles.css";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="social" style={{ marginTop: "2rem" }}>
            <a href="https://github.com/queen-x-vee">
              <FaGithub
                size={30}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
            </a>
            <a href="https://twitter.com/valentinaBuoro">
              <FaTwitter
                size={30}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
            </a>
            <a href="https://linkedin.com/in/valentina-buoro">
              <FaLinkedin
                size={30}
                style={{ color: "#fff", marginRight: "1rem" }}
              />
            </a>
          </div>
          <div className="copyright">
            <p>Created by Valentina Buoro  &copy; 2022</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
