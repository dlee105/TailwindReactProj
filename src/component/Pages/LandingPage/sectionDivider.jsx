import React from "react";
import "./styles/sectionDivider.css";

function SectionDivider(props) {
  return (
    <div class="divider my-8">
      <span className="divider-text sm:text-lg lg:text-3xl md:text-2xl">
        {props.label}
      </span>
    </div>
  );
}

export default SectionDivider;
