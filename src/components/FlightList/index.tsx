import React, { FC, ReactElement } from 'react';
import { useLaunchesFetch } from '../../hooks/useLaunchesFetch';

import { Error } from '../Error';
import { Loader } from '../Loader';
import { LaunchesActionTypes } from '../../store/actionTypes/index';
import { FlightLink } from '../FlightLink';
import styled from 'styled-components';

const FlightListContainer = styled.div`
  display: flex;
`;

type PropTypes = {
  fetchAsync: LaunchesActionTypes;
};

export const FlightList: FC<PropTypes> = ({ fetchAsync }: PropTypes) => {
  const { fetchedData, isFetching, error } = useLaunchesFetch(fetchAsync);

  return (
    <FlightListContainer>
      <Error error={error} />
      <Loader isFetching={isFetching} />
      {!isFetching && (
        <ul>
          {fetchedData.results.map(
            (flight): ReactElement => (
              <FlightLink key={flight.id} flight={flight} />
            )
          )}
        </ul>
      )}
    </FlightListContainer>
  );
};
