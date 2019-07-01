import { call, put, takeEvery } from 'redux-saga/effects';
import { sendApi } from '../apis/Send';
import history from '../Helpers/history'
import {sendFailed, sendSuccess} from "../actions/Send";

function* send(action) {
  const { error } = yield call(sendApi, action.data);
  if (error) {
    yield put(sendFailed());
  } else {
    yield put(sendSuccess());
    yield call(history.push, '/');
  }
}

const saga = [
  takeEvery('SEND_REQUEST', send)
];

export default saga;
