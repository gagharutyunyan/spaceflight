import React, { FC, ReactElement } from 'react';
import { useLaunchesFetch } from '../../hooks/useLaunchesFetch';

import { Error } from '../Error';
import { Loader } from '../Loader';
import { LaunchesActionTypes } from '../../store/actionTypes/index';
import { FlightLink } from '../FlightLink';

type FlightList = {
  fetchAsync: LaunchesActionTypes;
};

export const FlightList: FC<FlightList> = ({ fetchAsync }: FlightList) => {
  const { fetchedData, isFetching, error } = useLaunchesFetch(fetchAsync);

  return (
    <>
      <Error error={error} />
      <Loader isFetching={isFetching} />
      {!isFetching && (
        <ul>
          {fetchedData.results.map(
            (flight): ReactElement => (
              <FlightLink key={flight.id} {...flight} />
            )
          )}
        </ul>
      )}
    </>
  );
};
