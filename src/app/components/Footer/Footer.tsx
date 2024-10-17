import React, { FC } from "react";

interface FooterProps {}

const Footer: FC<FooterProps> = () => (
  <div className="">
    <div className="Footer d-flex">
      <div className="col-3">
        Providing training courses and manuals for house cleaners for onboarding and high cleaning standars
      </div>
      
      <div className="col-3"></div>
      <div className="col-3 text-start">
        <h3 className="pb-3">Quick Links</h3>
        <p>Privacy Policy</p>
        <p>Tearms of service</p>
      </div>
      <div className="col-3 text-start">
        <h3 className="pb-3">Get In Touch</h3>
        <p>correo@correo.com</p>
        <p>737-758-3198</p>
      </div>
    </div>
    <div className="bottom-footer">
      @ 2024 Clean Smart Academy. All Rights Reserved.
    </div>
  </div>
);

export default Footer;
