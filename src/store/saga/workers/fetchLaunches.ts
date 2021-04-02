// Tools
import {
  startFetching,
  stopFetching,
  fill,
  setfetchingError,
} from '../../actions/launchesActions';

// Types
import { Launches } from '../../../types';

// Workers
import { makeRequestWithSpinner } from './makeRequestWithSpinner';

// API
import { api } from '../../../api/launches';

export function* fetchLaunches(uri: string): Generator {
  const options = {
    fetcher: api.launches.fetch,
    fetcherParam: uri,
    startFetching,
    stopFetching,
    fill,
    setErrorAction: setfetchingError,
  };

  yield makeRequestWithSpinner<Launches>(options);
}
