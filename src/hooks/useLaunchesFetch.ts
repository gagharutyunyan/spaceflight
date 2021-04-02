import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { fetchAsync } from '../store/actions/launchesActions';
import { LaunchesState } from '../store/reducers/launchesReducer';
import { useTypedSelector } from './useTypedSelector';

export const useLaunchesFetch = (): LaunchesState => {
  const dispatch = useDispatch();
  const { data, isFetching, error } = useTypedSelector((state) => {
    return state.launches;
  });

  useEffect(() => {
    dispatch(fetchAsync);
  }, [dispatch]);

  return { data, isFetching, error };
};
