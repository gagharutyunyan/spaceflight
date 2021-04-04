import { combineReducers } from 'redux';

import { launchesReducer as launches } from '../reducers/launchesReducer';

export const rootReducer = combineReducers({ launches });

export type AppState = ReturnType<typeof rootReducer>;
