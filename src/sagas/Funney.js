import { call, put, takeEvery } from 'redux-saga/effects';
import { getAllFunneySuccess, getAllFunneyFailed } from '../actions/Funney'
import { getFunneyApi } from '../apis/Funney';
import {updateToken} from "../actions/User";
import {doneConnect, willConnect} from "../actions/Connecting";

export function* GetAllFunney(action, token) {
  yield put(willConnect());
  const { error, body, newToken } = yield call(getFunneyApi, action.data.id, token);
  if (error) {
    yield put(doneConnect());
    yield put(getAllFunneyFailed());
  } else {
    yield put(doneConnect());
    yield put(getAllFunneySuccess(body));
    yield put(updateToken(newToken));
  }
}

const saga = [
  takeEvery('GET_ALL_FUNNEY_REQUEST', GetAllFunney)
];

export default saga;
