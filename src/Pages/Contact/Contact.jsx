import React from "react";

import "./Contact.scss";

const Contact = () => {
  return (
    <div className="contact_container">
      <div className="contact_title_parent">
        <h1>Contact</h1>
      </div>
      <div className="contact_info">
        <p>Like what you see and want to learn more?</p>
        <div>
            <p>Please contact Max at <a href="mailto:info@maxcramer101.com">Info@maxcramer101.com</a></p> 
        </div>
      </div>
    </div>
  );
};

export default Contact;
