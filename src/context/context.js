import React, { useContext, useReducer } from "react";

import { ACTIONS } from "../constants/actions";

import reducer from "../reducers/reducer";

const AppContext = React.createContext();

const initialState = {
  btnText: "Make Day",
  backgroundColor: "gray",
  h1Color: "black",
  btnColor: "white",
  btnBGColor: "black"
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const changeDayNight = () => {
    dispatch({ type: ACTIONS.CHANGE_DAY_NIGHT });
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        changeDayNight,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
