import { call, put, fork, join, takeEvery } from 'redux-saga/effects';
import { signInSuccess, signInFailed, signUpSuccess, signUpFailed, snackbarOpen } from '../actions/User';
import { signInApi, signUpApi } from '../apis/User';
import { GetAllFunney } from './Funney';
import { GetAllFunneyHistory } from './FunneyHistory';
import { getParam } from '../helpers/GetQueryParam';
import history from '../helpers/history';
import { doneConnect, willConnect } from "../actions/Connecting";

function* signIn(action) {
  yield put(willConnect());
  const { newToken, error } = yield call(signInApi, action.data);
  if (error) {
    yield put(doneConnect());
    yield put(signInFailed());
    yield put(snackbarOpen());
  } else {
    yield put(doneConnect());
    yield put(signInSuccess(action.data, newToken));
    const GetAllFunneyTask = yield fork(GetAllFunney, action, newToken);
    yield join(GetAllFunneyTask);
    const GetAllFunneyHistoryTask = yield fork(GetAllFunneyHistory, action, newToken);
    yield join(GetAllFunneyHistoryTask);
    if (getParam('redirect', window.location.href)) {
      yield call(history.push, `/${getParam('redirect', window.location.href)}${window.location.search}`)
    } else {
      yield call(history.push, '/');
    }
  }
}

function* signUp(action) {
  yield put(willConnect);
  const { newToken, error } = yield call(signUpApi, action.data);
  if (error) {
    yield put(doneConnect());
    yield put(signUpFailed());
    yield put(snackbarOpen());
  } else {
    yield put(doneConnect());
    yield put(signUpSuccess(action.data, newToken));
    const GetAllFunneyTask = yield fork(GetAllFunney, action, newToken);
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
