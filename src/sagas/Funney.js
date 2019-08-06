import { call, put, takeEvery } from 'redux-saga/effects';
import { getAllFunneySuccess, getAllFunneyFailed } from '../actions/Funney'
import { getFunneyApi } from '../apis/Funney';
import {doneConnect, willConnect} from "../actions/Connecting";

export function* GetAllFunney(action) {
  yield put(willConnect());
  const { error, body } = yield call(getFunneyApi, action.data.id);
  if (error) {
    yield put(doneConnect());
    yield put(getAllFunneyFailed());
  } else {
    yield put(doneConnect());
    yield put(getAllFunneySuccess(body.balance));
  }
}

const saga = [
  takeEvery('GET_ALL_FUNNEY_REQUEST', GetAllFunney)
];

export default saga;
