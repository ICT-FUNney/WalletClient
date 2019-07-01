import { combineReducers } from 'redux'
import pathReducer from './Path'
import signInReducer from './SignIn'
import funneyReducer from './Funney'


const reducers = combineReducers({
  pathReducer,
  signInReducer,
  funneyReducer,
});

export default reducers
