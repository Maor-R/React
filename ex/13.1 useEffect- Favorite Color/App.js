import { useState, useEffect } from "react";

import "./styles/App.css";

const App = () => {
  const [favoriteColor, setFavoriteColor] = useState("blue");

  useEffect(() => {}, [favoriteColor]);

  setTimeout(() => {
    setFavoriteColor("yellow");
  }, 1000);

  return (
    <div id="container">
      <h1 style={{ color: favoriteColor }}>
        My favorite color is {favoriteColor}
      </h1>
    </div>
  );
};

export default App;
