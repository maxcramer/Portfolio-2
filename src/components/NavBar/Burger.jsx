import React, { useState } from "react";
import styled from "styled-components";
import RightNav from "./RightNav";
import HomeIcon from "../media/Home Icon.png";

import "./Burger.scss";

// display: none;

const StyledBurger = styled.div`
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 15px;
  right: 20px;
  display: flex;

  z-index: 20;



    display: flex;
    justify-content: space-evenly;
    flex-flow: column nowrap;
    cursor: pointer;
  

  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ open }) => (open ? "black" : "white")};
    border-radius: 10px;
    transform-origin: 3px;
    transition: all 0.3s linear;
    border: 1px solid black;

    &:nth-child(1) {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }
    &:nth-child(2) {
      transform: ${({ open }) => (open ? "translateX(100%)" : "translateX(0)")};
      opacity: ${({ open }) => (open ? 0 : 1)};
    }
    &:nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  
`;

const Burger = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <a className="home_icon_container" href="/">
        <img src={HomeIcon} alt="" />
      </a>
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </StyledBurger>
      <RightNav open={open} />
    </>
  );
};

export default Burger;
