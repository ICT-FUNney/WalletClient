import { call, put, takeEvery } from 'redux-saga/effects';
import { signInSuccess, signInFailed, signUpSuccess, signUpFailed, snackbarOpen } from '../actions/SignIn'
import { signInApi, signUpApi } from '../apis/SignIn';
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

function* signUp(action) {
  const { error } = yield call(signUpApi, action.data);
  if (error) {
    yield put(signUpFailed());
    yield put(snackbarOpen());
  } else {
    yield put(signUpSuccess(action.data));
    yield call(history.push, '/');
  }
}

const saga = [
  takeEvery('SIGN_IN_REQUEST', signIn),
  takeEvery('SIGN_UP_REQUEST', signUp),
];

export default saga;
