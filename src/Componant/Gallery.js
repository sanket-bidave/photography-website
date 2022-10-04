import "./GalleryStyle.css";

import React, { useState } from "react";
import Modal from "react-modal";
import GData from "./DataGallery";
import PhotoCard from "./PhotoCard";
import CloseIcon from "@mui/icons-material/Close";
import ImageSlider from "../Componant/ImageSlider";
import { FlashAuto } from "@mui/icons-material";


const Gallery = ({ modal, setModal, value }) => {


  const clickClose = () => {
    setModal(false);
  }

 


  return (
    <>
      {modal ? (
        <div className="modal_section">
          <Modal isOpen={modal} className="model_div">
            
            <div className="img_div">
            {Object.values(value).map((v) => {
              return <img src={v} alt="wedding"  className="img_div col-md-4" />;
            })}
            </div>
            
            <div className="close_div">
                <CloseIcon onClick={clickClose} />
                </div>
          </Modal>
        </div>
      ) : null}
    </>
  );
};

export default Gallery;
