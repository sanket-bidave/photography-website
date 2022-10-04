import "./PhotoCardStyle.css";
import Navbar from "../Componant/Navbar";
import Footer from "../Componant/Footer";
import GData from "./DataGallery";

import React, { useState } from "react";
import { Link } from "react-router-dom";
import weddingImp from "../Assets/wedding.jpeg";
import preWed from "../Assets/prewed.jpg";
import modelImg from "../Assets/model.jpg";
import Data from "./sachin.Data";
import { Modal, ModalHeader } from "reactstrap";
import Gallery from "./Gallery";

const PhotoCard = () => {
  const [click1, setClick1] = React.useState(false);
  const [modal, setModal] = React.useState(false);
  const [value, setVal] = React.useState({});

  const clickGallery = (id) => {
    console.log(id, "id");
    setClick1(true);
    setModal(true);
    setVal(GData[id]);
  };

  console.log(value, "yy");

  return (
    <>
      <div className="photocard">
        {click1 ? (
          <Gallery value={value} setModal={setModal} modal={modal}/>
        ) : null}

        <div className="card-section">
          {Data.map((value, index) => {
            return (
              <>
                <div className="card">
                  <h3>{value.head}</h3>
                  <p>{value.note}</p>
                  <img src={value.iamge} alt="wedding" />
                  <button className="btn2" onClick={() => clickGallery(index)}>
                    {value.button}
                  </button>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default PhotoCard;
