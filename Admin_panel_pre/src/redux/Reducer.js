import { combineReducers } from "redux";
import auth from "./auth/authAction";
import user from "./user/userAction";

const reducers = combineReducers({
  auth,
  user
});

export default reducers;
