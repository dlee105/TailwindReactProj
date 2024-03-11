import "./App.css";

import Navbar from "./component/Pages/LandingPage/navbar";
import LandingVideo from "./component/Pages/LandingPage/landingVideo";
import BackdropBlur from "./component/Pages/LandingPage/backdropBlur";
import ExploreSection from "./component/Pages/LandingPage/exploreSection";
import SectionDivider from "./component/Pages/LandingPage/sectionDivider";

import { Carousel } from "@material-tailwind/react";
import NewArrivals from "./component/Pages/LandingPage/newArrivals";
import LatestTrend from "./component/Pages/LandingPage/latestTrend";
import Footer from "./component/Pages/LandingPage/footer";

function App() {
  return (
    <>
      <BackdropBlur />
      <Navbar />
      <LandingVideo />
      <SectionDivider label={"EXPLORE"} />
      <ExploreSection />
      <SectionDivider label={"NEW ARRIVALS"} />
      <NewArrivals />
      <SectionDivider label={"LATEST TREND"} />
      <LatestTrend />
      <Footer />
    </>
  );
}

export default App;
