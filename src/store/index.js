import { combineReducers } from "redux";
import { loginlogoutReducer } from "./reducers/loginlogoutReducer";

export const rootReducer = combineReducers({
  loginlogout: loginlogoutReducer,
});
