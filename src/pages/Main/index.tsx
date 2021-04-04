import React, { FC, ReactElement } from 'react';
import { Route } from 'react-router-dom';

import { Board } from '../Board';
import { Booking } from '../Booking';
import styled from 'styled-components';
import { useBookingMockData } from '../../hooks/useBookingMockData';

const MainContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Main: FC = (): ReactElement => {
  const bookingData = useBookingMockData();

  return (
    <MainContainer>
      <Board />
      <Route
        exact
        path="/booking"
        render={() => <Booking {...bookingData} />}
      />
    </MainContainer>
  );
};
