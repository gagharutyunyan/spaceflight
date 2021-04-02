import React, { FC, ReactElement } from 'react';
import { Error } from '../../components/Error';
import { Loader } from '../../components/Loader';
import { useLaunchesFetch } from '../../hooks/useLaunchesFetch';
export const FlightList: FC = () => {
  const { data, isFetching, error } = useLaunchesFetch();
  console.log({ data, isFetching, error });
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
