import {
  ErrorHttpAction,
  Launches,
  LAUNCHES_FETCH_ASYNC,
  LAUNCHES_FILL,
  LAUNCHES_SET_FETCHING_ERROR,
  LAUNCHES_START_FETCHING,
  LAUNCHES_STOP_FETCHING,
  LaunchesActionTypes,
} from '../storeTypes/launchesTypes';

export type LaunchesState = {
  data: Launches;
  isFetching: boolean;
  error: false | ErrorHttpAction;
};

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
      return {
        ...state,
        data: {
          ...action.payload,
        },
        error: false,
      };
    case LAUNCHES_FETCH_ASYNC:
      return state;
    default:
      return state;
  }
};
