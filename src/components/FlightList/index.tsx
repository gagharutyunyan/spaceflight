import React, { FC, ReactElement } from 'react';
import { useLaunchesFetch } from '../../hooks/useLaunchesFetch';

import { Error } from '../Error';
import { Loader } from '../Loader';
import { LaunchesActionTypes } from '../../store/actionTypes/launchesActionTypes';
import { FlightLink } from '../FlightLink';
import styled from 'styled-components';

const FlightListComponent = styled.div`
  display: flex;
  justify-content: center;
  max-width: 70vw;
  min-height: 50vh;
`;

const FlightListContainer = styled.ul`
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
`;

type PropTypes = {
  fetchAsync: LaunchesActionTypes;
};

export const FlightList: FC<PropTypes> = ({ fetchAsync }: PropTypes) => {
  const { fetchedData, isFetching, error } = useLaunchesFetch(fetchAsync);

  return (
    <FlightListComponent>
      <Error error={error} />
      <Loader isFetching={isFetching} />
      {!isFetching && (
        <FlightListContainer>
          {fetchedData.results.map(
            (flight): ReactElement => (
              <FlightLink key={flight.id} flight={flight} />
            )
          )}
        </FlightListContainer>
      )}
    </FlightListComponent>
  );
};
