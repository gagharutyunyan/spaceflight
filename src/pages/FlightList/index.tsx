import React, { FC, ReactElement } from 'react';
import { Error } from '../../components/Error';
import { Loader } from '../../components/Loader';
import { useLaunchesFetch } from '../../hooks/useLaunchesFetch';

export const FlightList: FC = () => {
  const { isFetching, data, error } = useLaunchesFetch();
  return (
    <>
      <Error error={error} />
      <Loader isFetching={isFetching} />
      {!isFetching && data.map((flight): ReactElement => <h3>{flight}</h3>)}
    </>
  );
};
