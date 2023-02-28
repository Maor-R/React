import { ACTIONS } from '../constants/actions';

const reducer = (state, action) => {
  const { type, payload } = action;

  if(state.btnText === "Make Day"){
  return { ...state, btnText:"Make Night", backgroundColor:"black", h1Color:"yellow", btnColor:"white", btnBGColor:"black"  };
  }
  else{
    return { ...state, btnText:"Make Day", backgroundColor:"gray", h1Color:"black", btnColor:"black", btnBGColor:"white"  };

  }

};

export default reducer;
