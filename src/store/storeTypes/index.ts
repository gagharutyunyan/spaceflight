import { Launches, ErrorHttpAction } from '../../types';

export type FillActionType<T> = (
  payload: T
) => {
  type: string;
  payload: T;
};

export type ErrorActionType = (
  payload: string
) => {
  type: string;
  error: true;
  payload: string;
};

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
export const NEXT_LAUNCHES_FETCH_ASYNC = 'NEXT_LAUNCHES_FETCH_ASYNC';
export type NextLaunchesFetchAsyncAction = {
  type: typeof NEXT_LAUNCHES_FETCH_ASYNC;
};

export const PAST_LAUNCHES_FETCH_ASYNC = 'PAST_LAUNCHES_FETCH_ASYNC';
export type PastLaunchesFetchAsyncAction = {
  type: typeof PAST_LAUNCHES_FETCH_ASYNC;
};

export type LaunchesActionTypes =
  | LaunchesStartFetchingAction
  | LaunchesStopFetchingAction
  | LaunchesFillAction
  | LaunchesSetFetchingErrorAction
  | NextLaunchesFetchAsyncAction
  | PastLaunchesFetchAsyncAction;
