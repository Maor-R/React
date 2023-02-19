import { useState, useEffect, useRef } from "react";
import "./styles/App.css";

import libBWImg from "../src/assets/images/1.bmp";
import libColorImg from "../src/assets/images/1.jpg";
const App = () => {
  const replaceImg = useRef();

  const replaceImgFunc = (color) => {
    if (color === 'black') {
      replaceImg.current.src = libBWImg;
    } else {
      replaceImg.current.src = libColorImg;
    }
  };

  return (
    <img 
      onMouseLeave={() => {
        replaceImgFunc("black");
      }}
      onMouseOver={() => {
        replaceImgFunc("color");
      }}
      src={libColorImg}
      ref={replaceImg}
    ></img>
  );
};

export default App;
