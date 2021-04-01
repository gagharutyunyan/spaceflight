import { all } from 'redux-saga/effects';

import { watchStarships } from '../starshipFlights/saga'; // so far it doesnt work, make it up to you, I promise)))

export function* rootSaga(): Generator {
  yield all([watchStarships()]);
}
