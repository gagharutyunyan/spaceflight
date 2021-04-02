import React, { FC, ReactElement } from 'react';
import { useLaunchesFetch } from '../../hooks/useLaunchesFetch';
import {
  pastLaunchesFetchAsync,
  nextLaunchesFetchAsync,
} from '../../store/actions/launchesActions';
import { Error } from '../Error';
import { Loader } from '../Loader';

export const FlightList: FC = () => {
  const { data, isFetching, error } = useLaunchesFetch(
    pastLaunchesFetchAsync()
  );

  return (
    <>
      <Error error={error} />
      <Loader isFetching={isFetching} />
      {!isFetching &&
        data.results.map(
          (flight): ReactElement => <h3 key={flight.id}>{flight.id}</h3>
        )}
    </>
  );
};
