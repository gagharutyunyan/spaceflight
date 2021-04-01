// Core
import { SagaIterator } from '@redux-saga/core';
import { takeEvery, all, call } from 'redux-saga/effects';

// Types
import { LAUNCHES_FETCH_ASYNC } from '../types';

// Workers
import { fetchLaunches } from './workers';

function* watchFetchLaunches(): SagaIterator {
  yield takeEvery(LAUNCHES_FETCH_ASYNC, fetchLaunches);
}

export function* watchLaunches(): SagaIterator {
  yield all([call(watchFetchLaunches)]);
}