import React from "react";

function SmImageBlock(props) {
  return (
    <>
      <div class="md:text-left lg:text-left cursor-pointer">
        <img
          class="object-cover aspect-square shadow-2xl"
          src={props.src.src}
          alt=""
        />

        <p class="lg:pt-3 md:pt-3 text-stone-500 ">
          {props.src.label}'s Collection
        </p>
        <a href="/" className="md:w-fit lg:w-fit flex">
          <p className="special-link m-auto">Shop Now</p>
        </a>
      </div>
    </>
  );
}

export default SmImageBlock;
