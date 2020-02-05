import newsStoreReducer from "../reducers/newsStoreReducer";
import pageStoreReducer from "../reducers/pageStoreReducer";
import cabangStoreReducer from "../reducers/cabangStoreReducer";
import karirStoreReducer from "../reducers/karirStoreReducer";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
  newsStore: newsStoreReducer,
  pageStore: pageStoreReducer,
  cabangStore: cabangStoreReducer,
  karirStore: karirStoreReducer
});

export default rootReducer;
