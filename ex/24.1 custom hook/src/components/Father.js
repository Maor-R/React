import useNum from "../hooks/useNum";
import { useEffect } from "react";

 function Father() {
  const { divide, double, removeOne, addOne, number } = useNum(1);

  useEffect(() => {
    double();
    addOne();

  }, []);
  return (
    <>Inside Father: {number}</>
  )
}

export default Father