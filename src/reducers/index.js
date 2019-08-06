import { combineReducers } from 'redux'
import pathReducer from './Path'
import userReducer from './User'
import funneyReducer from './Funney'
import connectingReducer from "./Connecting";

const reducers = combineReducers({
  pathReducer,
  userReducer,
  funneyReducer,
  connectingReducer,
});

export default reducers
