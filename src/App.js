import React, { useEffect, createRef } from "react";

import animation from "./animations/construct.json";

import "./App.css";
import lottie from "lottie-web";
import NavBar from "./components/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import Counter from "./components/Counter";

import Contactus from "./components/Contactus";
// import Countdown from "./components/Countdown";

function App() {
  let animationContainer = createRef();
  useEffect(() => {
    lottie.loadAnimation({
      container: animationContainer.current,
      // renderer: "svg",
      // loop: true,
      // autoplay: true,
      animationData: animation,
    });
  }, []);
  // const currentDate = new Date();
  // const year =
  //   currentDate.getMonth() === 11 && currentDate.getDate() > 23
  //     ? currentDate.getFullYear() + 1
  //     : currentDate.getFullYear();
  return (
    <div className="App">
      <NavBar />
      <div className="timer-display">
        <div className="animation-construction" ref={animationContainer} />
        <Counter
          timeTillDate="12 25 2020, 12:00 am"
          timeFormat="MM DD YYYY, h:mm a"
        />
      </div>
      <div className="message"> Currently Under Development !</div>
      {/* <Countdown date={`${year}-10-01T00:00:00`} /> */}
      <div className="social-media">
        <Contactus />
      </div>
    </div>
  );
}

export default App;
