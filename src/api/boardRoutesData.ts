import {
  pastLaunchesFetchAsync,
  nextLaunchesFetchAsync,
} from '../store/actions/launchesActions';

export const routes = [
  { path: '/', exact: true, fetchAsync: pastLaunchesFetchAsync },
  { path: '/board', exact: true, fetchAsync: pastLaunchesFetchAsync },
  { path: '/board/past', exact: true, fetchAsync: pastLaunchesFetchAsync },
  { path: '/board/next', exact: true, fetchAsync: nextLaunchesFetchAsync },
];
