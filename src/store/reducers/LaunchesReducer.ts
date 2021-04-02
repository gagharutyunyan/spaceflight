import {
  NEXT_LAUNCHES_FETCH_ASYNC,
  PAST_LAUNCHES_FETCH_ASYNC,
  LAUNCHES_FILL,
  LAUNCHES_SET_FETCHING_ERROR,
  LAUNCHES_START_FETCHING,
  LAUNCHES_STOP_FETCHING,
  LaunchesActionTypes,
} from '../storeTypes';

import { LaunchesState } from '../../types';

const initialState: LaunchesState = {
  data: {
    results: [],
  },
  isFetching: false,
  error: false,
};

export const launchesReducer = (
  state = initialState,
  action: LaunchesActionTypes
): LaunchesState => {
  if (!('type' in action)) {
    return state;
  }

  switch (action.type) {
    case LAUNCHES_START_FETCHING:
      return {
        ...state,
        isFetching: true,
        error: false,
      };
    case LAUNCHES_STOP_FETCHING:
      return {
        ...state,
        isFetching: false,
        error: false,
      };
    case LAUNCHES_SET_FETCHING_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case LAUNCHES_FILL:
      if (Array.isArray(action.payload.results)) {
        return {
          ...state,
          data: {
            ...action.payload,
          },
          error: false,
        };
      }
      return {
        ...state,
        data: {
          results: [action.payload.results],
        },
        error: false,
      };

    case NEXT_LAUNCHES_FETCH_ASYNC:
      return state;
    case PAST_LAUNCHES_FETCH_ASYNC:
      return state;
    default:
      return state;
  }
};
