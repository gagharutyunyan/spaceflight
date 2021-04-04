import React, { FC, ReactElement } from 'react';
import { Route, Redirect } from 'react-router-dom';
import styled from 'styled-components';

import { Board } from '../Board';
import { Booking } from '../Booking';

const MainContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Main: FC = (): ReactElement => {
  return (
    <MainContainer>
      <Board />
      <Route exact path="/booking" component={Booking} />
      <Route
        exact
        path="/booking/*"
        render={() => <Redirect to="/booking" />}
      />
    </MainContainer>
  );
};
