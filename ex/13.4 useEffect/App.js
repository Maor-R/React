import { useState, useEffect } from "react";


import "./styles/App.css";

const App = () => {
  const [showLoader, SetShowLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      SetShowLoader(false);
    }, 3000);
  }, [showLoader]);

  return (<div>{showLoader && <div className="loader"></div>}</div>);
};

export default App;
