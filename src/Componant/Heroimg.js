import "./HeroImgStyle.css";

import React from "react";

import IntroImg from "../Assets/cam1.webp";
import { Link } from "react-router-dom";
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


const Heroimg = () => {


  return (
    <div className="hero">
    
      <div className="mask">
        <img className="intro-img" src={IntroImg} altIntroImg />
      </div>
      <div className="content">
        <p>Taking Care of Our Brand</p>
        <h1>Sachin Nalawade Photography</h1>
        <div className="whatsapp_div"></div>
        <div className="btn3">
          <Link to="/Portfolio" className="btn">
            Portfolio
          </Link>
          <Link to="/contact" className="btn btn-light">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Heroimg;
