import newsStoreReducer from "../reducers/newsStoreReducer";
import pageStoreReducer from "../reducers/pageStoreReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  newsStore: newsStoreReducer,
  pageStore: pageStoreReducer
});

export default rootReducer;
