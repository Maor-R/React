// import "./styles.css";
import useNum from "./hooks/useNum";
import Father from "./components/Father"
import { useEffect, useReducer, useState } from "react";

export default function App() {
  const { divide, double, removeOne, addOne, number } = useNum(1);

  useEffect(() => {
    double();
    addOne();
    divide();
    removeOne();
    double();
  }, []);

  return (
    <div>
      <div>
        <div>{number}</div>
        <Father/>      
      </div>
    </div>
  );
}
