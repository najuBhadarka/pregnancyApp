import { combineReducers } from "redux";
import auth from "./auth/authAction";
import user from "./user/userAction";
import question from "./questionaries/questionariesAction";

const reducers = combineReducers({
  auth,
  user,
  question
});

export default reducers;
