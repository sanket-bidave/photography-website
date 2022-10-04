import "./FooterStyle.css";

import React from "react";
import {
  FaHome,
  FaPhone,
  FaMailBulk,
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
const Footer = () => {
  return (
    <div className="footer">
      <div className="symbol">
        <div>
          <h5>1400 +</h5>
          <p>pictures clicked</p>
        </div>
        <div>
          <h5>400 +</h5>
          <p>Clients Served</p>
        </div>
        <div>
          <h5>8 +</h5>
          <p>Years of Experience</p>
        </div>
      </div>
      <div className="footer-section">
        <div className="left">
          <FaHome size={20} style={{ color: "white", margineRight: "2rem" }} />
          <div>
            <p>123 Housing Socitey </p>
            <p>India</p>
          </div>

          <div className="phone">
            <h4>
              <FaPhone
                size={20}
                style={{ color: "white", margineRight: "2rem" }}
              />
              9404676501
            </h4>
          </div>
          <div className="email">
            <h4>
              <FaMailBulk
                size={20}
                style={{ color: "white", margineRight: "2rem" }}
              />
              sachinnalawade@gmail.com
            </h4>
          </div>
        </div>

        <div className="right">
          <h4>About the company</h4>
          <p>This is me Sachin Nalawade. CEO & Founder of Nusta Shoot</p>
          <div className="social">
            <FaInstagram
              size={30}
              style={{ color: "white", margineRight: "1rem" }}
            />
            <FaWhatsapp
              size={30}
              style={{ color: "white", margineRight: "1rem" }}
            />
            <FaFacebook
              size={30}
              style={{ color: "white", margineRight: "1rem" }}
            />
            <FaTwitter
              size={30}
              style={{ color: "white", margineRight: "1rem" }}
            />
            <FaYoutube
              size={30}
              style={{ color: "white", margineRight: "1rem" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
