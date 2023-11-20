import { createStore, combineReducers } from "redux";
import Mode from "./setting/setting";

// createStore => configureStore
export default createStore(
  combineReducers({
    mode: Mode,
  })
);
