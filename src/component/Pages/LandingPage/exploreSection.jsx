import React from "react";
import SmImageBlock from "./smImageBlock";

import img1 from "../../../assets/images/img1.jpg";
import img2 from "../../../assets/images/img2.jpg";
import img3 from "../../../assets/images/img3.jpg";

export const images = [
  {
    label: "Women",
    src: img1,
  },
  {
    label: "Men",
    src: img2,
  },
  {
    label: "Kids",
    src: img3,
  },
];

function ExploreSection(props) {
  console.log(images);

  return (
    <>
      <div class="mx-16 mb-16 grid sm:grid-rows-3 md:grid-cols-3 lg:grid-cols-3 gap-x-5 sm:gap-y-10">
        {images.map((img, index) => (
          <SmImageBlock src={img} />
        ))}
      </div>
    </>
  );
}

export default ExploreSection;
