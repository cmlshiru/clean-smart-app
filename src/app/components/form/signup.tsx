"use client";
import React from "react";
import axios from "axios";
import Form from "./Form";


const Signup = () => {
    const handleFormSubmit = async (form: FormState) => {
      try {
        const res = await axios.post("http://localhost:3000/signup", form);
        if (res.status === 200) {
          alert("Signup successful!");
        } else {
          alert("Signup failed!");
        }
      } catch (err) {
        alert("There was an error with your signup :(");
      }
    };
  

  
    return (
      <div className="contact">
        <div className="container">
          <div className="top">
            <h1>Sign Up</h1>
          </div>
          <div className="bottom">
            <Form onSubmit={handleFormSubmit} />
          </div>
        </div>
      </div>
    );
  };
  
  export default Signup;