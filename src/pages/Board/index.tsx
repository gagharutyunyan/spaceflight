import React, { FC } from 'react';
import { Route, Redirect } from 'react-router-dom';

import { FlightList } from '../../components/FlightList';
import { FlightElement } from '../../components/FlightElement';
import { routes } from '../../api/boardRoutesData';
import { BoardNavigation } from '../../components/BoardNavigation';

export const Board: FC = () => {
  return (
    <>
      <Route exact path="/" render={() => <Redirect exact to="/board" />} />
      <Route path="/board" render={() => <BoardNavigation />} />
      {routes.map((route) => {
        return (
          <Route
            key={route.path}
            exact={route.exact}
            path={route.path}
            render={() => <FlightList fetchAsync={route.fetchAsync()} />}
          />
        );
      })}

      <Route
        exact
        path="/flight/:id"
        render={({ match }) => {
          const { id } = match.params;
          return <FlightElement itemId={id} />;
        }}
      />
    </>
  );
};
