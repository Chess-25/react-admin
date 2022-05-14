import { combineReducers } from "redux";

import { reducer as loginReducer } from "./login";
import { reducer as cartReducer } from "./cart";
import { reducer as menuReducer } from "./menu";

const cReducer = combineReducers({
  login: loginReducer,
  cart: cartReducer,
  menu: menuReducer,
});

export default cReducer;
