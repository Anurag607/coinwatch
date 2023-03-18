import { combineReducers } from "redux";
import sidebarSlice from "./reducers/sidebarSlice";

export default combineReducers({
  sidebar: sidebarSlice,
});
