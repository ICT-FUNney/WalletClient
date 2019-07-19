import { call, put, fork, join, takeEvery } from 'redux-saga/effects';
import { signInSuccess, signInFailed, signUpSuccess, signUpFailed, snackbarOpen } from '../actions/SignIn';
import {  signInApi, signUpApi } from '../apis/SignIn';
import { GetAllFunney } from './Funney'
import { getParam } from '../helpers/GetQueryParam'
import history from '../helpers/history';

function* signIn(action) {
  const { error } = yield call(signInApi, action.data);
  if (error) {
    yield put(signInFailed());
    yield put(snackbarOpen());
  } else {
    yield put(signInSuccess(action.data));
    const GetAllFunneyTask = yield fork(GetAllFunney, action);
    yield join(GetAllFunneyTask);
    if (getParam('redirect',window.location.href)) {
      yield call(history.push, `/${getParam('redirect',window.location.href)}${window.location.search}`)
    } else {
      yield call(history.push, '/');
    }
  }
}

function* signUp(action) {
  const { error } = yield call(signUpApi, action.data);
  if (error) {
    yield put(signUpFailed());
    yield put(snackbarOpen());
  } else {
    yield put(signUpSuccess(action.data));
    const GetAllFunneyTask = yield fork(GetAllFunney, action);
    yield join(GetAllFunneyTask);
    yield call(history.push, '/');
  }
}

function* signOut() {
  yield call(history.push, '/login');
}

const saga = [
  takeEvery('SIGN_IN_REQUEST', signIn),
  takeEvery('SIGN_OUT', signOut),
  takeEvery('SIGN_UP_REQUEST', signUp),
];

export default saga;
