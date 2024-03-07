import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import Navbar from "./component/navbar";
import LandingVideo from "./component/landingVideo";

function App() {
  return (
    <>
      <Navbar />
      <LandingVideo />
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci
        reprehenderit perspiciatis maxime molestias. Excepturi in sapiente
        fugiat. Suscipit, voluptate natus? Ab officia, iste libero magni quis
        rerum soluta incidunt fuga aspernatur necessitatibus amet vel maiores
        aliquam eveniet enim et, in totam consequatur. Esse labore error velit
        officiis laudantium omnis at?
      </p>
    </>
  );
}

export default App;
