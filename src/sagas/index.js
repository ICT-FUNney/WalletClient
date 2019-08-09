import { all } from 'redux-saga/effects';
import SignInSaga from './User';
import SendSaga from './Send';
import FunneySaga from './Funney';

export default function* rootSaga() {
  yield all([
    ...SignInSaga,
    ...SendSaga,
    ...FunneySaga,
  ]);
}

