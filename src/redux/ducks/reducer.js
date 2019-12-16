import newsStoreReducer from "../reducers/newsStoreReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  newsStore: newsStoreReducer
});

export default rootReducer;
