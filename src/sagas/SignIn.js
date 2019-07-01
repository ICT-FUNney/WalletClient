import { call, put, takeEvery } from 'redux-saga/effects';
import { signInSuccess, signInFailed, snackbarOpen } from '../actions/SignIn'
import { signInApi } from '../apis/SignIn';
import history from '../helpers/history'

function* signIn(action) {
  const { error } = yield call(signInApi, action.data);
  if (error) {
    yield put(signInFailed());
    yield put(snackbarOpen());
  } else {
    yield put(signInSuccess(action.data));
    yield call(history.push, '/');
  }
}

const saga = [
  takeEvery('SIGN_IN_REQUEST', signIn)
];

export default saga;
