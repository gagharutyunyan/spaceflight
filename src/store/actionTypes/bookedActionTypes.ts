import { Launches } from '../../types';

export const PAST_LAUNCHES_FILL = 'PAST_LAUNCHES_FILL';
export type PastLaunchesFillAction = {
  type: typeof PAST_LAUNCHES_FILL;
  payload: Launches;
};
export const NEXT_LAUNCHES_FILL = 'NEXT_LAUNCHES_FILL';
export type NextLaunchesFillAction = {
  type: typeof NEXT_LAUNCHES_FILL;
  payload: Launches;
};
export const BOOKED_LAUNCHES_FILL = 'BOOKED_LAUNCHES_FILL';
export type BookedLaunchesFillAction = {
  type: typeof BOOKED_LAUNCHES_FILL;
  payload: Launches;
};

export type BookedLaunchesActionTypes =
  | PastLaunchesFillAction
  | NextLaunchesFillAction
  | BookedLaunchesFillAction;
