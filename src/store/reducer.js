import { combineReducers } from "redux";

import { reducer as cartReducer } from "./cart";
import { reducer as menuReducer } from "./menu";

const cReducer = combineReducers({
  cart: cartReducer,
  menu: menuReducer,
});

export default cReducer;
