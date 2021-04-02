import { root } from './config';
import { Launches } from '../store/storeTypes/launchesTypes';

export type FetchDataType<T> = () => Promise<T>;

type APIFetchDataType = {
  launches: {
    fetch: FetchDataType<Launches>;
  };
};

export const api: APIFetchDataType = {
  launches: {
    fetch: (): Promise<Launches> =>
      fetch(`${root}/launches`, {
        method: 'GET',
      })
        .then((response) => response.json())
        .then((results) => ({ results })),
  },
};
