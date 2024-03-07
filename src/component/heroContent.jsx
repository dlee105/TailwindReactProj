import React from "react";
import { useState } from "react";

import ImageButton from "./imageButton";
import "./imageButton.css";

function HeroContent() {
  const example = {
    title: "The Spring Collection",
    links: [
      { label: "Shop Women", url: "/" },
      {
        label: "Shop Men",
        url: "/",
      },
    ],
  };

  return (
    <div class="absolute top-0 right-0 bottom-0 left-0 z-[50]">
      <div class="container absolute  m-auto bottom-5 left-0 right-0 ">
        <div class="cols-container text-center flex flex-col space-y-4">
          <p>Explore</p>
          <h2>{example.title}</h2>
          <div class="flex justify-center">
            {example.links.map((link, i) => (
              <ImageButton link={link} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroContent;
