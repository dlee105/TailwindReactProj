import React from "react";
import { useState } from "react";
import "./landingVideo.css";
import heroVideo from "../assets/video/heroVideo.mp4";
import HeroContent from "./heroContent";

function LandingVideo() {
  const VIDEO = {
    src: heroVideo,
    type: "video/mp4",
  };

  return (
    <section class="relative w-full h-screen flex flex-col items-center justify-center text-center text-white py-0 px-3">
      <div
        class={"video-dock absolute top-0 left-0 w-full h-full overflow-hidden"}
      >
        <video
          aria-hidden="true"
          class="relative min-w-full min-h-full absolute object-cover"
          autoPlay
          playsinline
          muted
          loop
        >
          <source src={VIDEO.src} type={VIDEO.type} />
        </video>
      </div>
      <HeroContent />
    </section>
  );
}

export default LandingVideo;
