// Tools
import {
  startFetching,
  stopFetching,
  fill,
  setfetchingError,
} from '../../actions/launchesActions';

// Types
import { Launches } from '../../storeTypes/launchesTypes';

// Workers
import { makeRequestWithSpinner } from './makeRequestWithSpinner';

// API
import { api } from '../../../api/launches';

export function* fetchLaunches(): Generator {
  const options = {
    fetcher: api.launches.fetch,
    startFetching,
    stopFetching,
    fill,
    setErrorAction: setfetchingError,
  };

  yield makeRequestWithSpinner<Launches>(options);
}
