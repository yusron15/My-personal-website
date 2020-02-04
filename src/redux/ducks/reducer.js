import newsStoreReducer from "../reducers/newsStoreReducer";
import pageStoreReducer from "../reducers/pageStoreReducer";
import cabangStoreReducer from "../reducers/cabangStoreReducer";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
  newsStore: newsStoreReducer,
  pageStore: pageStoreReducer,
  cabangStore: cabangStoreReducer
});

export default rootReducer;
