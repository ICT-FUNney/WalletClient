import { call, put, fork, join, takeEvery } from 'redux-saga/effects';
import { signInSuccess, signInFailed, signUpSuccess, signUpFailed, snackbarOpen } from '../actions/SignIn';
import {  signInApi, signUpApi } from '../apis/SignIn';
import { GetAllFunney } from './Funney'
import history from '../Helpers/history';

function* signIn(action) {
  const { error } = yield call(signInApi, action.data);
  if (error) {
    yield put(signInFailed());
    yield put(snackbarOpen());
  } else {
    yield put(signInSuccess(action.data));
    const GetAllFunneyTask = yield fork(GetAllFunney, action.data.id);
    yield join(GetAllFunneyTask);
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
