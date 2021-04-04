import { pastLaunchesFetchAsync } from '../store/actions/launchesActions';
import { useLaunchesFetch } from './useLaunchesFetch';

export const useBookingMockData = () => {
  const { fetchedData, isFetching, error } = useLaunchesFetch(
    pastLaunchesFetchAsync()
  );

  const pastData = fetchedData.results.slice(0, 7).map((el) => {
    return {
      ...el,
      isDragDisabled: true,
    };
  });

  const nextData = fetchedData.results.slice(7, 9).map((el) => {
    return {
      ...el,
      isDragDisabled: false,
    };
  });

  const bookingData = {
    ['past']: {
      name: 'Past Launches',
      results: [...pastData],
      isDragDisabled: true,
    },
    ['next']: {
      name: 'Next Launches',
      results: [...nextData],
      isDragDisabled: false,
    },
    ['booked']: {
      name: 'My launches',
      results: [],
      isDragDisabled: false,
    },
  };
  return { bookingData, isFetching, error };
};
