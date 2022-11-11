import { combineReducers } from "redux";
import { createStore } from "redux";
import btDatVeReducer from "./reducers/dsGheReducersClass";

const rootReducer = combineReducers({
  btDatVeReducer,
});

export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
