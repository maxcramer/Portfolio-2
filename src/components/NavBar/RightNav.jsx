import React from "react";
import styled from "styled-components";

// import logo from "../media/FTH_Logo.png";
// import tartan from "../media/shutterstock_512175802.jpg";

// import "./RightNav.css";

// display: flex;
// flex-flow: row nowrap;
// list-style: none;

// li {
//   padding: 0px 10px;
// }

// @media (max-width: 768px) {}

const UL = styled.ul`
    flex-flow: column nowrap;
    background-color: black;
   
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0))" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding: 3.5rem 1rem;
    margin-top: 0;
    transition: transform 0.3s ease;
    z-index: 10;
    list-style: none;
    display: flex;

    a {
      text-decoration: none
    }

    li {
    color: white;
    padding: 1rem 0;
    text-align: left;
    font-size: 25px;
    font-weight: bold;
    font-family: arial;
    }

    img {
          width: 70%;
    padding: 0 0 1rem 0;
}
    }
  }
`;

const RightNav = ({ open }) => {
  return (
    <UL open={open}>
      <a href="/">{/* <img src={} alt="" /> */}</a>
      <a href="/">
        <li>Home</li>
      </a>
      <a href="/rules&regs">
        <li>Rules, Regs, & FAQ</li>
      </a>
      <a href="/team">
        <li>Meet The Team</li>
      </a>
      <a href="/accommodation">
        <li>Accommodation</li>
      </a>
      {/* <a href="/shop">
        <li>Shop</li>
      </a> */}
      {/* <a href="/european-onewheel-league">
        <li>EOL</li>
      </a> */}
      {/* <a href="/sponsors">
        <li>Sponsors</li>
      </a> */}
      <a href="/supporters">
        <li>Supporters</li>
      </a>
    </UL>
  );
};

export default RightNav;
