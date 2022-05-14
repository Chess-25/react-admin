import * as actionTypes from "./constants";

const defaultState = {
  token: '',
  userInfo:{name:'chess'}
};
function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_TOKEN:
      return { ...state, token: action.token };
    default:
      return state;
  }
}

export default reducer