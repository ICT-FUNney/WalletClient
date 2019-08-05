import { combineReducers } from 'redux'
import pathReducer from './Path'
import signInReducer from './SignIn'
import funneyReducer from './Funney'
import connectingReducer from "./Connecting";

const reducers = combineReducers({
  pathReducer,
  signInReducer,
  funneyReducer,
  connectingReducer,
});

export default reducers
