import { combineReducers } from 'redux'
import pathReducer from './Path'
import signInReducer from './SignIn'


const reducers = combineReducers({
  pathReducer,
  signInReducer,
});

export default reducers
