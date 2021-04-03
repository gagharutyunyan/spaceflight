import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { useTypedSelector } from './useTypedSelector';
import { fillPast, fillNext } from '../store/actions/bookedActions';

export const useBookingFill = () => {
  const dispatch = useDispatch();
  const { fetchedData: pastData } = useTypedSelector((state) => state.launches);
  const nextData = {
    results: pastData.results.slice(4, 7),
  };

  useEffect(() => {
    dispatch(fillPast(pastData));
    dispatch(fillNext(nextData));
  }, [dispatch]);
  return { pastData, nextData };
};
