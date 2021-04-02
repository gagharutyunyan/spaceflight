import { all } from 'redux-saga/effects';

import { watchFetchNextLaunches, watchFetchPastLaunches } from '../saga';

export function* rootSaga(): Generator {
  yield all([watchFetchNextLaunches(), watchFetchPastLaunches()]);
}
