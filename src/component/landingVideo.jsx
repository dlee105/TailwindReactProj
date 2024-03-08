import React from "react";
import { useState } from "react";
import "./landingVideo.css";
import heroVideo from "../assets/video/heroVideo.mp4";
import HeroContent from "./heroContent";
import VideoPauseBtn from "./videoPauseBtn";
import BackdropBlur from "./backdropBlur";
import { BURGER_VIEW } from "./hamburgerMenu";

function LandingVideo() {
  const VIDEO = {
    src: heroVideo,
    type: "video/mp4",
  };

  const [video, setVideo] = useState(VIDEO);

  return (
    <>
      <section class="relative w-full h-screen flex flex-col items-center justify-center text-center text-white py-0 px-3 z-[20]">
        <div
          class={
            "video-dock absolute top-0 left-0 w-full h-full overflow-hidden"
          }
        >
          <video
            id="heroVid"
            aria-hidden="true"
            class="relative min-w-full min-h-full absolute object-cover"
            autoPlay
            playsinline
            muted
            loop
          >
            <source src={video.src} type={video.type} />
          </video>
        </div>
        <VideoPauseBtn />
        <HeroContent />
      </section>
    </>
  );
}

export default LandingVideo;
