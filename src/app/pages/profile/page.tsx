"use client";
import Footer from "@/app/components/Footer/Footer";
import "./profile.page.css";
import Navbar from "@/app/components/Navbar/Navbar";
import { useState } from "react";

export default function Profile() {
  const profileOptions = [
    {
      id: "profile",
      text: "Profile",
    },
    {
      id: "subscription",
      text: "Subscription",
    },
    {
      id: "payments",
      text: "Payments",
    },
    {
      id: "config",
      text: "Configuration",
    },
  ];
  const [option, setOption] = useState("profile");

  return (
    <div className="w-100 h-100">
      <Navbar></Navbar>

      <div className="d-flex h-100 pt-5">
        <div className="side-bar">
          {profileOptions.map((poption, id) => (
            <div
              key={id}
              onClick={() => setOption(poption.id)}
              className={`side-bar-option ${
                option === poption.id ? "active" : ""
              }`}
            >
              {poption.text}
            </div>
          ))}
          
        </div>
        <div className="profile-content px-5 mx-5 ">
          <div
            className={`side-bar-option ${
              option === "profile" ? "" : "d-none"
            }`}
          >
            <h1>User Data</h1>
            Data
          </div>
          <div
            className={`side-bar-option ${
              option === "subscription" ? "" : "d-none"
            }`}
          >
            <h1>Subscription</h1>
            Data
          </div>
          <div
            className={`side-bar-option ${
              option === "payments" ? "" : "d-none"
            }`}
          >
            <h1>Payments</h1>
            Data
          </div>
          <div
            className={`side-bar-option ${option === "config" ? "" : "d-none"}`}
          >
            <h1>Config</h1>
            Data
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}
