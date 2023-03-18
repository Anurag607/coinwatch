import { combineReducers } from "redux";
import sidebarSlice from "./reducers/sidebarSlice";
import searchSlice from "./reducers/searchSlice";
import coinSlice from "./reducers/coinSlice";

export default combineReducers({
  sidebar: sidebarSlice,
  searchBar: searchSlice,
  coins: coinSlice,
});
