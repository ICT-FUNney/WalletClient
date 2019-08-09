import { combineReducers } from 'redux'
import pathReducer from './Path'
import userReducer from './User'
import funneyReducer from './Funney'
import connectingReducer from "./Connecting";
import funneyHistoryReducer from "./FunneyHistory"

const reducers = combineReducers({
  pathReducer,
  userReducer,
  funneyReducer,
  funneyHistoryReducer,
  connectingReducer,
});

export default reducers
