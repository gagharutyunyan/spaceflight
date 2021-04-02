// Types
import {
  NEXT_LAUNCHES_FETCH_ASYNC,
  PAST_LAUNCHES_FETCH_ASYNC,
  LAUNCHES_FILL,
  LAUNCHES_SET_FETCHING_ERROR,
  LAUNCHES_START_FETCHING,
  LAUNCHES_STOP_FETCHING,
  LaunchesActionTypes,
  LaunchesFillAction,
  LaunchesSetFetchingErrorAction,
  NextLaunchesFetchAsyncAction,
  PastLaunchesFetchAsyncAction,
} from '../actionTypes';

import { ErrorHttpAction, Launches } from '../../types';

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
export function nextLaunchesFetchAsync(): NextLaunchesFetchAsyncAction {
  return {
    type: NEXT_LAUNCHES_FETCH_ASYNC,
  };
}

export function pastLaunchesFetchAsync(): PastLaunchesFetchAsyncAction {
  return {
    type: PAST_LAUNCHES_FETCH_ASYNC,
  };
}
