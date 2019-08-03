import { combineReducers } from 'redux'
import pathReducer from './Path'
import userReducer from './User'
import funneyReducer from './Funney'

const reducers = combineReducers({
  pathReducer,
  userReducer,
  funneyReducer,
});

export default reducers
