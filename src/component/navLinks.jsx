import React from "react";

function NavLinks(props) {
  console.log(props.data.length);

  let defaultCSS = `grid grid-cols-${props.data.length}`;
  //   let defaultCSS = `grid grid-cols-6 gap-4`;

  return (
    <div class={defaultCSS}>
      {props.data.map((component, index) => (
        <div class="flex items-center justify-center">{component.label}</div>
      ))}
    </div>
  );
}

export default NavLinks;
