import { useState, useEffect, useRef } from "react";
import "./styles/App.css";
const App = () => {
  const play = useRef();

setTimeout(() => {
  play.current.play();

}, 2000);
  return (
    <video
      controls
      width="250"
      src="//samplelib.com/lib/preview/mp4/sample-5s.mp4"
      ref={play}
    ></video>
    
  );
};

export default App;
