import React from "react";
import { useState, useEffect } from "react";
import "./styles/navbar.css";
import throttle from "lodash.throttle";

import NavLinks from "./navLinks";
import HamburgerMenu from "./hamburgerMenu";
import { BURGER_VIEW } from "./hamburgerMenu";

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

  const navAlignmentFull = // FOR FULL WIDTH VIEW
    (
      <div class="grid grid-cols-7 px-0">
        <NavLinks data={LEFT_NAV} pos="start" />
        <div class="grid grid-cols-subgrid gap-4 col-span-3"></div>
        <div class="grid grid-cols-subgrid gap-4 col-span-2"></div>
        <NavLinks data={RIGHT_NAV} pos="end" />
      </div>
    );

  const navAlignmentHalf = // FOR HALF WIDTH VIEW
    (
      <>
        <div class="grid grid-cols-4 px-0">
          <NavLinks data={LEFT_NAV} pos="start" />
          <div class="grid grid-cols-subgrid gap-4 col-span-1"></div>
          <div class="grid grid-cols-subgrid gap-4 col-span-1"></div>
          <NavLinks data={RIGHT_NAV} pos="end" />
        </div>
      </>
    );

  const navAlignmentPhone = // FOR QUARTER WIDTH VIEW
    (
      <>
        <HamburgerMenu />
      </>
    );

  const [structure, setStructure] = useState();
  const [color, setColor] = useState(false);

  // HELPER FUNCTIONS

  // CSS TRANSFORMATIONS
  const transparentBG = `top-0 left-0 w-full z-[90] p-4 py-7
                        text-[color:white] theme-dark-gray
                        bg-[transparent] fixed theme-dark-gray
                        transition-all ease-in-out duration-400 
                        `;

  const whiteBG = `top-0 left-0 w-full z-[90] p-4 py-7
                  text-[color:black] theme-dark-gray 
                  bg-[color:white] fixed theme-dark-gray 
                  transition-all ease-in-out duration-400 delay-150
                  `;

  //

  const changeColor = () => {
    if (window.scrollY > 0 || (window.scrollY == 0 && BURGER_VIEW)) {
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
    if (window.scrollY == 0 && !BURGER_VIEW) {
      setColor(false);
    }
  };

  useEffect(() => {
    window.addEventListener("load", () => {
      if (window.innerWidth <= 900) setStructure(navAlignmentPhone);
      else if (window.innerWidth <= 1600) setStructure(navAlignmentHalf);
      else if (window.innerWidth <= 1920) setStructure(navAlignmentFull);
    });
  }, []);

  useEffect(() => {
    window.addEventListener("resize", () => {
      // console.log(window.innerWidth);
      if (window.innerWidth <= 900) setStructure(navAlignmentPhone);
      else if (window.innerWidth <= 1600) setStructure(navAlignmentHalf);
      else if (window.innerWidth <= 1920) setStructure(navAlignmentFull);
    });
  }, []);

  useEffect(() => {
    const backdrop = document.getElementById("backdrop-effect");
    backdrop.addEventListener("click", () => {
      if (window.scrollY == 0 && BURGER_VIEW) {
        setTimeout(() => setColor(false), 2000);
      }
    });
  }, [structure]);

  window.addEventListener(
    "scroll",
    throttle(() => {
      changeColor();
    }),
    1000
  );

  const phoneViewCheck = () => {
    return window.innerWidth <= 900;
  };

  return (
    <>
      <header
        className={color ? whiteBG : transparentBG}
        onMouseEnter={() => {
          staticHoverEffectOn();
        }}
        onMouseLeave={() => {
          staticHoverEffectOff();
        }}
      >
        <h1
          id="logo"
          class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 logo-font"
        >
          PERSCH
        </h1>
        {structure}
      </header>
    </>
  );
}

export default Navbar;
