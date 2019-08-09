import { call, put, takeEvery } from 'redux-saga/effects';
import { getAllFunneyHistorySuccess, getAllFunneyHistoryFailed } from '../actions/FunneyHistory'
import { getFunneyHistoryApi } from '../apis/FunneyHistory';
import {updateToken} from "../actions/User";
import {doneConnect, willConnect} from "../actions/Connecting";

export function* GetAllFunneyHistory(action, token) {
  yield put(willConnect());
  const { error, body, newToken } = yield call(getFunneyHistoryApi, action.data.id, token);
  if (error) {
    yield put(doneConnect());
    yield put(getAllFunneyHistoryFailed());
  } else {
    yield put(doneConnect());
    yield put(getAllFunneyHistorySuccess(body));
    yield put(updateToken(newToken));
  }
}

const saga = [
  takeEvery('GET_ALL_FUNNEY_HISTORY_REQUEST', GetAllFunneyHistory)
];

export default saga;
