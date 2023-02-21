import { useState, useEffect } from "react";
import Box from "./components/Box";
import Circle from "./components/Circle";

import "./styles/App.css";
const arrColor = ["pink", "red", "green", "black", "blue"];
const App = () => {
  const [color, setColor] = useState("yellow");
  const [showBox, setShowBox] = useState(true);
  const [showCircle, setShowCircle] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {

    if (index < 5) {
      setTimeout(() => {
        setColor(arrColor[index]);
      }, 1000);
      setIndex((prevIndex) => prevIndex + 1);
    }
    else{
      setShowCircle(true);
      setShowBox(false);
      setIndex(0);
      setColor('yellow');
    }

  }, [color]);



  return (
    <div id="container">
      {showBox && <Box color={color} />}
      {showCircle && <Circle color={color} />}
    </div>
  );
};

export default App;
