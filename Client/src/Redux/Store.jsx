import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { composeWithDevTools } from "redux-devtools-extension";
import sampleReducer from './Slice';

const rootReducer = combineReducers({
  auth: sampleReducer ,

});

const store = configureStore({ reducer: rootReducer },{},
  composeWithDevTools());
export default store;