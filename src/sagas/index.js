import { all } from 'redux-saga/effects';
import SignInSaga from './SignIn';

export default function* rootSaga() {
  yield all([
    ...SignInSaga
  ]);
}

