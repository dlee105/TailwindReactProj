import "./App.css";

import Navbar from "./component/Pages/LandingPage/navbar";
import LandingVideo from "./component/Pages/LandingPage/landingVideo";
import BackdropBlur from "./component/Pages/LandingPage/backdropBlur";
import ExploreSection from "./component/Pages/LandingPage/exploreSection";
import SectionDivider from "./component/Pages/LandingPage/sectionDivider";

import { Carousel } from "@material-tailwind/react";

function App() {
  return (
    <>
      <BackdropBlur />
      <Navbar />
      <LandingVideo />
      <SectionDivider label={"EXPLORE"} />
      <ExploreSection />
      <SectionDivider label={"LATEST TREND"} />
      <div class="grid flex justify-center align-center m-60">
        <Carousel
          transition={{ duration: 1 }}
          loop="true"
          className="rounded-xl"
        >
          <img
            src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
            alt="image 1"
            className="h-full w-full object-cover"
          />
          <img
            src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
            alt="image 2"
            className="h-full w-full object-cover"
          />
          <img
            src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
            alt="image 3"
            className="h-full w-full object-cover"
          />
        </Carousel>
      </div>
      <SectionDivider label={"LATEST TREND"} />
      <ExploreSection />
    </>
  );
}

export default App;
