import "./ContactUs.css";

import React, { useState } from "react";
import { Toast, toast } from "react-toastify";
import { type } from "@testing-library/user-event/dist/type";
import {isEmail} from "./RegEx"
import emailjs from '@emailjs/browser';


const ContactUs = () => {
  const [value, setValue] = useState({
    name1: "",
    email: "",
    phone: "",
    message: "",
  });

  const inputHandler = (e) => {
    setValue((pre) => {
      return {
        ...pre,
        [e.target.name]: e.target.value,
      };
    });
    console.log(e.target.value);
  };

  const clickHandler = (e) => {
    e.preventDefault();
    if (value.name1 === "" || value.email === "" || value.phone === "") {
      toast.error("Please fill all fields");
    } else {
        if(!isEmail(value.email)){
            toast.error("Please enter valid email format")
        }else{
            emailjs.sendForm("service_e74sfgi",
    "template_nl4ckfd"
    ,e.target,
    "n5hkRTB5W-VCp_pFz"
    ).then(res=>{
        
       toast.success("Thank you for your information we will get back to you shortly.")
       setValue({
        name1: "",
        email: "",
        phone: "",
        message: "",
    });
        }).catch(err=> toast.error("Somthing went wrong"));

            
            // setValue({
            //     name1: "",
            //     email: "",
            //     phone: "",
            //     message: "",
            // });
        }
      
    }
  };

  

 const sendMail =(e)=>{
    e.preventDefault();

    
 }

  return (
    <div className="form_section">
      <form onSubmit={clickHandler} className="form">
        <label>Your Name</label>
        <input
          onChange={inputHandler}
          value={value.name1}
          name="name1"
          autoComplete="off"
          type="text"
          placeholder="Name"
        ></input>

        <label htmlFor="">Email</label>
        <input
          onChange={inputHandler}
          value={value.email}
          name="email"
          id="email"
          autoComplete="off"
          type="email"
          placeholder="Email"
        />

        <label>Phone</label>
        <input
          onChange={inputHandler}
          value={value.phone}
          name="phone"
          type="text"
          maxLength={10}
          autoComplete="off"
          placeholder="Phone"
        ></input>

        <label>Message</label>
        <textarea
          onChange={inputHandler}
          value={value.message}
          name="message"
          autoComplete="off"
          type="text"
          rows="4"
          placeholder="Type Your Message Here"
        ></textarea>

        <button  className="btn2">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactUs;
