import { all } from 'redux-saga/effects';
import SignInSaga from './User';
import SendSaga from './Send';

export default function* rootSaga() {
  yield all([
    ...SignInSaga,
    ...SendSaga,
  ]);
}

