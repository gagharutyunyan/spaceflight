import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { useTypedSelector } from './useTypedSelector';
import { LaunchesActionTypes } from '../store/actionTypes/launchesActionTypes';

export const useLaunchesFetch = (fetchAsync: LaunchesActionTypes) => {
  const dispatch = useDispatch();
  const { fetchedData, isFetching, error } = useTypedSelector((state) => {
    return state.launches;
  });

  useEffect(() => {
    dispatch(fetchAsync);
  }, [dispatch]);

  return { fetchedData, isFetching, error };
};
