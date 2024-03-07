import React from "react";
import { useState } from "react";
import "./navbar.css";

import NavLinks from "./navLinks";
import HamburgerMenu from "./hamburgerMenu";

function Navbar() {
  const LEFT_NAV = [
    {
      label: "Men",
    },
    { label: "Women" },
    { label: "Kids" },
  ];

  const RIGHT_NAV = [
    {
      label: "Contact",
    },
    { label: "Notification" },
    { label: "MyPersch" },
  ];
  // HELPER FUNCTIONS

  // CSS TRANSFORMATIONS
  const transparentBG = `top-0 left-0 w-full z-[90] p-3
                        text-[color:white] theme-dark-gray
                        bg-[transparent] fixed theme-dark-gray
                        transition-all ease-in-out duration-500`;

  const whiteBG = `top-0 left-0 w-full z-[90] p-3
                  text-[color:black] theme-dark-gray 
                  bg-[color:white] fixed theme-dark-gray 
                  transition-all ease-in-out duration-500 delay-50`;

  const navAlignmentFull = (
    <div class="grid grid-cols-3 px-10">
      <NavLinks data={LEFT_NAV} pos="start" />
      <h1 id="logo">Persch</h1>
      <NavLinks data={RIGHT_NAV} pos="end" />
    </div>
  );

  const navAlignmentPhone = (
    <div class="grid grid-cols-3 px-10">
      <NavLinks data={LEFT_NAV} />
      <h1 id="logo">Persch</h1>
      <NavLinks data={RIGHT_NAV} />
    </div>
  );

  //
  const [structure, setStructure] = useState(navAlignmentFull);
  const [color, setColor] = useState(false);

  const changeColor = () => {
    if (window.scrollY > 0) {
      setColor(true);
    } else {
      setColor(false);
    }
  };
  const staticHoverEffectOn = () => {
    if (window.scrollY == 0) {
      setColor(true);
    }
  };
  const staticHoverEffectOff = () => {
    if (window.scrollY == 0) {
      setColor(false);
    }
  };

  window.addEventListener("resize", () => {
    console.log(window.innerWidth <= 800);
  });

  window.addEventListener("scroll", () => {
    changeColor();
  });

  // window.addEventListener("resize", () => {
  //   if (window.innerWidth <= 500) setStructure(navAlignmentPhone);
  //   if (window.innerWidth <= 950) setStructure(navAlignmentHalf);
  //   if (window.innerWidth <= 1920) setStructure(navAlignmentFull);
  // });

  return (
    <header
      className={color ? whiteBG : transparentBG}
      onMouseEnter={() => {
        console.log(1);
        staticHoverEffectOn();
      }}
      onMouseLeave={() => {
        staticHoverEffectOff();
      }}
    >
      {structure}
      <HamburgerMenu />
    </header>
  );
}

export default Navbar;
