import { all } from 'redux-saga/effects';
import SignInSaga from './SignIn';
import SendSaga from './Send';

export default function* rootSaga() {
  yield all([
    ...SignInSaga,
    ...SendSaga,
  ]);
}

