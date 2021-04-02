import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { useTypedSelector } from './useTypedSelector';
import { LaunchesState } from '../types';
import { LaunchesActionTypes } from '../store/actionTypes';

export const useLaunchesFetch = (
  fetchAsync: LaunchesActionTypes
): LaunchesState => {
  const dispatch = useDispatch();
  const { fetchedData, isFetching, error } = useTypedSelector((state) => {
    return state.launches;
  });

  useEffect(() => {
    dispatch(fetchAsync);
  }, [dispatch]);

  return { fetchedData, isFetching, error };
};
