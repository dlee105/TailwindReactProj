import React from "react";
import PropTypes from "prop-types";
import "./imageButton.css";

function ImageButton(props) {
  //   console.log(props.link);
  return (
    <div className="hero-link-btn">
      <a class="no-underline text-[color:white]" href={props.link.url}>
        {props.link.label}
      </a>
    </div>
  );
  //
}

export default ImageButton;
