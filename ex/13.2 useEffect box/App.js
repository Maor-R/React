import { useState, useEffect } from "react";
import Box from "./components/Box";

import "./styles/App.css";

const App = () => {
  const [arr, setArr] = useState([]);
  const [showBox, setShowBox] = useState([]);


  useEffect(() => {
    setTimeout(() => {
      setShowBox(false)
    }, 5000);
  }, [arr]);

  setTimeout(() => {
    let arr = [];
    for (let i = 1; i < 4; i++) {
      arr.push(showBox &&<  Box height={`${i*3}rem`} width={`${i*3}rem`} />);
    }
    setArr(arr)
    
  }, 1000);


  return <div id="container">{arr}</div>;
};

export default App;
