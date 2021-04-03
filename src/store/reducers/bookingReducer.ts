import {
  PAST_LAUNCHES_FILL,
  NEXT_LAUNCHES_FILL,
  BOOKED_LAUNCHES_FILL,
  BookedLaunchesActionTypes,
} from '../actionTypes/bookedActionTypes';

import { BookingState } from '../../types';

const initialState: BookingState = {
  ['past']: {
    name: 'past launches',
    results: [],
    isDragDisabled: true,
  },
  ['next']: {
    name: 'next launches',
    results: [],
    isDragDisabled: false,
  },
  ['booked']: {
    name: 'booked launches',
    results: [],
    isDragDisabled: false,
  },
};

export const bookingReducer = (
  state = initialState,
  action: BookedLaunchesActionTypes
): BookingState => {
  if (!('type' in action)) {
    return state;
  }

  switch (action.type) {
    case PAST_LAUNCHES_FILL:
      return {
        ...state,
        ['past']: {
          ...state['past'],
          ...action.payload,
        },
      };
    case NEXT_LAUNCHES_FILL:
      return {
        ...state,

        ['next']: {
          ...state['next'],
          ...action.payload,
        },
      };
    case BOOKED_LAUNCHES_FILL:
      return {
        ...state,
        ['booked']: {
          ...state['booked'],
          ...action.payload,
        },
      };
    default:
      return state;
  }
};
