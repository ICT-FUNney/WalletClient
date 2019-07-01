import { call, put, fork, join,takeEvery } from 'redux-saga/effects';
import { signInSuccess, signInFailed, snackbarOpen } from '../actions/SignIn';
import { signInApi } from '../apis/SignIn';
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

const saga = [
  takeEvery('SIGN_IN_REQUEST', signIn)
];

export default saga;
