import {
  pastLaunchesFetchAsync,
  nextLaunchesFetchAsync,
} from '../store/actions/launchesActions';

export const routes = [
  { id: 1, path: '/board', exact: true, fetchAsync: pastLaunchesFetchAsync },
  {
    id: 2,
    path: '/board/past',
    exact: true,
    fetchAsync: pastLaunchesFetchAsync,
  },
  {
    id: 3,
    path: '/board/next',
    exact: true,
    fetchAsync: nextLaunchesFetchAsync,
  },
];

export const redirectingRoutes = [
  { id: 1, path: '/', exact: true, redirectTo: '/board/past' },
  { id: 2, path: '/board/*', exact: true, redirectTo: '/board/past' },
  { id: 3, path: '/board/past/*', exact: true, redirectTo: '/board/past' },
  { id: 4, path: '/board/next/*', exact: true, redirectTo: '/board/next' },
];
