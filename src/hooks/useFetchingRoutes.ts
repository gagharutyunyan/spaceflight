import {
  pastLaunchesFetchAsync,
  nextLaunchesFetchAsync,
} from './../store/actions/launchesActions';

export const useFetchLaunchesRoutes = () => {
  return {
    launchesRoutes: [
      { fetch: pastLaunchesFetchAsync(), path: 'past' },
      { fetch: nextLaunchesFetchAsync(), path: 'next' },
    ],
  };
};
