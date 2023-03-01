import { useEffect, useReducer, useState } from "react";
import axios from "axios";



function useNum(num) {

    const [number, setNumber] = useState(num);
    
    const addOne =()=>{
        setNumber(prevNum=> prevNum+1);
    }

    const removeOne =()=>{
        setNumber(prevNum=> prevNum-1);

    }

    const double =()=>{
        setNumber(prevNum=> prevNum*2);

    }


    const divide =()=>{
        setNumber(prevNum=> prevNum/2);

    }

    return {
        divide,
        double,
        removeOne,
        addOne,
        number
      };
}

export default useNum;
