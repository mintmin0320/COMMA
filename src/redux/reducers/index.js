import { combineReducers } from "redux";
import auth from "./auth";
import basket from "./basket";

export default combineReducers({
  auth,
  basket,
});