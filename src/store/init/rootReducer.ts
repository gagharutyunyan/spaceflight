import { combineReducers } from 'redux';

import { launchesReducer as launches } from '../reducers/launchesReducer';
import { bookingReducer as booking } from '../reducers/bookingReducer';

export const rootReducer = combineReducers({ launches, booking });

export type AppState = ReturnType<typeof rootReducer>;
