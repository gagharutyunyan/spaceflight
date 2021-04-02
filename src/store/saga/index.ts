// Core
import { SagaIterator } from '@redux-saga/core';
import { takeEvery } from 'redux-saga/effects';

// Types
import {
  NEXT_LAUNCHES_FETCH_ASYNC,
  PAST_LAUNCHES_FETCH_ASYNC,
} from '../actionTypes';

// Workers
import { fetchLaunches } from './workers/fetchLaunches';

// Watchers
export function* watchFetchNextLaunches(): SagaIterator {
  yield takeEvery(NEXT_LAUNCHES_FETCH_ASYNC, fetchLaunches, 'next');
}

export function* watchFetchPastLaunches(): SagaIterator {
  yield takeEvery(PAST_LAUNCHES_FETCH_ASYNC, fetchLaunches, 'past');
}
