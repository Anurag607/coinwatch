import { combineReducers } from "redux";
import sidebarSlice from "./reducers/sidebarSlice";
import searchSlice from "./reducers/searchSlice";
import coinSlice from "./reducers/coinSlice";
import menuSlice from "./reducers/menuSlice";

export default combineReducers({
  sidebar: sidebarSlice,
  searchBar: searchSlice,
  coins: coinSlice,
  menu: menuSlice,
});
