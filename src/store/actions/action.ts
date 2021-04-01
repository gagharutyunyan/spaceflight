// Types
import {
  ErrorHttpAction,
  Launches,
  LAUNCHES_FETCH_ASYNC,
  LAUNCHES_FILL,
  LAUNCHES_SET_FETCHING_ERROR,
  LAUNCHES_START_FETCHING,
  LAUNCHES_STOP_FETCHING,
  LaunchesActionTypes,
  LaunchesFillAction,
  LaunchesSetFetchingErrorAction,
} from '../storeTypes';

// Sync
export function startFetching(): LaunchesActionTypes {
  return {
    type: LAUNCHES_START_FETCHING,
  };
}

export function stopFetching(): LaunchesActionTypes {
  return {
    type: LAUNCHES_STOP_FETCHING,
  };
}

export function fill(payload: Launches): LaunchesFillAction {
  return {
    type: LAUNCHES_FILL,
    payload,
  };
}

export function setfetchingError(
  payload: ErrorHttpAction
): LaunchesSetFetchingErrorAction {
  return {
    type: LAUNCHES_SET_FETCHING_ERROR,
    error: true,
    payload,
  };
}

// Async
export function fetchAsync(): LaunchesActionTypes {
  return {
    type: LAUNCHES_FETCH_ASYNC,
  };
}
