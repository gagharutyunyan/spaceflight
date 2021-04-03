// Types
import {
  PAST_LAUNCHES_FILL,
  NEXT_LAUNCHES_FILL,
  BOOKED_LAUNCHES_FILL,
  PastLaunchesFillAction,
  NextLaunchesFillAction,
  BookedLaunchesFillAction,
} from '../actionTypes/bookedActionTypes';
import { Launches } from '../../types';

export function fillPast(payload: Launches): PastLaunchesFillAction {
  return {
    type: PAST_LAUNCHES_FILL,
    payload,
  };
}
export function fillNext(payload: Launches): NextLaunchesFillAction {
  return {
    type: NEXT_LAUNCHES_FILL,
    payload,
  };
}
export function fillBooked(payload: Launches): BookedLaunchesFillAction {
  return {
    type: BOOKED_LAUNCHES_FILL,
    payload,
  };
}
