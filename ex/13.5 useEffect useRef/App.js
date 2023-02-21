import { useState, useEffect, useRef } from "react";


import "./styles/App.css";

const App = () => {
  // const [input, SetShowLoader] = useState(true);
const input = useRef();
  useEffect(() => {
input.current.focus();
  }, []);

  return (
  <div>
    <form >
      <input type="text" ref={input} />
    </form>
    </div>);
};

export default App;
