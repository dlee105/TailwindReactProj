import React from "react";
import "./navLinks.css";

function NavLinks(props) {
  let defaultCSS = `grid grid-cols-${props.data.length}`;
  let linkCSS = `flex items-${props.pos} justify-center`;
  //   let defaultCSS = `grid grid-cols-6 gap-4`;

  return (
    <div class={defaultCSS}>
      {props.data.map((component, index) => (
        <div class="flex items-center justify-center">
          <a href="/">{component.label}</a>
        </div>
      ))}
    </div>
  );
}

export default NavLinks;
