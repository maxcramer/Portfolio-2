import React from "react";

import "./Footer.scss";

function Footer() {
  return (
    <div className="footer_container">
      <div className="footer_info">
        <div>
          <a href="/">Home</a>
          <a href="/GD">Graphic Design</a>
          <a href="/web-development">UI & UX / Web Development</a>
          <a href="/CV">CV</a>
          <a href="/Sab-butter">
            The Adventures of Sabba & Butterscotch - Childrens Book
          </a>
          <a href="/onewheel">Onewheel</a>
          <a href="/contact">Contact</a>
        </div>
        <div>
          <h5>Graphic Design</h5>
          <a href="/GD#branding">Branding</a>
          <a href="/GD#print">Print</a>
          <a href="/GD#digital">Digital</a>
          <a href="/GD#artwork">Artwork</a>
        </div>
        <div>
          <h5>Contact</h5>
          <a href="mailto:info@maxcramer101.com">Info@maxcramer101.com</a>
          <a target="#blank" href="https://www.linkedin.com/in/max-cramer/">
            LinkedIn
          </a>
        </div>
      </div>
      <p>© maxcramer101.com 2024</p>
    </div>
  );
}

export default Footer;
