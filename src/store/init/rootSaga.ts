import { all } from 'redux-saga/effects';

import { watchLaunches } from '../saga';

export function* rootSaga(): Generator {
  yield all([watchLaunches()]);
}
