import { call, put, takeEvery } from 'redux-saga/effects';
import { getAllFunneySuccess, getAllFunneyFailed } from '../actions/Funney'
import { getFunneyApi } from '../apis/Funney';

export function* GetAllFunney(action) {
  const { error, body } = yield call(getFunneyApi, action.data.id);
  if (error) {
    yield put(getAllFunneyFailed());
  } else {
    yield put(getAllFunneySuccess(body.balance));
  }
}

const saga = [
  takeEvery('GET_ALL_FUNNEY_REQUEST', GetAllFunney)
];

export default saga;
