import { call, put, takeEvery } from 'redux-saga/effects';
import { sendApi } from '../apis/Send';
import history from '../helpers/history'
import {sendFailed, sendSuccess} from "../actions/Send";
import {doneConnect, willConnect} from "../actions/Connecting";

function* send(action) {
  yield put(willConnect());
  const { error } = yield call(sendApi, action.data);
  if (error) {
    yield put(doneConnect());
    yield put(sendFailed());
  } else {
    yield put(doneConnect());
    yield put(sendSuccess());
    yield call(history.push, '/');
  }
}

const saga = [
  takeEvery('SEND_REQUEST', send)
];

export default saga;
