import React from "react";
import { useState } from "react";

export let BURGER_VIEW = false;

function HamburgerMenu() {
  const [burger, setBurger] = useState(false);
  const [burgerCSS, setBurgerCSS] = useState(
    `absolute bg-white top-14 left-0 grid w-full z-[80] grid grid-rows-12 hidden`
  );

  const openBurger = () => {
    if (burger == true) {
      BURGER_VIEW = false;
      setBurgerCSS(
        `absolute bg-white top-14 left-0 grid w-full z-[80] grid grid-rows-12` +
          " hidden"
      );
    } else {
      BURGER_VIEW = true;
      setBurgerCSS(
        `absolute bg-white top-14 left-0 grid w-full z-[80] grid grid-rows-12`
      );
    }
    setBurger(!burger);
    console.log(burgerCSS, BURGER_VIEW);
  };

  return (
    <>
      <button
        onClick={openBurger}
        className={`absolute top-1/2 left-10 transform -translate-x-1/2 -translate-y-1/2 
        }`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-8 h-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
      <div class={burgerCSS}>
        <ul class="grid grid-cols-4">
          <li class="text-black flex justify-center items-center ">
            <a href="#">Home</a>
          </li>
          <li class="text-black flex justify-center items-center ">
            <a href="#">About</a>
          </li>
          <li class="text-black flex justify-center items-center ">
            <a href="#">Services</a>
          </li>
          <li class="text-black flex justify-center items-center ">
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default HamburgerMenu;
