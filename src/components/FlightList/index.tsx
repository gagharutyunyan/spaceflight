import React, { FC, ReactElement } from 'react';
import { useLaunchesFetch } from '../../hooks/useLaunchesFetch';

import { Error } from '../Error';
import { Loader } from '../Loader';
import { LaunchesActionTypes } from '../../store/actionTypes/index';
import { FlightElement } from '../FlightElement';

type FlightList = {
  fetchAsync: LaunchesActionTypes;
};

export const FlightList: FC<FlightList> = ({ fetchAsync }: FlightList) => {
  const { data, isFetching, error } = useLaunchesFetch(fetchAsync);

  return (
    <>
      <Error error={error} />
      <Loader isFetching={isFetching} />
      {!isFetching &&
        data.results.map(
          (flight): ReactElement => (
            <FlightElement key={flight.id} {...flight} />
          )
        )}
    </>
  );
};
