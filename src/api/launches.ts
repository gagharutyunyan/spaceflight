import { root } from './config';
import { Launches, APIFetchDataType } from '../types';

export const api: APIFetchDataType = {
  launches: {
    fetch: (uri: string): Promise<Launches> =>
      fetch(`${root}${uri}`, {
        method: 'GET',
      })
        .then((response) => response.json())
        .then((results) => ({ results })),
  },
};
