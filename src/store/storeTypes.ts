export type flight = {
  name: string;
};

export type Launches = {
  results: flight[];
};

export type ErrorHttpAction = string;

// Sync
export const LAUNCHES_START_FETCHING = 'LAUNCHES_START_FETCHING';
type LaunchesStartFetchingAction = {
  type: typeof LAUNCHES_START_FETCHING;
};

export const LAUNCHES_STOP_FETCHING = 'LAUNCHES_STOP_FETCHING';
type LaunchesStopFetchingAction = {
  type: typeof LAUNCHES_STOP_FETCHING;
};

export const LAUNCHES_FILL = 'LAUNCHES_FILL';
export type LaunchesFillAction = {
  type: typeof LAUNCHES_FILL;
  payload: Launches;
};

export const LAUNCHES_SET_FETCHING_ERROR = 'LAUNCHES_SET_FETCHING_ERROR';
export type LaunchesSetFetchingErrorAction = {
  type: typeof LAUNCHES_SET_FETCHING_ERROR;
  error: true;
  payload: ErrorHttpAction;
};

// Async
export const LAUNCHES_FETCH_ASYNC = 'LAUNCHES_FETCH_ASYNC';
type LaunchesFetchAsyncAction = {
  type: typeof LAUNCHES_FETCH_ASYNC;
};

export type LaunchesActionTypes =
  | LaunchesStartFetchingAction
  | LaunchesStopFetchingAction
  | LaunchesFillAction
  | LaunchesSetFetchingErrorAction
  | LaunchesFetchAsyncAction;
