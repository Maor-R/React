import { FAMILY_ACTIONS } from '../constants/family.actions';

const reducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case FAMILY_ACTIONS.UPDATE_GIFTS:
      const {arr} = payload; 
      return { ...state, gifts:arr  };
   
    default:
      return state;
  }
};

export default reducer;
