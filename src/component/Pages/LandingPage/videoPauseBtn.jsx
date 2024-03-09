import React, { useEffect, useState } from "react";
import "./styles/videoPauseBtn.css";

function VideoPauseBtn() {
  const [vidPause, setVidPause] = useState(false);
  const [path, setPath] = useState(
    <path
      className="z-[300]"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15.75 5.25v13.5m-7.5-13.5v13.5"
    />
  );

  let btnPath = () => {
    if (vidPause) {
      setPath(
        <path
          className="z-[300]"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.75 5.25v13.5m-7.5-13.5v13.5"
        />
      );
    } else {
      setPath(
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"
        />
      );
    }
  };

  const togglePlay = () => {
    const v = document.getElementById("heroVid");
    if (vidPause) v.play();
    else v.pause();
    setVidPause(!vidPause);
    console.log(vidPause);
    btnPath();
  };

  return (
    <>
      <svg
        onClick={togglePlay}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6 absolute bottom-0 left-0 m-5 z-[75] _play-btn cursor-pointer"
      >
        {path}
      </svg>
      {/* <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.75 5.25v13.5m-7.5-13.5v13.5"
        />
      </svg> */}
    </>
  );
}

export default VideoPauseBtn;
