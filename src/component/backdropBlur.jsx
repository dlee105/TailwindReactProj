import React, { useState } from "react";
import "./backdropBlur.css";
import { BURGER_VIEW } from "./hamburgerMenu";

function BackdropBlur() {
  const [state, setState] = useState(false);

  return (
    <div
      className="grid backdrop-blur bg-black/50 fixed h-full w-full h-full z-[90] backdrop-hide"
      id="backdrop-effect"
    ></div>
  );
}

export default BackdropBlur;
