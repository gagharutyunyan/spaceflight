import React, { FC, ReactElement } from 'react';
import { Route } from 'react-router-dom';

import { Board } from '../Board';
import { Booking } from '../Booking';
import styled from 'styled-components';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const Main: FC = (): ReactElement => {
  return (
    <MainContainer>
      <Board />
      <Route exact path="/booking" component={Booking} />
    </MainContainer>
  );
};
