import { combineReducers } from "redux";
import { createStore } from "redux";

import { DatVeReducer } from "./Reducers/DatVeReducer";

const rootReducer = combineReducers({
  DatVeReducer,
});

export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
