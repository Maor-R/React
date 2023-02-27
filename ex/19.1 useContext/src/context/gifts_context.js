import React, { useContext, useReducer, useEffect } from 'react';

import { FAMILY_ACTIONS } from '../constants/family.actions';

import reducer from '../reducers/family_reducer';

const AppContext = React.createContext();

const initialState = {
  gifts: []
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const updateGifts = (gifts) => {
    dispatch({ type: FAMILY_ACTIONS.UPDATE_GIFTS, payload:{arr:gifts} });
  };


  // useEffect(() => {
  //   fetchData();
  // }, []);



  return (
    <AppContext.Provider
      value={{
        ...state,
        updateGifts,
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
