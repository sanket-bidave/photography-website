import React from "react";
import Navbar from "../Componant/Navbar";
import HeroImg2 from "../Componant/HeroImg2";
import Footer from "../Componant/Footer";
import ContactUs from "../Componant/ContactUs"

const Contact = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 heading="CONTACT" text="Let's have a chat"/>
      <ContactUs/>
      <Footer />
    </div>
  );
};

export default Contact;
  