import React from "react";
import Navbar from "../Componant/Navbar";
import Footer from "../Componant/Footer";
import HeroImg2 from "../Componant/HeroImg2";
import PhotoCard from "../Componant/PhotoCard"

const Portfolio = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="PORTFOLIO" text="Some of my works" />
      <PhotoCard/>
      <Footer />
    </div>
  );
};

export default Portfolio;
